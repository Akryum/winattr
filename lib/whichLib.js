'use strict'
const checkWindows = require('./checkWindows')

const lib = {
  mode: null,
  binding: null,
  shell: null,
}

function change (mode, strict) {
  if (checkWindows.async() === false) return

  switch (mode) {
    case 'auto':
    case 'binding':
    {
      if (lib.binding === null) {
        try {
          lib.binding = require('./binding')
          lib.mode = 'binding'
        } catch (error) {
          if (strict !== true) {
            lib.binding = null
            change('shell')
          } else {
            // For tests to know which installations could not load the binding
            throw error
          }
        }
      } else {
        lib.mode = 'binding'
      }

      break
    }
    case 'shell':
    {
      if (lib.shell === null) lib.shell = require('./shell')

      lib.mode = 'shell'
      break
    }
  }
}

function current () {
  return lib[lib.mode]
}

function run (callback) {
  let result

  try {
    result = callback()
  } catch (error) {
    // If binding error
    if (lib.mode === 'binding' && error.message === 'The specified procedure could not be found.') {
      change('shell')
      result = callback()
    } else {
      throw error
    }
  }

  return result
}

module.exports = {
  change,
  current,
  run,
}
