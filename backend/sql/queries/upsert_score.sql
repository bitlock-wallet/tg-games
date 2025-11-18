-- SQLite UPSERT Command: Inserts a score or updates the existing score 
-- if the new one is higher, based on the unique combination of (game_id, user_id).
INSERT INTO game_scores (game_id, user_id, username, score)
VALUES (?, ?, ?, ?) -- Now requires 4 parameters
ON CONFLICT(game_id, user_id) DO UPDATE SET
    score = CASE 
                WHEN excluded.score > game_scores.score 
                THEN excluded.score 
                ELSE game_scores.score 
            END,
    username = excluded.username, -- Always keep the latest username
    recorded_at = CURRENT_TIMESTAMP;