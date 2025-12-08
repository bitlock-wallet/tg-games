"use server";

type MultiplierResult = {
  volume: number;
  multiplier: number;
};

type VolumeApiResponse = {
  telegramId: string;
  volumeUsd: string;
  period: string;
};

export async function getMultiplierAction(userId?: string | null, username?: string | null): Promise<MultiplierResult> {
  // Use the new BitLock API endpoint
  const telegramId = userId ?? username;
  let volume = 0;

  if (!telegramId) {
    console.log('[getMultiplierAction] No telegramId provided; returning multiplier=1');
    return { volume, multiplier: 1 };
  }

  try {
    const apiUrl = `https://api.bitlock.ai/api/telegram/volume/${telegramId}`;
    console.log('[getMultiplierAction] calling BitLock API', apiUrl);

    const res = await fetch(apiUrl, { method: 'GET' });
    if (!res.ok) {
      console.warn('[getMultiplierAction] BitLock API returned non-ok', res.status, res.statusText);
      return { volume: 0, multiplier: 1 };
    }

    const json: VolumeApiResponse = await res.json();
    // Parse volumeUsd from the response (it's a string)
    if (json && typeof json.volumeUsd === 'string') {
      volume = parseFloat(json.volumeUsd);
      if (isNaN(volume)) volume = 0;
    }
    console.log('[getMultiplierAction] BitLock API returned', { telegramId: json.telegramId, volumeUsd: json.volumeUsd, volume, period: json.period });
  } catch (e) {
    // If fetch fails, default to 0 volume
    console.warn('[getMultiplierAction] BitLock API fetch failed', e);
    volume = 0;
  }

  // Compute multiplier based on 7-day swap volume ranges
  let multiplier = 1;
  if (volume > 40000) multiplier = 5;
  else if (volume > 30000) multiplier = 4;
  else if (volume > 20000) multiplier = 3;
  else if (volume > 10000) multiplier = 2;

  return { volume, multiplier };
}
