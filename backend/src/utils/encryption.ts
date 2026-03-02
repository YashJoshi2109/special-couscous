import crypto from 'crypto';
const ALGO = 'aes-256-gcm';

export function encrypt(text: string): string {
  const key = Buffer.from(process.env.ENCRYPTION_KEY!, 'hex'); // 32 bytes = 64 hex chars
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGO, key, iv);
  const enc = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return `${iv.toString('hex')}:${tag.toString('hex')}:${enc.toString('hex')}`;
}

export function decrypt(payload: string): string {
  const [ivHex, tagHex, dataHex] = payload.split(':');
  const key = Buffer.from(process.env.ENCRYPTION_KEY!, 'hex');
  const iv = Buffer.from(ivHex, 'hex');
  const tag = Buffer.from(tagHex, 'hex');
  const data = Buffer.from(dataHex, 'hex');
  const decipher = crypto.createDecipheriv(ALGO, key, iv);
  decipher.setAuthTag(tag);
  return decipher.update(data) + decipher.final('utf8');
}
