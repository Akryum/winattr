'use strict'
const defs = {
  archive: 'IS_ARCHIVED',
  hidden: 'IS_HIDDEN',
  readonly: 'IS_READ_ONLY',
  system: 'IS_SYSTEM',
}

function convert (attrs, from) {
  const output = {}

  eachAttribute(attrs, function (attrValue, attrName) {
    eachDefinition(function (defValue, defName) {
      if (from === true) {
        if (defValue === attrName) {
          output[defName] = attrValue
          return false
        }
      } else {
        if (defName === attrName) {
          output[defValue] = attrValue
          return false
        }
      }
    })
  })

  return output
}

function convertFrom (attrs) {
  return convert(attrs, true)
}

function convertTo (attrs) {
  return convert(attrs, false)
}

function eachAttribute (attrs, callback) {
  for (let i in attrs) {
    if (attrs.hasOwnProperty(i) === true) {
      let stop = callback(attrs[i], i, attrs)

      if (stop === false) break
    }
  }
}

function eachDefinition (callback) {
  for (let i in defs) {
    if (defs.hasOwnProperty(i) === true) {
      let stop = callback(defs[i], i, defs)

      if (stop === false) break
    }
  }
}

module.exports = {
  from: convertFrom,
  to: convertTo,
}
