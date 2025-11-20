export function parseChatKeyFromInitData(initData: string | null | undefined): string | null {
  if (!initData) return null;
  try {
    const pairs = new URLSearchParams(initData);
    // start_param may be encoded and can include `<gameId>:<chatId>` or just `<gameId>`
    const sp = pairs.get('start_param') ?? pairs.get('startapp') ?? pairs.get('start');
    if (sp) {
      const decoded = decodeURIComponent(sp);
      const parts = decoded.split(':');
      if (parts.length > 1) return parts.slice(1).join(':');
    }

    // chat_instance is a Telegram-provided per-chat token; use as a fallback
    const cinst = pairs.get('chat_instance') ?? pairs.get('chat_id');
    if (cinst) return String(cinst);

    // As a last resort, the initData may be URL-encoded JSON in a 'user' key; nothing useful there.
    return null;
  } catch (e) {
    return null;
  }
}

export default parseChatKeyFromInitData;
