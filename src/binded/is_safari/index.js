// XXX: This file is generated by a script, don't edit it manually.
//      Please see `npm run build-binded-fns` command.
const _isSafari = require('../unbinded/is_safari')
module.exports = function isSafari () {
  return _isSafari(navigator.userAgent)
}