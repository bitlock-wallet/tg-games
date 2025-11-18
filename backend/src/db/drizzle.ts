import dotenv from 'dotenv';
import { Pool } from 'pg';
import { drizzle as drizzleClient } from 'drizzle-orm/node-postgres';

dotenv.config();

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.PG_CONNECTION || process.env.PG_URI || '';

const pool = new Pool({ connectionString: connectionString || undefined });

export const db = drizzleClient(pool);
export const pgPool = pool;

export async function closePool() {
  await pool.end();
}
