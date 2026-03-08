/**
 * Encryption helpers for API key and key seed in Electron main process.
 * Uses AES-256-CBC with a key stored in transrewrt.key.
 */

const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const { getKeyFilePath } = require("./configPath");

const ENC_PREFIX = "enc:";
const KEY_BYTES = 32;
const IV_BYTES = 16;

function getOrCreateEncryptionKey() {
  const keyPath = getKeyFilePath();
  const dir = path.dirname(keyPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (fs.existsSync(keyPath)) {
    const raw = fs.readFileSync(keyPath, "utf8").trim();
    if (/^[0-9a-fA-F]{64}$/.test(raw)) return Buffer.from(raw, "hex");
    if (raw.length >= 32) return Buffer.from(raw.slice(0, KEY_BYTES), "utf8");
    return Buffer.from(raw, "hex");
  }
  const key = crypto.randomBytes(KEY_BYTES);
  fs.writeFileSync(keyPath, key.toString("hex"), "utf8");
  return key;
}

function isEncryptedApiKey(value) {
  return typeof value === "string" && value.startsWith(ENC_PREFIX);
}

function isEncryptedKeySeed(value) {
  return typeof value === "string" && value.startsWith(ENC_PREFIX);
}

function decryptApiKey(encryptedValue) {
  try {
    const b64 = encryptedValue.slice(ENC_PREFIX.length);
    const buf = Buffer.from(b64, "base64");
    if (buf.length < IV_BYTES) return "";
    const iv = buf.subarray(0, IV_BYTES);
    const ciphertext = buf.subarray(IV_BYTES);
    const key = getOrCreateEncryptionKey();
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    return Buffer.concat([
      decipher.update(ciphertext),
      decipher.final(),
    ]).toString("utf8");
  } catch (err) {
    console.error("Failed to decrypt api_key:", err.message);
    return "";
  }
}

function encryptApiKey(plainValue) {
  if (typeof plainValue !== "string" || !plainValue.trim()) return "";
  try {
    const key = getOrCreateEncryptionKey();
    const iv = crypto.randomBytes(IV_BYTES);
    const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
    const ciphertext = Buffer.concat([
      cipher.update(plainValue, "utf8"),
      cipher.final(),
    ]);
    return ENC_PREFIX + Buffer.concat([iv, ciphertext]).toString("base64");
  } catch (err) {
    console.error("Failed to encrypt api_key:", err.message);
    return plainValue;
  }
}

function decryptKeySeed(encryptedValue) {
  try {
    const b64 = encryptedValue.slice(ENC_PREFIX.length);
    const buf = Buffer.from(b64, "base64");
    if (buf.length < IV_BYTES) return "";
    const iv = buf.subarray(0, IV_BYTES);
    const ciphertext = buf.subarray(IV_BYTES);
    const key = getOrCreateEncryptionKey();
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    return Buffer.concat([
      decipher.update(ciphertext),
      decipher.final(),
    ]).toString("utf8");
  } catch (err) {
    console.error("Failed to decrypt key_seed:", err.message);
    return "";
  }
}

function encryptKeySeed(plainValue) {
  if (typeof plainValue !== "string" || !plainValue.trim()) return "";
  try {
    const key = getOrCreateEncryptionKey();
    const iv = crypto.randomBytes(IV_BYTES);
    const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
    const ciphertext = Buffer.concat([
      cipher.update(plainValue, "utf8"),
      cipher.final(),
    ]);
    return ENC_PREFIX + Buffer.concat([iv, ciphertext]).toString("base64");
  } catch (err) {
    console.error("Failed to encrypt key_seed:", err.message);
    return plainValue;
  }
}

module.exports = {
  ENC_PREFIX,
  KEY_BYTES,
  IV_BYTES,
  getOrCreateEncryptionKey,
  isEncryptedApiKey,
  isEncryptedKeySeed,
  encryptApiKey,
  decryptApiKey,
  encryptKeySeed,
  decryptKeySeed,
};
