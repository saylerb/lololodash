var _ = require("lodash");

var for_each = function(collection) {
  result = collection

  _.forEach(result, function(e) {

    if (e.population >= 1) {
      e.size = 'big';
    } else if (e.population < 1 && e.population > 0.5) {
      e.size = 'med';
    } else {
      e.size = 'small';
    }
  });

  return result
};

module.exports = for_each
