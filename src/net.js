var magic = 0xd9b4bef9
var defaultPort = 8333

var dnsSeeds = [
  'seed.bitcoin.sipa.be',
  'dnsseed.bluematt.me',
  'dnsseed.bitcoin.dashjr.org',
  'seed.bitcoinstats.com',
  'seed.bitnodes.io',
  'bitseed.xf2.org',
  'seed.bitcoin.jonasschnelli.ch'
]
var webSeeds = [
  'us-west.seed.webcoin.io',
  'us-east.seed.webcoin.io',
  'eu.seed.webcoin.io',
  'asia.seed.webcoin.io'
  // TODO: add more
]

module.exports = {
  magic,
  defaultPort,

  dnsSeeds,
  webSeeds
}
