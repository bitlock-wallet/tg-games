// Build-time script to generate drizzle.config.json from drizzle.config.ts
// Run with: node -r ts-node/register tools/generate_drizzle_json.js
const fs = require('fs');
const path = require('path');

// Load the TypeScript config
const config = require(path.join(__dirname, '..', 'drizzle.config.ts'));

// Extract the default export (assuming it's the config object)
const drizzleConfig = config.default || config;

// If the schema folder is empty or missing, remove the `schema` property so
// drizzle-kit will operate on existing SQL migrations in `out` (./drizzle).
try {
  const schemaDir = path.join(process.cwd(), 'src', 'db', 'schema');
  const hasSchemaFiles = fs.existsSync(schemaDir) && fs.readdirSync(schemaDir).length > 0;
  if (!hasSchemaFiles && drizzleConfig.schema) {
    console.log('[tools/generate_drizzle_json] No TS schema files found; removing `schema` from config');
    delete drizzleConfig.schema;
  }
} catch (e) {
  // Ignore and continue — we'll just write whatever config we have
}

// Write to JSON
fs.writeFileSync(
  path.join(__dirname, '..', 'drizzle.config.json'),
  JSON.stringify(drizzleConfig, null, 2)
);

console.log('Generated drizzle.config.json from drizzle.config.ts');