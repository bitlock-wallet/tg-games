export function parseChatKeyFromInitData(initData: string | null | undefined): string | null {
  if (!initData) return null;
  try {
    const pairs = new URLSearchParams(initData);
    // start_param may be Base64URL encoded (from bot deep links) or plain text
    let sp = pairs.get('start_param') ?? pairs.get('startapp') ?? pairs.get('start');
    if (sp) {
      let decoded = sp;
      
      // First try Base64URL decoding if it doesn't contain a colon (likely encoded)
      if (!sp.includes(':')) {
        try {
          // Replace URL-safe chars back to standard Base64
          const base64 = sp.replace(/-/g, '+').replace(/_/g, '/');
          // Decode using atob (Node.js 16+ or Buffer fallback)
          if (typeof atob !== 'undefined') {
            decoded = atob(base64);
          } else if (typeof Buffer !== 'undefined') {
            decoded = Buffer.from(base64, 'base64').toString('utf-8');
          }
          console.log('[parseInitChat] decoded Base64URL start_param:', decoded);
        } catch (e) {
          console.warn('[parseInitChat] Base64URL decode failed, trying decodeURIComponent:', e);
          // Fallback to decodeURIComponent for backward compatibility
          try {
            decoded = decodeURIComponent(sp);
          } catch (e2) {
            // Use original if both fail
            decoded = sp;
          }
        }
      } else {
        // If it has a colon, might still be URI-encoded
        try {
          decoded = decodeURIComponent(sp);
        } catch (e) {
          decoded = sp;
        }
      }
      
      // Extract chatId from <gameId>:<chatId> format
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
