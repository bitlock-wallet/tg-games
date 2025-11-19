import { NextResponse } from 'next/server';
import { getLeaderboardAction } from '../../../actions/score';

export async function GET(req: Request, { params }: { params: { gameId: string } }) {
  try {
    const url = new URL(req.url);
    const limitParam = url.searchParams.get('limit');
    const limit = limitParam ? Math.max(1, Math.min(100, Number(limitParam))) : 10;
    console.log('[api/leaderboard] GET', { gameId: params.gameId, limit });
    const result = await getLeaderboardAction(params.gameId, limit);
    console.log('[api/leaderboard] result rows:', result);
    return NextResponse.json({ success: true, top: result });
  } catch (err) {
    console.error('[api/leaderboard] error', err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
