'use strict'
const fswin = require('fswin')

const convertAttrs = require('./convertAttrs')

function get (path, callback) {
  fswin.getAttributes(path, function (result) {
    if (result === undefined) {
      // fswin does not return an error -- problem could be ENOENT,EPERM,etc
      callback(new Error('unknown error'))
      return
    }

    let attrs = {}

    for (let i in result) {
      if (i.indexOf('IS_') === 0) {
        attrs[i] = result[i]
      }
    }

    callback(null, convertAttrs.from(attrs))
  })
}

function getSync (path) {
  const result = fswin.getAttributesSync(path)

  if (result === undefined) {
    // fswin does not return an error -- problem could be ENOENT,EPERM,etc
    throw new Error('unknown erorr')
  }

  return convertAttrs.from(result)
}

function set (path, attrs, callback) {
  fswin.setAttributes(path, convertAttrs.to(attrs), function (success) {
    // fswin does not return an error -- problem could be ENOENT,EPERM,etc
    callback(success === true ? null : new Error('unknown error'))
  })
}

function setSync (path, attrs) {
  const success = fswin.setAttributesSync(path, convertAttrs.to(attrs))

  if (success === false) {
    // fswin does not return an error -- problem could be ENOENT,EPERM,etc
    throw new Error('unknown erorr')
  }
}

module.exports = {
  get,
  getSync,
  set,
  setSync,
}
