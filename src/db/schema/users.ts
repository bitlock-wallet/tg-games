import { pgTable, text, timestamp, index } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: text('id').primaryKey(),
  username: text('username').notNull(),
  displayName: text('display_name'),
  createdAt: timestamp('created_at').defaultNow(),
}, (table) => [
  index('idx_users_username').on(table.username),
]);
