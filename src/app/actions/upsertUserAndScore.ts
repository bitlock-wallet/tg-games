"use server";

export async function upsertUserAndScoreAction(
  gameId: string,
  userId: string,
  score: number,
  initData?: string | null
) {
  const { pgPool } = await import('../../db/drizzle');
  const client = await pgPool.connect();
  try {
    console.log('[upsertUserAndScore] start', { gameId, userId, score, initData });
    await client.query('BEGIN');

    // Parse initData (URL query string) server-side to prefer authoritative user info
    // initData format: key=value&... where 'user' may be a JSON-encoded value
    let parsedUsername: string | null = null;
    let parsedDisplayName: string | null = null;
    try {
      if (initData) {
        const pairs = new URLSearchParams(initData);
        const u = pairs.get('user');
        if (u) {
          try {
            const parsed = JSON.parse(decodeURIComponent(u));
            if (parsed) {
              if (parsed.username) parsedUsername = String(parsed.username);
              // prefer first_name as base for display name if username missing
              if (parsed.first_name || parsed.last_name) parsedDisplayName = [parsed.first_name, parsed.last_name].filter(Boolean).join(' ');
              // if username empty but display name available, use that as username as requested
              if (!parsedUsername && parsedDisplayName) parsedUsername = parsedDisplayName;
            }
          } catch (err) {
            // ignore parse errors
            console.warn('[upsertUserAndScore] failed to parse initData user field', err, u);
          }
        }
      }
    } catch (e) {
      // ignore
    }

    // Final fallbacks
    const finalUsername = parsedUsername ?? `user-${userId}`;
    const finalDisplayName = parsedDisplayName ?? finalUsername;
    console.log('[upsertUserAndScore] resolved user info', { parsedUsername, parsedDisplayName, finalUsername, finalDisplayName });

    // If the incoming gameId is unscoped, try to derive a chat key from initData
    // so that scores are automatically stored per-chat even when the client
    // didn't include `chat_id` in query params. Use parseInitChat to support
    // start_param and chat_instance fallbacks.
    try {
      const { parseChatKeyFromInitData } = await import('../../lib/parseInitChat');
      const derived = parseChatKeyFromInitData(initData ?? null);
      if (derived && (!gameId || !String(gameId).endsWith(`:${derived}`))) {
        gameId = `${gameId}:${derived}`;
        console.log('[upsertUserAndScore] SUCCESS: scoped gameId from initData', { gameId, derivedChatId: derived });
      } else {
        console.log('[upsertUserAndScore] info: gameId not scoped or already scoped', { gameId, derived });
      }
    } catch (e) {
      // ignore parsing errors; not critical
    }

    const UPSERT_USER = `
      INSERT INTO users (id, username, display_name)
      VALUES ($1, $2, $3)
      ON CONFLICT (id) DO UPDATE SET
        username = EXCLUDED.username,
        display_name = EXCLUDED.display_name
      RETURNING id, username, display_name, created_at
    `;

    const userRes = await client.query(UPSERT_USER, [userId, finalUsername, finalDisplayName]);
    console.log('[upsertUserAndScore] user upsert result rows:', userRes.rows);

    const UPSERT_SCORE = `
      INSERT INTO game_scores (game_id, user_id, username, score)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (game_id, user_id)
      DO UPDATE SET score = GREATEST(game_scores.score, EXCLUDED.score), username = EXCLUDED.username, recorded_at = CURRENT_TIMESTAMP
      RETURNING game_id, user_id, username, score
    `;

    const scoreRes = await client.query(UPSERT_SCORE, [gameId, userId, finalUsername, score]);
    console.log('[upsertUserAndScore] score upsert result rows:', scoreRes.rows);

    await client.query('COMMIT');

    return {
      user: userRes.rows && userRes.rows[0] ? userRes.rows[0] : null,
      score: scoreRes.rows && scoreRes.rows[0] ? scoreRes.rows[0] : null,
    };
  } catch (e) {
    try {
      await client.query('ROLLBACK');
    } catch (_) {
      // ignore
    }
    throw e;
  } finally {
    client.release();
  }
}
