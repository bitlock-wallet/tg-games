import { NextResponse } from 'next/server';
import { upsertUserAndScoreAction } from '../../../actions/upsertUserAndScore';

export async function POST(req: any, context: any) {
  try {
    const body = await req.json().catch(() => ({}));
    let paramsObj: any = {};
    if (context && context.params) {
      paramsObj = typeof context.params.then === 'function' ? await context.params : context.params;
    } else {
      paramsObj = context || {};
    }
    let gameId = paramsObj?.gameId;
    if (!gameId) {
      const url = new URL(req.url);
      const m = url.pathname.match(/\/api\/([^\/]+)\//);
      gameId = m ? m[1] : undefined;
    }
    const userId = body.user_id ?? body.userId ?? body.userIdString ?? 'unknown';
    // If a chat_id query param is present, scope the gameId to that chat. This
    // ensures leaderboard and scores are stored per chat even when the frontend
    // calls the API without scoping the `gameId` in the path.
    const url = new URL(req.url);
    const chatIdParam = url.searchParams.get('chat_id');
    if (chatIdParam && chatIdParam.length > 0 && !gameId.endsWith(`:${chatIdParam}`)) {
      gameId = `${gameId}:${chatIdParam}`;
    }
    const score = typeof body.score === 'number' ? body.score : Number(body.score || 0);
    const initData = body.initData ?? null;

    console.log('[api/submit-score] POST', { gameId, userId, score, hasInitData: !!initData });

    const result = await upsertUserAndScoreAction(gameId, String(userId), score, initData);
    console.log('[api/submit-score] result', result);
    return NextResponse.json({ success: true, result });
  } catch (err) {
    console.error('[api/submit-score] error', err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
