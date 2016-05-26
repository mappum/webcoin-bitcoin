var paramTests = require('webcoin-param-tests')
var test = require('tape')
var params = require('../')

test('param-tests', function (t) {
  paramTests(params, t.test.bind(t))
  t.end()
})
