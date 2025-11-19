import fs from 'fs/promises';
import path from 'path';
// We add .ts so ts-node can find the file explicitly
import { pgPool } from './drizzle.ts';


async function ensureSchemaVersions(client: any) {
  // Create schema_versions table if not exists
  await client.query(`CREATE TABLE IF NOT EXISTS schema_versions (version INTEGER PRIMARY KEY, applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`);
}

function extractVersion(filename: string) {
  // Try to extract leading number like v1_... or 001_...
  const m = filename.match(/(\d+)|v(\d+)/);
  if (!m) return null;
  return Number(m[1] || m[2]);
}

export async function applyMigrations() {
  const client = await pgPool.connect();
  try {
    await ensureSchemaVersions(client);

    const res = await client.query('SELECT version FROM schema_versions');
    const applied = new Set((res.rows || []).map((r: any) => Number(r.version)));

    // Use drizzle migrations folder by default (supports drizzle-kit generated SQL)
    const migrationsDir = path.join(process.cwd(), 'drizzle');
    const files = (await fs.readdir(migrationsDir)).filter(f => f.endsWith('.sql'));
    files.sort();

    for (const file of files) {
      const version = extractVersion(file) || 0;
      if (applied.has(version)) continue;

      const filePath = path.join(migrationsDir, file);
      let sql = await fs.readFile(filePath, 'utf8');
      sql = sql.replace(/\bDATETIME\b/g, 'TIMESTAMP');

      console.log('[migrate] Applying', filePath);
      // Some SQL files contain multiple statements; use simple split on ;\n for robustness (not perfect)
      try {
        await client.query(sql);
      } catch (e: any) {
        // If the migration fails because objects already exist, warn and continue.
        // Postgres error codes: 42P07 = duplicate_table, 42710 = duplicate_object
        const ignorable = e && e.code && (e.code === '42P07' || e.code === '42710');
        if (ignorable) {
          console.warn('[migrate] Ignoring already-exists error for', filePath, e.code);
        } else {
          console.error('[migrate] Failed to apply migration', filePath, e);
          throw e;
        }
      }

      try {
        await client.query('INSERT INTO schema_versions (version) VALUES ($1)', [version]);
      } catch (e: any) {
        // ignore unique violation (already recorded)
        if (e && e.code === '23505') {
          // unique_violation
        } else {
          console.warn('[migrate] Failed to record applied version', version, e);
        }
      }
    }

    console.log('[migrate] Migrations complete');
  } finally {
    client.release();
  }
}

if (require.main === module) {
  (async () => {
    try {
      await applyMigrations();
      console.log('Migrations applied successfully');
      process.exit(0);
    } catch (e) {
      console.error('Migration failed', e);
      process.exit(1);
    }
  })();
}
