# Changelog

## v3.0.0

Fixed:

- Folder support on non-english OS

New:

- `get` and `set` return a Promise if no callback is provided.

## Previous versions

* 2.0.0 removed support for Node.js v0.10 and v0.12
* 1.1.0 added binding support to Node.js v4
* 1.0.0
  * added `getSync()`,`setSync()`
  * removed `useExec()`,`useNative()`
  * uses binding by default, with auto-fallback to shell
* 0.2.3 specify which script engine to use in `useExec()` "mode"
* 0.2.2 switched from `fswin.find()` to `fswin.getAttributes()` now that it's available, tested non-existent files
* 0.2.1 nearly pointless fix
* 0.2.0 added [fswin](https://npmjs.com/fswin),`useExec()`,`useNative()`
* 0.1.2 tested on Windows
* 0.1.1 package.json optimization
* 0.1.0 initial release
