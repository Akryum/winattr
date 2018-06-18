# winattr [![NPM Version][npm-image]][npm-url] [![Linux Build][travis-image]][travis-url] [![Windows Build][appveyor-image]][appveyor-url] [![Dependency Status][david-image]][david-url]

> Foolproof Windows® file attributes for Node.js

Get and set:
* `archive`
* `hidden`
* `readonly`
* `system`

… on files and/or directories.

A native binding is used, offering great performance. As a contingency in case that fails, functionality will silently revert to a command line, though it is considerably slower.


## Installation

It may go without saying, but this library is not intended to run on anything other than Windows.

[Node.js](http://nodejs.org/) `>= 8` is required. To install, type this at the command line:

```
npm install @akryum/winattr
```

Or:

```
yarn add @akryum/winattr
```

## Usage

### `get(path, callback)`

`path` - Path to file or directory
`callback(err,attrs)` - A callback which is called upon completion

```js
winattr.get('path/to/file.ext', (err, attrs) => {
  if (err == null) console.log(attrs)
})
```

If you omit the callback, a Promise will be return instead:

```js
winattr.get('path/to/file.ext').then(attrs => {
  console.log(attrs)
})
```

### `getSync(path)`

`path` - Path to file or directory

Returns an `Object` or throws an error if the file or dir cannot be found/accessed.

```js
const attrs = winattr.getSync('path/to/file.ext')

console.log(attrs)
```

### `set(path, attrs, callback)`

`path` - Path to file or directory
`attrs` - An object containing attributes to change
`callback(err)` - A callback which is called upon completion

```js
winattr.set('path/to/folder/', { readonly: true }, err => {
  if (err == null) console.log('success')
})
```

If you omit the callback, a Promise will be return instead:

```js
winattr.set('path/to/folder/', { readonly: true }).then(() => {
  console.log('success')
})
```

### `setSync(path, attrs)`

`path` - Path to file or directory
`attrs` - An object containing attributes to change

Throws an error if the file or dir cannot be found/accessed.

```js
winattr.setSync('path/to/folder/', { readonly: true })
```

[npm-image]: https://img.shields.io/npm/v/@akryum/winattr.svg
[npm-url]: https://npmjs.com/package/@akryum/winattr
[travis-image]: https://img.shields.io/travis/Akryum/winattr.svg?label=linux
[travis-url]: https://travis-ci.org/Akryum/winattr
[appveyor-image]: https://img.shields.io/appveyor/ci/Akryum/winattr.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/Akryum/winattr
[david-image]: https://img.shields.io/david/Akryum/winattr.svg
[david-url]: https://david-dm.org/Akryum/winattr
