"use server";

export async function runMigrationsAction() {
  const { applyMigrations } = await import('../../db/migrate');
  await applyMigrations();
  return { ok: true };
}
