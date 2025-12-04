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
    
    // Single optimized query that returns everything we need in one shot:
    // - Top N scores
    // - User's rank and score
    // - Window around user
    // - Total count
    // Uses WITH clause (CTE) to avoid multiple table scans
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
      ),
      top_scores AS (
        SELECT user_id, username, score, rn FROM ranked_scores WHERE rn <= $2
      ),
      user_score AS (
        SELECT user_id, username, score, rn, total FROM ranked_scores WHERE user_id = $3
      )
      SELECT 
        'top' AS type, user_id, username, score, rn, NULL::bigint AS total
      FROM top_scores
      UNION ALL
      SELECT 
        'user' AS type, user_id, username, score, rn, total
      FROM user_score
      UNION ALL
      SELECT 
        'window' AS type, user_id, username, score, rn, NULL::bigint AS total
      FROM ranked_scores
      WHERE user_id = $3 OR (rn BETWEEN (SELECT GREATEST(1, rn - $4) FROM user_score) 
                            AND (SELECT rn + $5 FROM user_score))
    `;

    const params = [gameId, top, userId || '', before, after];
    const result = await client.query(optimizedQuery, params);
    
    const topRows: any[] = [];
    const windowRows: any[] = [];
    let userRank: number | null = null;
    let total: number | null = null;
    
    for (const row of result.rows) {
      if (row.type === 'top') {
        topRows.push({ user_id: row.user_id, username: row.username, score: row.score });
      } else if (row.type === 'user') {
        userRank = row.rn;
        total = row.total ? Number(row.total) : null;
      } else if (row.type === 'window') {
        windowRows.push({ user_id: row.user_id, username: row.username, score: row.score, rn: row.rn });
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
