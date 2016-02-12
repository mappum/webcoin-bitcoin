var seed = require('bitcoin-net/lib/seeds.js')

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
  '104.236.185.38'
  // TODO: add more
]

function getSeeds (opts) {
  var seeds = []
  if (!process.browser) {
    seeds = seeds.concat(this.dnsSeeds.map(
      (uri) => seed.dns(uri, { defaultPort: this.defaultPort })))
  }
  // if (process.browser || opts.wrtc) {
  //   seeds = seeds.concat(this.webSeeds.map(
  //     (uri) => seed.web(uri, { wrtc: opts.wrtc })))
  // }
  return seeds
}

module.exports = {
  magic,
  defaultPort,
  protocolVersion,

  dnsSeeds,
  webSeeds,
  getSeeds
}
