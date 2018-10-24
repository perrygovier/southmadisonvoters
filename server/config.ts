require('dotenv').config();
// settings
export const PORT = int(process.env.PORT) || '3000';
export const PROD = bool(process.env.PROD) || false;
export const VERBOSE = bool(process.env.VERBOSE) || false;

// Facebook
export const FB_TOKEN = process.env.FB_TOKEN || null;

function bool(str) {
  if (str === void 0) {
    return false;
  }
  return str.toLowerCase() === 'true';
}

function int(str) {
  if (!str) {
    return 0;
  }
  return parseInt(str, 10);
}