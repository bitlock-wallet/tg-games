import { NextResponse } from 'next/server';

type Body = {
  username?: string | null;
  userId?: string | number | null;
  score?: number | null;
  gameId?: string | null;
  chatId?: string | null;
  isTopFive?: boolean;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;
    console.log('[announce] Received request:', JSON.stringify(body, null, 2));

    const BOT_TOKEN = process.env.BOT_TOKEN;
    const ANNOUNCE_CHAT_ID = process.env.TELEGRAM_ANNOUNCE_CHAT_ID;

    if (!BOT_TOKEN) {
      console.error('[announce] ❌ Missing BOT_TOKEN in environment');
      return NextResponse.json({ ok: false, error: 'Missing BOT_TOKEN' }, { status: 500 });
    }

    // Only announce if it's a top 5 entry
    if (!body.isTopFive) {
      console.log('[announce] Skipping: Not a top 5 score');
      return NextResponse.json({ ok: true, skipped: true, reason: 'Not a top 5 score' });
    }

    const name = body.username ?? (body.userId ? `User ${body.userId}` : 'Unknown');
    const score = typeof body.score === 'number' ? body.score : null;

    // Extract clean game name from gameId (remove scope suffix if present)
    let gameName = 'Lumberjack';
    if (body.gameId) {
      const baseGameId = body.gameId.split(':')[0];
      gameName = baseGameId.charAt(0).toUpperCase() + baseGameId.slice(1);
    }
    const gameId = body.gameId ?? 'game';

    // Build a short, unobtrusive announcement. Prefer posting to provided chatId (if any),
    // otherwise fall back to configured `TELEGRAM_ANNOUNCE_CHAT_ID`.
    let targetChat: string | null = null;
    if (body.chatId) targetChat = String(body.chatId);
    // If the gameId is scoped like `lumberjack:<chatId>` prefer that chat id
    if (!targetChat && typeof gameId === 'string' && gameId.includes(':')) {
      const parts = gameId.split(':');
      if (parts.length > 1) targetChat = parts.slice(1).join(':');
    }
    if (!targetChat && ANNOUNCE_CHAT_ID) targetChat = ANNOUNCE_CHAT_ID;

    console.log('[announce] Target chat determination:', {
      fromBody: body.chatId,
      fromGameId: gameId.includes(':') ? gameId.split(':').slice(1).join(':') : null,
      fromEnv: ANNOUNCE_CHAT_ID,
      final: targetChat
    });

    if (!targetChat) {
      console.error('[announce] ❌ No target chat id available');
      return NextResponse.json({ ok: false, error: 'No target chat id available for announce' }, { status: 400 });
    }

    // Format: "John Timber entered the Top 5 in Lumberjack with 420 points"
    const text = score !== null
      ? `${name} entered the Top 5 in ${gameName} with ${score} points`
      : `${name} played ${gameName}`;

    console.log('[announce] Sending message:', {
      chat_id: targetChat,
      text,
      disable_notification: true
    });

    const resp = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: targetChat, text, disable_notification: true, parse_mode: 'HTML' }),
    });

    const data = await resp.json();

    if (data.ok) {
      console.log('[announce] ✅ Message sent successfully:', {
        message_id: data.result?.message_id,
        chat: data.result?.chat?.title || data.result?.chat?.id
      });
    } else {
      console.error('[announce] ❌ Telegram API error:', JSON.stringify(data, null, 2));
    }

    return NextResponse.json(data);
  } catch (err: any) {
    console.error('[announce] ❌ Exception:', err);
    return NextResponse.json({ ok: false, error: String(err?.message ?? err) }, { status: 500 });
  }
}
