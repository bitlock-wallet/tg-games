import crypto from 'crypto';

function makeSpkiFromRawEd25519PublicKey(rawPublicKey: any): Buffer {
  const header = Buffer.from('302a300506032b6570032100', 'hex');
  const rawBuf = Buffer.from(rawPublicKey);
  const spki = Buffer.allocUnsafe(header.length + rawBuf.length);
  (header as any).copy(spki as any, 0);
  (rawBuf as any).copy(spki as any, (header as any).length);
  return spki;
}

function publicKeyToKeyObject(pub: string): crypto.KeyObject | null {
  if (!pub) return null;
  try {
    if (pub.trim().startsWith('-----BEGIN')) {
      return crypto.createPublicKey(pub);
    }
    const hex = pub.trim();
    const raw = Buffer.from(hex, 'hex');
    if (raw.length !== 32) {
      return crypto.createPublicKey(pub);
    }
    const spki = makeSpkiFromRawEd25519PublicKey(raw);
    return crypto.createPublicKey({ key: spki, format: 'der', type: 'spki' });
  } catch (err) {
    console.warn('[verifyTelegramInitData] public key parse error', err);
    return null;
  }
}

export function verifyTelegramInitData(initData: string | undefined, botToken: string | undefined, publicKeyPem?: string): boolean {
  if (!initData || !botToken) return false;

  try {
    const pairs = initData.split('&');

    // HMAC: exclude only 'hash' and use decoded values
    const hmacItems: string[] = [];
    // Ed25519: exclude 'hash' and 'signature'
    const ed25519Items: string[] = [];

    let hashParam: string | null = null;
    let signatureParamRaw: string | null = null; // raw value from query (for base64 decode)

    for (const pair of pairs) {
      const idx = pair.indexOf('=');
      if (idx === -1) continue;
      const key = pair.substring(0, idx);
      const rawValue = pair.substring(idx + 1);

      if (key === 'hash') {
        hashParam = rawValue;
        continue;
      }

      // Try to decode value per Telegram spec (user JSON is URL-encoded)
      let decodedValue: string;
      try {
        decodedValue = decodeURIComponent(rawValue);
      } catch (e) {
        decodedValue = rawValue;
      }

      // For HMAC include all keys except 'hash'
      hmacItems.push(`${key}=${decodedValue}`);

      // For Ed25519 exclude 'signature'
      if (key === 'signature') {
        signatureParamRaw = rawValue; // keep raw for base64 handling
        // do NOT add to ed25519Items
      } else {
        ed25519Items.push(`${key}=${decodedValue}`);
      }
    }

    if (!hashParam && !signatureParamRaw) return false;

    const sortFn = (a: string, b: string) => a.split('=', 1)[0].localeCompare(b.split('=', 1)[0]);
    hmacItems.sort(sortFn);
    ed25519Items.sort(sortFn);

    // --- HMAC (Hash) Verification ---
    if (hashParam) {
      const hmacDataCheckString = hmacItems.join('\n');
      // debug logging removed

      // Secret key: HMAC-SHA256(key='WebAppData', data=botToken)
      const secretKey = crypto.createHmac('sha256', 'WebAppData').update(botToken).digest();
      
      const hmacBuf = crypto.createHmac('sha256', secretKey as any).update(hmacDataCheckString).digest();
      const receivedBuf = Buffer.from(hashParam, 'hex');

      // debug logging removed

      if (hmacBuf.length === receivedBuf.length) {
        const ok = crypto.timingSafeEqual(hmacBuf as any, receivedBuf as any);
        console.log('[verifyTelegramInitData] method=HMAC ok=', ok);
        if (ok) return true;
      } else {
        console.log('[verifyTelegramInitData] method=HMAC mismatch length');
      }
    }

    // --- ED25519 (Signature) Verification (Optional/Fallback) ---
    if (signatureParamRaw) {
      const ed25519DataCheckString = ed25519Items.join('\n');

      // Normalize base64-like signature (URL-safe -> standard) and pad
      const b64 = signatureParamRaw.replace(/-/g, '+').replace(/_/g, '/');
      const pad = b64.length % 4;
      const padded = pad ? b64 + '='.repeat(4 - pad) : b64;
      const sigBuf = Buffer.from(padded, 'base64');

      const publicKeyConfig = publicKeyPem ?? process.env.TELEGRAM_INITDATA_PUBLIC_KEY ?? '';
      const publicKeyObj = publicKeyToKeyObject(publicKeyConfig);

      if (publicKeyObj) {
        try {
          const botId = botToken.split(':')[0];
          const sigData = `${botId}:WebAppData\n${ed25519DataCheckString}`;
          const verified = crypto.verify(null as any, Buffer.from(sigData) as any, publicKeyObj as any, sigBuf as any);
          if (verified) {
            console.log('[verifyTelegramInitData] method=signature ok= true');
            return true;
          }
        } catch (e) {
          console.warn('[verifyTelegramInitData] Ed25519 verification error', e);
        }
      }
    }
  } catch (err) {
    console.warn('[verifyTelegramInitData] error', err);
    return false;
  }
  return false;
}