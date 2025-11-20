export type ScopeOptions = { logIfMissing?: boolean };

export function scopeGameId(gameId: string | undefined | null, chatId?: string | null, opts?: ScopeOptions) {
  const gid = gameId ?? '';
  const cid = chatId && String(chatId).length > 0 ? String(chatId) : null;
  if (cid && gid.length > 0 && !gid.endsWith(`:${cid}`)) {
    return `${gid}:${cid}`;
  }
  if (opts?.logIfMissing && !cid) {
    // non-fatal: just warn so developers can detect missing chat_id cases
    // keep message terse and machine-friendly
    // eslint-disable-next-line no-console
    console.warn('[scopeGameId] missing chat_id; using unscoped gameId', { gameId: gid });
  }
  return gid;
}

export default scopeGameId;
