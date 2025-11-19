import { NextResponse } from 'next/server';
import { upsertUserAndScoreAction } from '../../../actions/upsertUserAndScore';

export async function POST(req: Request, { params }: { params: { gameId: string } }) {
  try {
    const body = await req.json().catch(() => ({}));
    const gameId = params.gameId;
    const userId = body.user_id ?? body.userId ?? body.userIdString ?? 'unknown';
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
