<h1 align="center">Js Data History</h1>

[![Latest Version on NPM](https://img.shields.io/npm/v/@xpf0000/js-data-history.svg?style=flat-square)](https://npmjs.com/package/@xpf0000/js-data-history)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![npm](https://img.shields.io/npm/dt/@xpf0000/js-data-history.svg?style=flat-square)](https://www.npmjs.com/package/@xpf0000/js-data-history)

> Js data history, data change revoke and redo, can set history depth


## Table of Contents

* [Install and basic usage](#install-and-basic-usage)
* [License](#license)


## Install and basic usage

```bash
$ npm install --save @xpf0000/js-data-history
```

```js
import { History } from '@xpf0000/js-data-history'
const history = new History(5)

const data = {}
history.init(data)
data.a = {}
history.add()
data.b = 5
history.add()
history.back()
history.back().then(change => {
// ...
})

history.redo()
history.redo().then(change => {
// ...
})
```

## License

The MIT License (MIT).
