
import { pgTable, text, integer, timestamp, index, primaryKey } from 'drizzle-orm/pg-core';

export const gameScores = pgTable('game_scores', {
  gameId: text('game_id').notNull(),
  userId: text('user_id').notNull(),
  username: text('username').notNull(),
  score: integer('score').notNull(),
  recordedAt: timestamp('recorded_at').defaultNow(),
}, (table) => [
  // Composite primary key on game_id and user_id
  primaryKey({ columns: [table.gameId, table.userId] }),
  // Composite index for leaderboard queries: game_id + score DESC + user_id
  // This covers ORDER BY score DESC, user_id and WHERE game_id = X queries efficiently
  index('idx_game_score_user').on(table.gameId, table.score.desc(), table.userId),
]);