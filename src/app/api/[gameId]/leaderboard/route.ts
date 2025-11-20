import { NextResponse } from 'next/server';
import { getLeaderboardAction } from '../../../actions/score';
import scopeGameId from '../../../../lib/scopeGameId';

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
    let chatId = url.searchParams.get('chat_id') ?? url.searchParams.get('chat_instance');
    // If no chatId query param, accept an `initData` query param and try to
    // derive chat key from it (helps when the client didn't include chat_id).
    if (!chatId) {
      const initData = url.searchParams.get('initData');
      if (initData) {
        try {
          const { parseChatKeyFromInitData } = await import('../../../../lib/parseInitChat');
          const derived = parseChatKeyFromInitData(initData);
          if (derived) chatId = derived;
        } catch (e) {}
      }
    }
    gameId = scopeGameId(gameId, chatId);
    console.log('[api/leaderboard] GET', { gameId, limit, chatId });
    const result = await getLeaderboardAction(gameId, limit);
    console.log('[api/leaderboard] result rows:', result);
    return NextResponse.json({ success: true, top: result });
  } catch (err) {
    console.error('[api/leaderboard] error', err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
