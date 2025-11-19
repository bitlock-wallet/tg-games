// tools/call_migrate.js
const path = require('path');

console.log('[tools/call_migrate] Starting migration script...');

// FIX: Explicitly point to the .ts file so ts-node finds it immediately
const migratePath = '../src/db/migrate.ts'; 

try {
  // We use require() here because we are running with -r ts-node/register
  const { applyMigrations } = require(migratePath);

  (async () => {
    try {
      console.log('[tools/call_migrate] Running applyMigrations()...');
      await applyMigrations();
      console.log('[tools/call_migrate] Migrations applied successfully!');
      process.exit(0);
    } catch (e) {
      console.error('[tools/call_migrate] Migration logic failed:', e);
      process.exit(1);
    }
  })();

} catch (e) {
  console.error(`[tools/call_migrate] Failed to load module at ${migratePath}`);
  console.error('Error details:', e);
  process.exit(1);
}