import { NextResponse } from 'next/server';

// Small mock endpoint for testing multiplier behavior.
// If the server action `getMultiplierAction` is available it will be used
// (and can call an external API configured by env). Otherwise the route
// returns a deterministic/random mock volume for local testing.

function computeMultiplier(volume: number) {
  if (volume > 40000) return 5;
  if (volume > 30000) return 4;
  if (volume > 20000) return 3;
  if (volume > 10000) return 2;
  return 1;
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get('user_id') ?? undefined;
    const username = url.searchParams.get('username') ?? undefined;
    // If `USE_MOCK_MULTIPLIER` is set (truthy and not '0'), return a mock that
    // mimics the external API response. Otherwise always attempt to call the
    // server action which forwards to the external API.
    const useMock = Boolean(process.env && process.env.USE_MOCK_MULTIPLIER && process.env.USE_MOCK_MULTIPLIER !== '0');
    if (useMock) {
      let volume = 0;
      const key = userId ?? username ?? undefined;
      if (key) {
        let h = 2166136261 >>> 0;
        for (let i = 0; i < key.length; i++) {
          h ^= key.charCodeAt(i);
          h = Math.imul(h, 16777619) >>> 0;
        }
        volume = Math.abs(h % 60001);
      } else {
        volume = Math.floor(Math.random() * 60001);
      }
      const multiplier = computeMultiplier(volume);
      console.log('[api/get-multiplier] USE_MOCK_MULTIPLIER active — returning mock', { userId, username, volume, multiplier });
      return NextResponse.json({ volume, multiplier });
    }

    // Always call server action (expected to call external API). Return 502
    // when the server action is missing or fails so callers can handle errors.
    try {
      const mod = await import('../../actions/getMultiplier');
      if (mod && typeof mod.getMultiplierAction === 'function') {
        const r = await mod.getMultiplierAction(userId ?? null, username ?? null);
        console.log('[api/get-multiplier] server action returned', { userId, username, result: r });
        return NextResponse.json(r);
      } else {
        console.error('[api/get-multiplier] server action module missing getMultiplierAction');
        return NextResponse.json({ error: 'server action missing', volume: 0, multiplier: 1 }, { status: 502 });
      }
    } catch (e) {
      console.error('[api/get-multiplier] server action import or call failed', e);
      return NextResponse.json({ error: 'server action import failed', volume: 0, multiplier: 1 }, { status: 502 });
    }
  } catch (err) {
    console.error('[api/get-multiplier] error', err);
    return NextResponse.json({ error: String(err), volume: 0, multiplier: 1 }, { status: 500 });
  }
}
