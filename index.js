var buffertools = require('buffertools') // TODO: remove this dep

// TODO: put this in a more suitable package
function toHash (hex) {
  return buffertools.reverse(new Buffer(hex, 'hex'))
}

module.exports = {
  genesisHeader: {
    version: 1,
    prevHash: toHash('0000000000000000000000000000000000000000000000000000000000000000'),
    merkleRoot: toHash('4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b'),
    time: 1231006505,
    bits: 0x1d00ffff,
    nonce: 2083236893
  },
  checkpoints: [
    {
      height: 359000,
      header: {
        version: 3,
        prevHash: toHash('000000000000000006ecee94daaa034bbd026cad52a9d3c6a5b7972716e5d566'),
        merkleRoot: toHash('1e24b829d04e8e6fcb71fa0de364d6c0fa952c1cdb5fad446cf2a94dd203867a'),
        time: 1433195458,
        bits: 0x18171a8b,
        nonce: 3020402664
      }
    }
  ],
  maxTarget: 'ffff0000000000000000000000000000000000000000000000000000',
  zeroHash: '0000000000000000000000000000000000000000000000000000000000000000',
  timestampThreshold: 500000000,
  webSeeds: [
    '104.236.185.38:8192'
  ]
}
