"use server";

export async function submitScoreAction(gameId: string, userId: string, username: string, score: number) {
  const { pgPool } = await import('../../db/drizzle');
  const UPSERT_SCORE = `
    INSERT INTO game_scores (game_id, user_id, username, score)
    VALUES ($1, $2, $3, $4)
    ON CONFLICT (game_id, user_id)
    DO UPDATE SET score = GREATEST(game_scores.score, EXCLUDED.score), username = EXCLUDED.username, recorded_at = CURRENT_TIMESTAMP
    RETURNING game_id, user_id, username, score
  `;
  const client = await pgPool.connect();
  try {
    console.log('[submitScoreAction] inserting/updating score', { gameId, userId, username, score });
    const res = await client.query(UPSERT_SCORE, [gameId, userId, username, score]);
    console.log('[submitScoreAction] result rows:', res.rows);
    return res.rows && res.rows[0] ? res.rows[0] : null;
  } finally {
    client.release();
  }
}

export async function getLeaderboardAction(gameId: string, limit = 10) {
  const { pgPool } = await import('../../db/drizzle');
  const LEADERBOARD_BY_GAME = `
    SELECT username, score AS high_score
    FROM game_scores
    WHERE game_id = $1
    ORDER BY high_score DESC
    LIMIT $2
  `;
  const client = await pgPool.connect();
  try {
    console.log('[getLeaderboardAction] fetching leaderboard', { gameId, limit });
    const res = await client.query(LEADERBOARD_BY_GAME, [gameId, limit]);
    console.log('[getLeaderboardAction] rows:', res.rows);
    return res.rows || [];
  } finally {
    client.release();
  }
}

export async function getLeaderboardWindowAction(gameId: string, userId?: string, top = 5, before = 5, after = 5) {
  const { pgPool } = await import('../../db/drizzle');
  const LEADERBOARD_TOP_N = `
    SELECT user_id, username, score
    FROM game_scores
    WHERE game_id = $1
    ORDER BY score DESC
    LIMIT $2
  `;
  const client = await pgPool.connect();
  try {
    console.log('[getLeaderboardWindowAction] inputs', { gameId, userId, top, before, after });
    const topRows = (await client.query(LEADERBOARD_TOP_N, [gameId, top])).rows || [];
    console.log('[getLeaderboardWindowAction] topRows:', topRows);
    if (!userId) return { rank: null, top: topRows, window: [] };

    // Efficient rank calculation without scanning/sorting the entire table:
    // - fetch the user's current score
    // - rank = 1 + count of rows with a strictly greater score OR equal score but smaller user_id
    // This uses indexed COUNT queries instead of a full window() over the whole game partition.
    const userRes = await client.query(
      `SELECT user_id, username, score FROM game_scores WHERE game_id = $1 AND user_id = $2 LIMIT 1`,
      [gameId, userId]
    );
    if (!userRes.rows || userRes.rows.length === 0) return { rank: null, top: topRows, window: [] };
    const userRow = userRes.rows[0];
    const userScore = Number(userRow.score);

    const rankCountRes = await client.query(
      `SELECT COUNT(*)::int AS cnt FROM game_scores WHERE game_id = $1 AND (score > $2 OR (score = $2 AND user_id < $3))`,
      [gameId, userScore, userId]
    );
    const better = (rankCountRes.rows && rankCountRes.rows[0] && rankCountRes.rows[0].cnt) || 0;
    const rank = Number(better) + 1;

    // If caller requested a tight single-row window (before=0 && after=0), return only the user's row
    // with the computed rank. This avoids any window() or OFFSET work.
    if (before === 0 && after === 0) {
      const totalRes = await client.query('SELECT COUNT(*)::int AS cnt FROM game_scores WHERE game_id = $1', [gameId]);
      const total = (totalRes.rows && totalRes.rows[0] && totalRes.rows[0].cnt) || 0;
      const window = [ { user_id: String(userRow.user_id), username: userRow.username, score: userScore, rn: rank } ];
      console.log('[getLeaderboardWindowAction] rank/window rows (tight):', { rank, window });
      return { rank, top: topRows, window, total };
    }

    // Fallback: for broader windows, use the windowing query. This may scan/order the partition
    // but it's limited to the requested rn range which will typically be small (before+after).
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
    console.log('[getLeaderboardWindowAction] rank/window rows:', { rank, window });

    const totalRes = await client.query('SELECT COUNT(*)::int AS cnt FROM game_scores WHERE game_id = $1', [gameId]);
    const total = (totalRes.rows && totalRes.rows[0] && totalRes.rows[0].cnt) || 0;
    console.log('[getLeaderboardWindowAction] total count:', total);

    return { rank, top: topRows, window, total };
  } finally {
    client.release();
  }
}
