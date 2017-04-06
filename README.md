# ILP Packet

[![npm][npm-image]][npm-url] [![circle][circle-image]][circle-url] [![codecov][codecov-image]][codecov-url]

[npm-image]: https://img.shields.io/npm/v/ilp-packet.svg?style=flat
[npm-url]: https://npmjs.org/package/ilp-packet
[circle-image]: https://circleci.com/gh/interledgerjs/ilp-packet.svg?style=shield
[circle-url]: https://circleci.com/gh/interledgerjs/ilp-packet
[codecov-image]: https://codecov.io/gh/interledgerjs/ilp-packet/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/interledgerjs/ilp-packet

> A serializer and deserializer for ILP packets and messages

## Usage

### Installation

```sh
npm install ilp-packet
```

### Serialize/deserialize ILP Payment Packet

```js
const packet = require('ilp-packet')

const binaryPacket = packet.serializeIlpPayment({
  amount: '123000000',       // Unsigned 64-bit integer as a string
  account: 'g.us.nexus.bob', // ILP Address
  data: 'BBBB'               // Base64url-encoded attached data
}) // returns a Buffer

console.log(binaryPacket.toString('hex'))
// prints "011c000000000754d4c00e672e75732e6e657875732e626f620304104100"

const jsonPacket = packet.deserializeIlpPayment(binaryPacket)
```

### Serialize/deserialize ILQP Quote Requests/Responses

#### QuoteLiquidityRequest

```js
const packet = require('ilp-packet')

const binary = packet.serializeIlqpLiquidityRequest({
  destinationAccount: 'example.nexus.bob',
  destinationHoldDuration: 3000
})

const json = packet.deserializeIlqpLiquidityRequest(binary)
```

#### QuoteLiquidityResponse

```js
const packet = require('ilp-packet')

const binary = packet.serializeIlqpLiquidityResponse({
  liquidityCurve: Buffer.alloc(16), // Must be a buffer of size (n * 16) bytes
                                    // where n is the number of points in the
                                    // curve.
  destinationPrefix: 'example.nexus.',
  sourceHoldDuration: 15000,
  expiresAt: Date.now()
})

const json = packet.deserializeIlqpLiquidityResponse(binary)
```

### QuoteBySourceAmountRequest

```js
const packet = require('ilp-packet')

const binary = packet.serializeIlqpBySourceAmountRequest({
  destinationAccount: 'example.nexus.bob',
  sourceAmount: '9000000000',
  destinationHoldDuration: 3000
})

const json = packet.deserializeIlqpBySourceAmountRequest(binary)
```

### QuoteBySourceAmountResponse

```js
const packet = require('ilp-packet')

const binary = packet.serializeIlqpBySourceAmountResponse({
  destinationAmount: '9000000000',
  sourceHoldDuration: 3000
})

const json = packet.deserializeIlqpBySourceAmountResponse(binary)
```

### QuoteByDestinationAmountRequest

```js
const packet = require('ilp-packet')

const binary = packet.serializeIlqpByDestinationAmountRequest({
  destinationAccount: 'example.nexus.bob',
  destinationAmount: '9000000000',
  destinationHoldDuration: 3000
})

const json = packet.deserializeIlqpByDestinationAmountRequest(binary)
```

### QuoteByDestinationAmountResponse

```js
const packet = require('ilp-packet')

const binary = packet.serializeIlqpByDestinationAmountResponse({
  sourceAmount: '9000000000',
  sourceHoldDuration: 3000
})

const json = packet.deserializeIlqpByDestinationAmountResponse(binary)
```
