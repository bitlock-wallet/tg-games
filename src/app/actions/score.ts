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
    SELECT user_id, username, score AS high_score
    FROM game_scores
    WHERE game_id = $1
    ORDER BY score DESC, user_id
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
  const client = await pgPool.connect();
  try {
    console.log('[getLeaderboardWindowAction] inputs', { gameId, userId, top, before, after });

    // Optimized query: Single CTE for ranked scores, conditional logic for window
    // This reduces the number of table scans and UNION operations
    const optimizedQuery = `
      WITH ranked_scores AS (
        SELECT 
          user_id,
          username,
          score,
          ROW_NUMBER() OVER (ORDER BY score DESC, user_id) AS rn,
          COUNT(*) OVER () AS total
        FROM game_scores
        WHERE game_id = $1
      )
      ${userId ? `
      , user_rank AS (
        SELECT rn, total FROM ranked_scores WHERE user_id = $2 LIMIT 1
      )
      SELECT 
        rs.user_id,
        rs.username,
        rs.score,
        rs.rn,
        COALESCE(ur.total, (SELECT total FROM ranked_scores LIMIT 1)) AS total
      FROM ranked_scores rs
      LEFT JOIN user_rank ur ON true
      WHERE 
        rs.rn <= $3  -- top N
        OR (
          ur.rn IS NOT NULL AND
          rs.rn BETWEEN GREATEST(1, ur.rn - $4) AND (ur.rn + $5)
        )
      ORDER BY rs.rn
      ` : `
      SELECT 
        user_id,
        username,
        score,
        rn,
        total
      FROM ranked_scores
      WHERE rn <= $2
      ORDER BY rn
      `}
    `;

    const params = userId ? [gameId, userId, top, before, after] : [gameId, top];
    const result = await client.query(optimizedQuery, params);

    // Parse results
    const topRows: any[] = [];
    const windowRows: any[] = [];
    let userRank: number | null = null;
    let total: number | null = null;

    for (const row of result.rows) {
      const entry = { user_id: row.user_id, username: row.username, score: row.score, rn: row.rn };

      if (row.rn <= top) {
        topRows.push({ user_id: row.user_id, username: row.username, score: row.score });
      }

      windowRows.push(entry);

      if (userId && row.user_id === userId) {
        userRank = row.rn;
      }

      if (row.total && total === null) {
        total = Number(row.total);
      }
    }

    console.log('[getLeaderboardWindowAction] result:', {
      topCount: topRows.length,
      windowCount: windowRows.length,
      rank: userRank,
      total
    });

    return {
      rank: userRank,
      top: topRows,
      window: windowRows,
      total: total || 0
    };
  } finally {
    client.release();
  }
}
