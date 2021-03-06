module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  env: {
    node: true,
  },
  globals: {
    ActiveXObject: false,
    WScript: false,
  },
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // trailing comma
    'comma-dangle': ['error', 'always-multiline'],
    // beware of returning assignement
    'no-return-assign': 'off',
    'no-extend-native': 'warn',
    'no-var': 'error',
  },
}
