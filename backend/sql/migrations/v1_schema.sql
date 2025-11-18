-- V1 Migration Script: Initial Schema for ALL Game Scores

-- Meta table to track schema versions
CREATE TABLE schema_versions (
    version INTEGER PRIMARY KEY,
    applied_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert the initial version marker
INSERT INTO schema_versions (version) VALUES (1);

-- Main scores table, now generic for any game.
-- The composite PRIMARY KEY ensures a unique high score per user PER GAME.
CREATE TABLE game_scores (
    game_id TEXT NOT NULL,         -- e.g., 'lumberjack', 'doodle jump', etc.
    user_id TEXT NOT NULL, 
    username TEXT NOT NULL,
    score INTEGER NOT NULL,
    recorded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    -- IMPORTANT: Defines the unique high score as a combination of game and user
    PRIMARY KEY (game_id, user_id) 
);

-- Optional: Indexing the score column for faster leaderboard lookups
CREATE INDEX idx_game_score ON game_scores (game_id, score DESC);