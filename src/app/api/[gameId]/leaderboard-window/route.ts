import { NextResponse } from 'next/server';
import { getLeaderboardWindowAction } from '../../../actions/score';

export async function GET(req: Request, { params }: { params: { gameId: string } }) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get('user_id') ?? undefined;
    const top = Number(url.searchParams.get('top') ?? '5');
    const before = Number(url.searchParams.get('before') ?? '5');
    const after = Number(url.searchParams.get('after') ?? '5');

    console.log('[api/leaderboard-window] GET', { gameId: params.gameId, userId, top, before, after });
    const result = await getLeaderboardWindowAction(params.gameId, userId, top, before, after);
    console.log('[api/leaderboard-window] result', result);
    return NextResponse.json({ success: true, ...result });
  } catch (err) {
    console.error('[api/leaderboard-window] error', err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
