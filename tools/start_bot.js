// Simple long-polling Telegram bot without external deps
// Usage: node tools/start_bot.js <BOT_TOKEN> <BASE_WEBAPP_URL>
// Example: node tools/start_bot.js "123:ABC" "https://concretive-jami-mailable.ngrok-free.dev"

const [,, BOT_TOKEN, BASE_WEBAPP_URL] = process.argv;
if (!BOT_TOKEN || !BASE_WEBAPP_URL) {
  console.error('Usage: node tools/start_bot.js <BOT_TOKEN> <BASE_WEBAPP_URL>');
  process.exit(1);
}

const API_BASE = `https://api.telegram.org/bot${BOT_TOKEN}`;

// Configure available games here. `path` will be appended to BASE_WEBAPP_URL to build the Web App URL.
const GAMES = [
  { id: 'lumberjack', title: 'Lumberjack', path: '/lumberjack' },
  // Add more games here, e.g.:
  // { id: 'snake', title: 'Snake', path: '/snake' },
];

let offset = 0;
let running = true;
let BOT_USERNAME = null;

async function api(method, body) {
  const url = `${API_BASE}/${method}`;
  const opts = { method: 'POST', headers: { 'Content-Type': 'application/json' } };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(url, opts);
  const data = await res.json().catch(() => null);
  if (!res.ok) throw new Error(`Telegram API ${method} failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

async function ensureBotUsername() {
  if (BOT_USERNAME) return BOT_USERNAME;
  try {
    const info = await api('getMe');
    BOT_USERNAME = info && info.result && info.result.username ? info.result.username : null;
    return BOT_USERNAME;
  } catch (e) {
    return null;
  }
}

async function sendWebAppButtons(chatId) {
  // For private chats: send a web_app inline button (opens inside Telegram).
  // For groups: use a deep-link (https://t.me/<bot>/<app_short_name>?startapp=<game>) which
  // reliably launches the Mini App and provides initData even in group contexts.
  const isGroup = String(chatId).startsWith('-');
  const g = GAMES[0];
  const webUrl = `${BASE_WEBAPP_URL.replace(/\/$/, '')}${g.path}?chat_id=${chatId}&game=${encodeURIComponent(g.id)}`;

  // Get bot username and app short name (from env or default)
  const appShortName = process.env.TELEGRAM_APP_SHORTNAME || process.env.APP_SHORT_NAME || 'play';
  // Allow overriding username via env (useful in CI/docker if getMe is rate-limited)
  const envBotUsername = process.env.TELEGRAM_BOT_USERNAME || null;
  const botUserFromApi = await ensureBotUsername();
  const botUser = envBotUsername || botUserFromApi;
  console.log('[DEBUG] bot username resolved:', { envBotUsername, botUserFromApi, final: botUser });

  if (isGroup) {
    // Deep link: prefer t.me/<bot>/<appShortName>?startapp=<gameId>
    const deepLink = botUser ? `https://t.me/${botUser}/${appShortName}?startapp=${encodeURIComponent(g.id)}` : webUrl;
    console.log('[DEBUG] Sending group deepLink:', deepLink);
    const keyboard = [[{ text: `Play ${g.title}`, url: deepLink }]];
    const payload = {
      chat_id: chatId,
      text: `Play ${g.title}: open the game.`,
      reply_markup: { inline_keyboard: keyboard }
    };
    return api('sendMessage', payload);
  }

  // Private chat: use Web App button so it opens inside Telegram
  const keyboard = [[{ text: `Play ${g.title}`, web_app: { url: webUrl } }]];
  const payload = { chat_id: chatId, text: 'Choose a game to play:', reply_markup: { inline_keyboard: keyboard } };
  return api('sendMessage', payload);
}

async function handleMessage(msg) {
  if (!msg) return;
  const chatId = msg.chat?.id;
  const text = msg.text?.trim();
  if (!chatId) return;

  console.log('Received message:', chatId, text);

  if (text === '/start' || text === 'start') {
    try {
      await sendWebAppButtons(chatId);
      console.log('Sent game list to', chatId);
    } catch (err) {
      console.error('Failed to send game list:', err);
    }
    return;
  }

  // Fallback reply
  try {
    await api('sendMessage', { chat_id: chatId, text: 'Send /start to see available games.' });
  } catch (err) {
    console.error('Failed to send fallback reply:', err);
  }
}

async function poll() {
  while (running) {
    try {
      const res = await fetch(`${API_BASE}/getUpdates?timeout=30${offset ? `&offset=${offset}` : ''}`);
      const data = await res.json();
      if (data && data.ok && Array.isArray(data.result)) {
        for (const update of data.result) {
          offset = (update.update_id || 0) + 1;
          if (update.message) handleMessage(update.message);
          // handle callback_query etc in the future
        }
      }
    } catch (err) {
      console.error('Polling error:', err);
      await new Promise(r => setTimeout(r, 3000));
    }
  }
}

process.on('SIGINT', () => { running = false; console.log('Stopping bot...'); process.exit(0); });

console.log('Starting simple Telegram bot. Press Ctrl+C to stop.');
poll();
