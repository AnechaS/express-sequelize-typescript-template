/**
 * TODO: Use Winston, Pino, etc. instead.
 */

const info = (...message) => console.log('[INFO] ', ...message);
const debug = (...message) => console.log('[DEBUG] ', ...message);
const error = (...message) => console.log('[ERROR] ', ...message);
const warn = (...message) => console.log('[WARN] ', ...message);
const fatal = (...message) => console.log('[FATAL] ', ...message);
const trance = (...message) => console.log('[TRANCE] ', ...message);

export default {
  info,
  debug,
  error,
  warn,
  fatal,
  trance,
};
