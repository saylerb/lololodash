var _ = require("lodash");

var yarg = function(orders) {

  res = _.reduce(orders, (result, order) => {

    result[order.article] = result[order.article] + order.quantity || order.quantity
    return result
  }, {})

  mapped = _.map(res, (val, key) => ({ article: parseInt(key), total_orders: val }))

  return mapped.reverse()
}

module.exports = yarg
