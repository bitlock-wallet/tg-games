import { NextResponse } from 'next/server';
import { getLeaderboardAction } from '../../../actions/score';

export async function GET(req: any, context: any) {
  try {
    const url = new URL(req.url);
    const limitParam = url.searchParams.get('limit');
    const limit = limitParam ? Math.max(1, Math.min(100, Number(limitParam))) : 10;
    let paramsObj: any = {};
    if (context && context.params) {
      // context.params can be a Promise in some Next.js versions
      paramsObj = typeof context.params.then === 'function' ? await context.params : context.params;
    } else {
      paramsObj = context || {};
    }
    let gameId = paramsObj?.gameId;
    if (!gameId) {
      // fallback: parse from pathname `/api/<gameId>/...`
      const m = url.pathname.match(/\/api\/([^\/]+)\//);
      gameId = m ? m[1] : undefined;
    }
    const chatId = url.searchParams.get('chat_id');
    if (chatId && !gameId.endsWith(`:${chatId}`)) gameId = `${gameId}:${chatId}`;
    console.log('[api/leaderboard] GET', { gameId, limit, chatId });
    const result = await getLeaderboardAction(gameId, limit);
    console.log('[api/leaderboard] result rows:', result);
    return NextResponse.json({ success: true, top: result });
  } catch (err) {
    console.error('[api/leaderboard] error', err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
