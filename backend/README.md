# tg-games backend — Telegram integration notes

Required env vars:
- `BOT_TOKEN` — Telegram bot token (for verifying WebApp initData and optional bot helpers)
 - `TELEGRAM_INITDATA_PUBLIC_KEY` — optional Ed25519 public key (hex or PEM) to verify `signature` in init data (third-party verification). Provide as raw 32-byte hex (e.g., `e7bf03...`) or a PEM block.
 - `BOT_TOKEN` — Telegram bot token (for verifying WebApp initData using HMAC)
 - `TELEGRAM_INITDATA_PUBLIC_KEY` — (optional) Ed25519 public key in PEM format to verify `signature` in initData for newer WebApps.
- `PORT` — server port (default 4000)
- `DATABASE_URL` — Postgres connection

Development: exposing to Telegram
- Use `ngrok` or Cloudflare tunnel to expose your frontend (and optionally backend).
- Example: `ngrok http 3000` then use `https://<ngrok-id>.ngrok.io/lumberjack` as the Web App URL.

Quick commands
- Send a web_app button from terminal (node required):

  node tools/send_webapp_button.js "$BOT_TOKEN" "$CHAT_ID" "https://your-public-domain/lumberjack"

Server-side validation
- The server validates the `initData` string sent by the Web App before accepting scores.
- If `BOT_TOKEN` is not set, validation is skipped to allow local development, but you should set `BOT_TOKEN` in staging/production.

Debugging
- There is a helper debug endpoint you can use during development to check initData verification:
   - `POST /api/debug/verify-initdata` with body `{ "initData": "<initData-string>" }` returns `{ verified: true|false, parsed: {...} }`.
  - The response will not include `hash` or `signature` to avoid leaking HMAC info.

Signature verification options
- The server supports two verification methods for `initData`:
  - `hash` (HMAC-SHA256): uses `BOT_TOKEN` to derive a secret and validate via HMAC. This is the traditional method.
  - `signature` (Ed25519): some WebApps include a `signature` field (base64url) which is an Ed25519 signature over the encoded initData. Set `TELEGRAM_INITDATA_PUBLIC_KEY` (PEM) to enable verification of this signature.

Example: set `TELEGRAM_INITDATA_PUBLIC_KEY` to the PEM string provided by Telegram docs and restart the backend. The debug endpoint will report `verified: true` when verification succeeds.

Endpoints
- `POST /api/:gameId/submit-score` — submits score. Body: `{ user_id, username, score, initData }`.
- `GET /api/:gameId/leaderboard?limit=N` — returns top N leaderboard entries.
- `GET /api/:gameId/leaderboard-window?user_id=...` — returns rank and nearby window for a user.

Verification options and configuration
- `TELEGRAM_INITDATA_PUBLIC_KEY` (optional): when the WebApp sends a `signature` parameter (Ed25519), set this env var to the public key (hex or PEM) from Telegram to perform third-party validation. Example:

  # provide hex public key
  TELEGRAM_INITDATA_PUBLIC_KEY=e7bf03a2fa4602af4580703d88dda5bb59f32ed8b02a56c187fe7d34caed242d

  # or provide PEM
  TELEGRAM_INITDATA_PUBLIC_KEY="-----BEGIN PUBLIC KEY-----\nMIIB...==\n-----END PUBLIC KEY-----"

- `INITDATA_MAX_AGE` (optional, seconds): default `300`. Rejects initData older than this to prevent replay attacks.

Security notes
- Rate-limit `submit-score` as needed.
- Use `user_id` as canonical identity, validate `initData` to trust it.
