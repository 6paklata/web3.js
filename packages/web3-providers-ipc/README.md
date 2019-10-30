# web3-providers-ipc

This is a sub package of [web3.js][repo]

This is a IPC provider for [web3.js][repo].  
Please read the [documentation][docs] for more.

## Installation

### Node.js

```bash
npm install web3-providers-ipc
```

### Browser

There are three ways to use this package in the browser:

- Install it with ``npm`` and bundle it with the preferred bundler.
- Use the ``unpkg`` or ``jsdelivr`` CDN.
- Install it with ``npm`` and load the minified file from the ``node_modules`` folder.

This injected object is called `Web3IpcProvider`.

## Usage

```js
// in node.js
var Web3IpcProvider = require('web3-providers-ipc');
var net = require(net);

var ipc = new Web3IpcProvider('/Users/me/Library/Ethereum/geth.ipc', net);
```

## Types

All the typescript typings are placed in the types folder.

[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/ethereum/web3.js
