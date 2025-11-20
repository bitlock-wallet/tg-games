import { NextResponse } from 'next/server';

type Body = {
  username?: string | null;
  userId?: string | number | null;
  score?: number | null;
  gameId?: string | null;
  chatId?: string | null;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;
    const BOT_TOKEN = process.env.BOT_TOKEN;
    const ANNOUNCE_CHAT_ID = process.env.TELEGRAM_ANNOUNCE_CHAT_ID;

    if (!BOT_TOKEN) {
      return NextResponse.json({ ok: false, error: 'Missing BOT_TOKEN' }, { status: 500 });
    }

    const name = body.username ?? (body.userId ? String(body.userId) : 'Unknown');
    const score = typeof body.score === 'number' ? body.score : null;
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
    if (!targetChat) {
      return NextResponse.json({ ok: false, error: 'No target chat id available for announce' }, { status: 400 });
    }

    let text = '';
    if (score !== null) text = `${name} scored ${score} on ${gameId}`;
    else text = `${name} opened/closed ${gameId}`;

    const resp = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: targetChat, text, disable_notification: true, parse_mode: 'HTML' }),
    });

    const data = await resp.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: String(err?.message ?? err) }, { status: 500 });
  }
}
