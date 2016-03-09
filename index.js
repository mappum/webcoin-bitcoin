var params = require('webcoin-params')

module.exports = params({
  blockchain: require('./lib/blockchain.js'),
  net: require('./lib/net.js')
})
