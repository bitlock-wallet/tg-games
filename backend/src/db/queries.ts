import { pgPool } from './drizzle';

const UPSERT_SCORE = `
  INSERT INTO game_scores (game_id, user_id, username, score)
  VALUES ($1, $2, $3, $4)
  ON CONFLICT (game_id, user_id)
  DO UPDATE SET score = GREATEST(game_scores.score, EXCLUDED.score)
  RETURNING game_id, user_id, username, score
`;

const LEADERBOARD_BY_GAME = `
  SELECT username, score AS high_score
  FROM game_scores
  WHERE game_id = $1
  ORDER BY high_score DESC
  LIMIT $2
`;

export async function upsertScore(gameId: string, userId: string, username: string, score: number) {
  const client = await pgPool.connect();
  try {
    const res = await client.query(UPSERT_SCORE, [gameId, userId, username, score]);
    return res.rows && res.rows[0] ? res.rows[0] : null;
  } finally {
    client.release();
  }
}

export async function getLeaderboard(gameId: string, limit = 10) {
  const client = await pgPool.connect();
  try {
    const res = await client.query(LEADERBOARD_BY_GAME, [gameId, limit]);
    return res.rows || [];
  } finally {
    client.release();
  }
}

const LEADERBOARD_TOP_N = `
  SELECT user_id, username, score
  FROM game_scores
  WHERE game_id = $1
  ORDER BY score DESC
  LIMIT $2
`;

const COUNT_BY_GAME = `SELECT COUNT(*)::int AS cnt FROM game_scores WHERE game_id = $1`;

export async function getLeaderboardTop(gameId: string, limit = 100) {
  const client = await pgPool.connect();
  try {
    const res = await client.query(LEADERBOARD_TOP_N, [gameId, limit]);
    return res.rows || [];
  } finally {
    client.release();
  }
}

export async function getTotalCount(gameId: string) {
  const client = await pgPool.connect();
  try {
    const res = await client.query(COUNT_BY_GAME, [gameId]);
    return (res.rows && res.rows[0] && res.rows[0].cnt) || 0;
  } finally {
    client.release();
  }
}

// Returns: { rank: number | null, top: Array, window: Array }
export async function getLeaderboardWindow(gameId: string, userId: string | undefined, topLimit = 5, before = 5, after = 5) {
  const client = await pgPool.connect();
  try {
    // Top N
    const top = (await client.query(LEADERBOARD_TOP_N, [gameId, topLimit])).rows || [];

    if (!userId) {
      return { rank: null, top, window: [] };
    }

    // Compute rank for the user
    const rankSql = `
      SELECT rn FROM (
        SELECT user_id, ROW_NUMBER() OVER (ORDER BY score DESC, user_id) AS rn
        FROM game_scores WHERE game_id = $1
      ) t WHERE user_id = $2
    `;

    const rankRes = await client.query(rankSql, [gameId, userId]);
    if (!rankRes.rows || rankRes.rows.length === 0) {
      return { rank: null, top, window: [] };
    }
    const rank = rankRes.rows[0].rn as number;

    const start = Math.max(1, rank - before);
    const end = rank + after;

    const windowSql = `
      SELECT user_id, username, score, rn FROM (
        SELECT user_id, username, score, ROW_NUMBER() OVER (ORDER BY score DESC, user_id) AS rn
        FROM game_scores WHERE game_id = $1
      ) t WHERE rn BETWEEN $2 AND $3 ORDER BY rn
    `;

    const windowRes = await client.query(windowSql, [gameId, start, end]);
    const window = windowRes.rows || [];

    return { rank, top, window };
  } finally {
    client.release();
  }
}

export async function ensureSchema() {
  const client = await pgPool.connect();
  try {
    const check = await client.query("SELECT to_regclass('public.schema_versions') IS NOT NULL AS exists");
    const exists = check.rows && check.rows[0] && check.rows[0].exists === true;
    if (!exists) {
      // Do NOT attempt to create schema here. Migrations are centralized in wallet-backend.
      console.warn('Database schema for tg-games not found. Please run centralized migrations in wallet-backend to create game_scores.');
    }
    return exists === true;
  } finally {
    client.release();
  }
}
