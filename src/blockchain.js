// blockchain definition

var u = require('bitcoin-util')
var BN = require('bn.js')

// definition of the genesis block's header
var genesisHeader = {
  version: 1,
  prevHash: u.nullHash,
  merkleRoot: u.toHash('4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b'),
  time: 1231006505,
  bits: 0x1d00ffff,
  nonce: 2083236893
}

// selected block headers for verifying initial sync
var checkpoints = [
  {
    height: 360864,
    header: {
      version: 3,
      prevHash: u.toHash('00000000000000000d92953224570f521b09553194da1ca3c4b31a09a238f4f6'),
      merkleRoot: u.toHash('37f752dccde0e359ce5b028fed86a4e2f937e2d3091d99f795096198cbf5c67c'),
      time: 1434257763,
      bits: 0x18162043,
      nonce: 1801335478
    }
  }
]

// difficulty retarget settings
var interval = 2016
var targetSpacing = 10 * 60

// tests whether the difficulty should be changed for this block
function shouldRetarget (block, cb) {
  return cb(null, block.height % this.interval === 0)
}

// calculate the new mining target (called every retarget)
// prevBlock is the block header of the last block before the retarget
// chain is the `Blockchain` object
function calculateTarget (prevBlock, chain, cb) {
  var self = this

  var endBlock = null
  var startBlock = null

  var targetTimespan = this.interval * this.targetSpacing

  function calculate () {
    var timespan = endBlock.header.time - startBlock.header.time
    timespan = Math.max(timespan, targetTimespan / 4)
    timespan = Math.min(timespan, targetTimespan * 4)

    var target = u.expandTarget(endBlock.header.bits)
    target = new BN(target.toString('hex'), 'hex')
    target.imuln(timespan)
    target.idivn(targetTimespan)

    var maxTarget = new BN(chain.maxTarget().toString('hex'), 'hex')
    if (target.cmp(maxTarget) === 1) {
      target = maxTarget
    }

    var hex = target.toString('hex')
    hex = '0'.repeat(64 - hex.length) + hex
    target = new Buffer(hex, 'hex')

    return cb(null, target)
  }

  // traverse back to the block from the last retarget
  // this is slow, TODO: index by height for random access
  var i = 0
  function traverse (block) {
    chain.getBlock(block.header.prevHash, function (err, prev) {
      if (err) return cb(err)
      if (i === 0) endBlock = prev
      i++
      if (i === self.interval) {
        startBlock = prev
        return calculate()
      }
      setImmediate(function () { traverse(prev) })
    })
  }
  traverse(prevBlock)
}

// gets the hash of the block header used for mining/proof validation
function miningHash (header, cb) {
  return cb(null, new Buffer(header.hash, 'hex'))
}

// settings passed to Blockchain objects
// (see https://github.com/mappum/blockchain-spv)
module.exports = {
  // required
  genesisHeader,
  shouldRetarget,
  calculateTarget,
  miningHash,

  // optional
  checkpoints,

  // these fields not required for blockchain params,
  // but are exposed so other networks can change these fields
  interval,
  targetSpacing
}
