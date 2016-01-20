var u = require('bitcoin-util')

module.exports = {
  genesisHeader: {
    version: 1,
    prevHash: u.toHash('0000000000000000000000000000000000000000000000000000000000000000'),
    merkleRoot: u.toHash('4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b'),
    time: 1231006505,
    bits: 0x1d00ffff,
    nonce: 2083236893
  },
  checkpoints: [
    {
      height: 359000,
      header: {
        version: 3,
        prevHash: u.toHash('000000000000000006ecee94daaa034bbd026cad52a9d3c6a5b7972716e5d566'),
        merkleRoot: u.toHash('1e24b829d04e8e6fcb71fa0de364d6c0fa952c1cdb5fad446cf2a94dd203867a'),
        time: 1433195458,
        bits: 0x18171a8b,
        nonce: 3020402664
      }
    }
  ],
  maxTarget: 'ffff0000000000000000000000000000000000000000000000000000',
  zeroHash: new Buffer('0000000000000000000000000000000000000000000000000000000000000000', 'hex'),
  timestampThreshold: 500000000,
  webSeeds: [
    '104.236.185.38:8192'
  ]
}
