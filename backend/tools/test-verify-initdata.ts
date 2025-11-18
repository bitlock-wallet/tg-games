import crypto from 'crypto';
import { verifyTelegramInitData } from '../src/verifyInitData';

function base64url(buf: Buffer) {
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

const { publicKey, privateKey } = crypto.generateKeyPairSync('ed25519');

// Export public key raw (DER SPKI) then extract raw 32 bytes from its tail
const spkiDer = publicKey.export({ format: 'der', type: 'spki' }) as Buffer;
// SPKI header length for Ed25519 prefix is 12 bytes; raw key is last 32 bytes
const rawPublicKey = spkiDer.slice(spkiDer.length - 32);
const publicKeyHex = rawPublicKey.toString('hex');
console.log('Derived raw public key hex (len):', publicKeyHex.length, publicKeyHex.slice(0, 12));

const initPairs = [
  'auth_date=1234567890',
  'user={"id":1,"first_name":"Test"}'
];
const dataCheckString = initPairs.join('\n');

// Use a BOT_TOKEN with a bot id prefix so signature uses botId:WebAppData\n + data_check_string
const BOT_TOKEN = '12345:FAKE_TOKEN';
const botId = BOT_TOKEN.split(':')[0];
const signatureData = `${botId}:WebAppData\n${dataCheckString}`;
const signature = crypto.sign(null, Buffer.from(signatureData), privateKey);
const sigB64Url = base64url(signature);

const initData = `${initPairs.join('&')}&signature=${sigB64Url}`;

console.log('initData:', initData);
const ok = verifyTelegramInitData(initData, BOT_TOKEN, publicKeyHex);
console.log('verification result:', ok);

// Also test with PEM-formatted public key
const pubPem = publicKey.export({ format: 'pem', type: 'spki' }) as string;
console.log('\nUsing PEM public key');
const ok2 = verifyTelegramInitData(initData, BOT_TOKEN, pubPem);
console.log('verification result with PEM:', ok2);

// Also test HMAC fallback: compute BOT_TOKEN-derived secret using HMAC-SHA256(bot_token, 'WebAppData') per docs
const secretKey = crypto.createHmac('sha256', BOT_TOKEN).update('WebAppData').digest();
const hmac = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');
const initDataHash = `${initPairs.join('&')}&hash=${hmac}`;
const ok3 = verifyTelegramInitData(initDataHash, BOT_TOKEN, publicKeyHex);
console.log('HMAC verification result:', ok3);
