var _ = require("lodash");

var chainMail = words => {
  return _.chain(words)
    .map(word => word.toUpperCase())
    .map(word => word.concat("CHAINED"))
    .sort()
}

module.exports = chainMail
