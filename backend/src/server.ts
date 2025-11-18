import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { upsertScore, getLeaderboard, ensureSchema, getLeaderboardTop, getLeaderboardWindow, getTotalCount } from './db/queries';
import { pgPool } from './db/drizzle';
import { verifyTelegramInitData } from './verifyInitData';
import crypto from 'crypto';

dotenv.config();

const PORT = Number(process.env.PORT || 4000);
const BOT_TOKEN = (process.env.BOT_TOKEN || '').trim();
const TELEGRAM_PUB_KEY = (process.env.TELEGRAM_INITDATA_PUBLIC_KEY || '').trim();

const app = express();
app.use(cors());
app.use(express.json());

function isValidInitData(initData?: string) {
  if (!BOT_TOKEN) return true; // if BOT_TOKEN not configured, skip verification (dev)
  try {
    return verifyTelegramInitData(initData, BOT_TOKEN, TELEGRAM_PUB_KEY || undefined);
  } catch (err) {
    console.warn('[isValidInitData] verification error', err);
    return false;
  }
}

app.post('/api/:gameId/submit-score', async (req, res) => {
  const { gameId } = req.params;
  const { user_id, username, score, initData } = req.body;

  console.log(`[DEBUG] Received submit-score request for game: ${gameId}, user: ${user_id}, score: ${score}`);
  // Log request body fields for debugging (avoid logging secrets)
  try {
    console.log('[DEBUG] submit-score body:', {
      user_id: String(user_id),
      username: String(username),
      score: Number(score),
      initDataPresent: typeof initData === 'string',
      initDataLength: typeof initData === 'string' ? initData.length : 0,
    });
  } catch (e) {
    console.warn('[DEBUG] Failed to stringify submit-score body', e);
  }

  // If initData is present, parse and log its keys/values (excluding the hash) to help debug verification
  if (typeof initData === 'string' && initData.length > 0) {
    try {
      const params = new URLSearchParams(initData);
      const entries: Record<string, string> = {};
      for (const [k, v] of params.entries()) {
        if (k === 'hash') continue; // do not log the hash
        entries[k] = v;
      }
      console.log('[DEBUG] initData parsed (excluding hash):', entries);
    } catch (e) {
      console.warn('[DEBUG] Failed to parse initData:', e);
    }
  }

    // Inside app.post('/api/:gameId/submit-score', ...)
    try {
    const BOT_TOKEN = process.env.BOT_TOKEN || '';
    if (BOT_TOKEN && initData) {
        // ... (existing logging for user, auth_date, signature) ...

        // 1. Correct Key Derivation
        const secretKey = crypto.createHmac('sha256', 'WebAppData').update(BOT_TOKEN).digest();
        
        const pairs = (initData as string).split('&');
        const filtered: string[] = [];
        let gotHash: string | null = null;
        
        for (const pair of pairs) {
            if (pair.startsWith('hash=')) {
                gotHash = pair.substring(5);
            } else {
                // 2. Correct Inclusion: INCLUDE signature, exclude ONLY hash
                filtered.push(pair);
            }
        }
        
        filtered.sort((a, b) => a.split('=')[0].localeCompare(b.split('=')[0]));
        const dataCheckStr = filtered.join('\n');
        
        // Log the string being hashed for full clarity
        console.log('[DEBUG] dataCheckStr used for HMAC:\n' + JSON.stringify(dataCheckStr));
        
        const hmacComputed = crypto.createHmac('sha256', secretKey).update(dataCheckStr).digest();
        const hmacHex = hmacComputed.toString('hex');
        
        console.log('[DEBUG] computed hmac hex:', hmacHex);
        if (gotHash) console.log('[DEBUG] given hash param:', gotHash);
    }
} catch (e) {
    console.warn('[DEBUG] Failed to compute debug hmac:', e);
}

  if (!gameId || !user_id || !username || typeof score !== 'number') {
    console.log(`[DEBUG] Invalid request data: gameId=${gameId}, user_id=${user_id}, username=${username}, score=${score}`);
    return res.status(400).json({ success: false, message: 'Missing required data.' });
  }

  if (!isValidInitData(initData)) {
    console.log(`[DEBUG] Invalid initData for user: ${user_id}`);
    if (BOT_TOKEN) {
      console.log('[DEBUG] initData verification attempted and failed (BOT_TOKEN provided)');
    } else {
      console.log('[DEBUG] initData verification skipped (no BOT_TOKEN configured)');
    }
    return res.status(403).json({ success: false, message: 'Invalid init data' });
  } else {
    if (BOT_TOKEN) console.log('[DEBUG] initData verification passed');
  }

  // Optional: Check auth_date freshness to prevent replay attacks
  try {
    if (typeof initData === 'string' && initData.length > 0) {
      const params = new URLSearchParams(initData);
      const authDateStr = params.get('auth_date');
      if (authDateStr) {
        const authDate = Number(authDateStr);
        if (!Number.isNaN(authDate)) {
          const maxAge = Number(process.env.INITDATA_MAX_AGE || '300');
          const nowSec = Math.floor(Date.now() / 1000);
          if (Math.abs(nowSec - authDate) > maxAge) {
            console.log('[DEBUG] initData auth_date too old:', authDate, 'now:', nowSec, 'maxAge:', maxAge);
            return res.status(403).json({ success: false, message: 'Expired init data' });
          }
        }
      }
    }
  } catch (e) {
    console.warn('[DEBUG] Failed to check auth_date:', e);
  }

  try {
    const row = await upsertScore(gameId, String(user_id), String(username), Number(score));
    console.log(`[DEBUG] Score submitted successfully for user: ${user_id}, new row:`, row);
    return res.json({ success: true, row });
  } catch (err: any) {
    console.error('[ERROR] submit-score error:', err?.message || err);
    return res.status(500).json({ success: false, message: 'Internal error' });
  }
});

app.get('/api/:gameId/leaderboard', async (req, res) => {
  const { gameId } = req.params;
  const limit = Number(req.query.limit || 10);

  console.log(`[DEBUG] Received leaderboard request for game: ${gameId}, limit: ${limit}`);

  if (!gameId) {
    console.log(`[DEBUG] Missing gameId in leaderboard request`);
    return res.status(400).json({ success: false, message: 'Missing gameId' });
  }

  try {
    const rows = await getLeaderboard(gameId, limit);
    console.log(`[DEBUG] Leaderboard fetched for game: ${gameId}, returned ${rows.length} entries`);
    return res.json({ success: true, leaderboard: rows });
  } catch (err: any) {
    console.error('[ERROR] leaderboard error:', err?.message || err);
    return res.status(500).json({ success: false, message: 'Internal error' });
  }
});

// Windowed leaderboard endpoint. Returns top N and window around user rank (if user_id provided)
app.get('/api/:gameId/leaderboard-window', async (req, res) => {
  const { gameId } = req.params;
  const userId = typeof req.query.user_id === 'string' ? req.query.user_id : undefined;
  const top = Number(req.query.top || 5);
  const before = Number(req.query.before || 5);
  const after = Number(req.query.after || 5);

  console.log(`[DEBUG] Received leaderboard-window request for game: ${gameId}, userId: ${userId}, top: ${top}, before: ${before}, after: ${after}`);

  if (!gameId) {
    console.log(`[DEBUG] Missing gameId in leaderboard-window request`);
    return res.status(400).json({ success: false, message: 'Missing gameId' });
  }

  try {
    const data = await getLeaderboardWindow(gameId, userId, top, before, after);
    const total = await getTotalCount(gameId);
    console.log(`[DEBUG] Leaderboard-window fetched for game: ${gameId}, userId: ${userId}, total: ${total}`);
    return res.json({ success: true, total, ...data });
  } catch (err: any) {
    console.error('[ERROR] leaderboard-window error:', err?.message || err);
    return res.status(500).json({ success: false, message: 'Internal error' });
  }
});

// Debug endpoint: verify arbitrary initData (POST) — useful for dev testing
app.post('/api/debug/verify-initdata', async (req, res) => {
  const { initData } = req.body || {};
  console.log('[DEBUG] Verifying initData via debug endpoint, length:', typeof initData === 'string' ? initData.length : 0);
  try {
    const valid = verifyTelegramInitData(initData, BOT_TOKEN || undefined, TELEGRAM_PUB_KEY || undefined);
    // Parse raw pairs for debugging
    let parsed: Record<string, string> = {};
    if (typeof initData === 'string') {
      const pairs = initData.split('&');
      for (const pair of pairs) {
        const idx = pair.indexOf('=');
        if (idx !== -1) {
          const key = pair.substring(0, idx);
          if (key === 'hash' || key === 'signature') continue; // do not echo back hash/signature
          parsed[key] = pair.substring(idx + 1);
        }
      }
    }
    const note: string[] = [];
    if (!TELEGRAM_PUB_KEY) {
      note.push('TELEGRAM_INITDATA_PUBLIC_KEY not set — signature verification disabled');
    }
    return res.json({ success: true, verified: Boolean(valid), parsed, note });
  } catch (err) {
    console.warn('[DEBUG] verify-initdata error', err);
    return res.status(500).json({ success: false, error: String(err) });
  }
});

// BOT_TOKEN and TELEGRAM_PUB_KEY are read from env at top-level

(async () => {
  console.log('[DEBUG] Starting tg-games backend server...');
  try {
    console.log('[DEBUG] Checking database schema...');
    await ensureSchema();
    console.log('[DEBUG] Schema check completed successfully.');
    // For debugging: log if BOT_TOKEN exists and print its SHA256 hash (safe to log)
    if (BOT_TOKEN) {
      try {
        const tokenHash = crypto.createHash('sha256').update(BOT_TOKEN).digest('hex');
        console.log('[DEBUG] BOT_TOKEN present, sha256:', tokenHash);
      } catch (e) {
        // ignore
      }
    } else {
      console.log('[DEBUG] BOT_TOKEN not configured (verification disabled)');
    }

    app.listen(PORT, () => console.log(`[DEBUG] tg-games backend listening on port ${PORT}`));
  } catch (err) {
    console.error('[ERROR] Failed starting server:', err);
    process.exit(1);
  }
})();

process.on('SIGINT', async () => {
  console.log('Shutting down server');
  try { await pgPool.end(); } catch (e) { /* ignore */ }
  process.exit(0);
});
