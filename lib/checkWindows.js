'use strict'
const errorMessage = 'Not a Windows platform'
const isWindows = process.platform.indexOf('win') === 0

function async (callback) {
  if (isWindows === false) {
    if (typeof callback === 'function') {
      callback(new Error(errorMessage))
    }
  }

  return isWindows
}

function sync () {
  if (isWindows === false) {
    throw new Error(errorMessage)
  }

  return isWindows
}

module.exports = {
  async,
  sync,
}
