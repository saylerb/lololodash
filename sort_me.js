var _ = require("lodash");
 
var sort = function(collection) {
  return _.sortBy(collection, function(e) { 
    return -e.quantity;
  });
}

module.exports = sort
