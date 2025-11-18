// Simple helper to send an inline keyboard with a Web App button to a chat
// Usage: node tools/send_webapp_button.js <BOT_TOKEN> <CHAT_ID> <URL>

const [,, BOT_TOKEN, CHAT_ID, URL] = process.argv;
if (!BOT_TOKEN || !CHAT_ID || !URL) {
  console.error('Usage: node send_webapp_button.js <BOT_TOKEN> <CHAT_ID> <URL>');
  process.exit(1);
}

const payload = {
  chat_id: CHAT_ID,
  text: 'Play Lumberjack — tap to open',
  reply_markup: {
    inline_keyboard: [
      [
        { text: 'Play Lumberjack', web_app: { url: URL } }
      ]
    ]
  }
};

(async () => {
  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    console.log('Response:', res.status, text);
  } catch (err) {
    console.error('Error sending web_app button:', err);
    process.exit(1);
  }
})();
