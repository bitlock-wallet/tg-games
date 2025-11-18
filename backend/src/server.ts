import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { upsertScore, getLeaderboard, ensureSchema, getLeaderboardTop, getLeaderboardWindow, getTotalCount } from './db/queries';
import { pgPool } from './db/drizzle';

dotenv.config();

const PORT = Number(process.env.PORT || 4000);

const app = express();
app.use(cors());
app.use(express.json());

function isValidInitData(initData?: string) {
  // For now, preserve existing behaviour: validation skipped if BOT_TOKEN is not set
  const BOT_TOKEN = process.env.BOT_TOKEN || '';
  if (!BOT_TOKEN) return true;
  // Implement validation if needed later
  return true;
}

app.post('/api/:gameId/submit-score', async (req, res) => {
  const { gameId } = req.params;
  const { user_id, username, score, initData } = req.body;

  if (!gameId || !user_id || !username || typeof score !== 'number') {
    return res.status(400).json({ success: false, message: 'Missing required data.' });
  }

  if (!isValidInitData(initData)) {
    return res.status(403).json({ success: false, message: 'Invalid init data' });
  }

  try {
    const row = await upsertScore(gameId, String(user_id), String(username), Number(score));
    return res.json({ success: true, row });
  } catch (err: any) {
    console.error('submit-score error', err?.message || err);
    return res.status(500).json({ success: false, message: 'Internal error' });
  }
});

app.get('/api/:gameId/leaderboard', async (req, res) => {
  const { gameId } = req.params;
  const limit = Number(req.query.limit || 10);

  if (!gameId) return res.status(400).json({ success: false, message: 'Missing gameId' });

  try {
    const rows = await getLeaderboard(gameId, limit);
    return res.json({ success: true, leaderboard: rows });
  } catch (err: any) {
    console.error('leaderboard error', err?.message || err);
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

  if (!gameId) return res.status(400).json({ success: false, message: 'Missing gameId' });

  try {
    const data = await getLeaderboardWindow(gameId, userId, top, before, after);
    const total = await getTotalCount(gameId);
    return res.json({ success: true, total, ...data });
  } catch (err: any) {
    console.error('leaderboard-window error', err?.message || err);
    return res.status(500).json({ success: false, message: 'Internal error' });
  }
});

(async () => {
  try {
    await ensureSchema();
    app.listen(PORT, () => console.log(`tg-games backend listening ${PORT}`));
  } catch (err) {
    console.error('Failed starting server', err);
    process.exit(1);
  }
})();

process.on('SIGINT', async () => {
  console.log('Shutting down server');
  try { await pgPool.end(); } catch (e) { /* ignore */ }
  process.exit(0);
});
