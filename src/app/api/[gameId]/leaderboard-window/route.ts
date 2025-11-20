import { NextResponse } from 'next/server';
import { getLeaderboardWindowAction } from '../../../actions/score';

export async function GET(req: any, context: any) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get('user_id') ?? undefined;
    const top = Number(url.searchParams.get('top') ?? '5');
    const before = Number(url.searchParams.get('before') ?? '5');
    const after = Number(url.searchParams.get('after') ?? '5');
    let paramsObj: any = {};
    if (context && context.params) {
      paramsObj = typeof context.params.then === 'function' ? await context.params : context.params;
    } else {
      paramsObj = context || {};
    }
    let gameId = paramsObj?.gameId;
    if (!gameId) {
      const m = url.pathname.match(/\/api\/([^\/]+)\//);
      gameId = m ? m[1] : undefined;
    }

    const chatId = url.searchParams.get('chat_id');
    if (chatId && !gameId.endsWith(`:${chatId}`)) gameId = `${gameId}:${chatId}`;
    console.log('[api/leaderboard-window] GET', { gameId, userId, top, before, after, chatId });
    const result = await getLeaderboardWindowAction(gameId, userId, top, before, after);
    console.log('[api/leaderboard-window] result', result);
    return NextResponse.json({ success: true, ...result });
  } catch (err) {
    console.error('[api/leaderboard-window] error', err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
