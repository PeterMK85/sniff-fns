// XXX: This file is generated by a script, don't edit it manually.
//      Please see `npm run build-binded-fns` command.
const _isChromeMobile = require('../unbinded/is_chrome_mobile')
module.exports = function isChromeMobile () {
  return _isChromeMobile(navigator.userAgent)
}