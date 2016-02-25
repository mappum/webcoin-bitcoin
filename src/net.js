var id = 'bitcoin'
var magic = 0xd9b4bef9
var defaultPort = 8333
var protocolVersion = 70002

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
  'ws://104.236.185.38'
  // TODO: add more
]

module.exports = {
  id,
  magic,
  defaultPort,
  protocolVersion,

  dnsSeeds,
  webSeeds
}
