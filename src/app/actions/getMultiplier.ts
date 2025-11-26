"use server";

type MultiplierResult = {
  volume: number;
  multiplier: number;
};

export async function getMultiplierAction(userId?: string | null, username?: string | null): Promise<MultiplierResult> {
  // Determine external API URL from env. If not set, return default multiplier=1
  const apiUrl = process.env.SWAP_VOLUME_API_URL ?? process.env.NEXT_PUBLIC_SWAP_VOLUME_API_URL ?? null;
  let volume = 0;
  if (!apiUrl) {
    console.log('[getMultiplierAction] SWAP_VOLUME_API_URL not configured; returning multiplier=1');
    return { volume, multiplier: 1 };
  }

  try {
    const url = new URL(apiUrl);
    if (userId) url.searchParams.set('user_id', String(userId));
    if (username) url.searchParams.set('username', String(username));
    console.log('[getMultiplierAction] calling external API', url.toString());
    const res = await fetch(url.toString(), { method: 'GET' });
    if (!res.ok) {
      console.warn('[getMultiplierAction] external API returned non-ok', res.status, res.statusText);
      return { volume: 0, multiplier: 1 };
    }
    const json = await res.json();
    // Expecting the external API to return { volume: number }
    if (json && typeof json.volume === 'number') volume = json.volume;
    console.log('[getMultiplierAction] external API returned', { volume });
  } catch (e) {
    // If fetch fails, default to 0 volume
    console.warn('[getMultiplierAction] external API fetch failed', e);
    volume = 0;
  }

  // Compute multiplier based on 7-day swap volume ranges
  let multiplier = 1;
  if (volume > 40000) multiplier = 5;
  else if (volume > 30000) multiplier = 4;
  else if (volume > 20000) multiplier = 3;
  else if (volume > 10000) multiplier = 2;
  else multiplier = 1;

  return { volume, multiplier };
}
