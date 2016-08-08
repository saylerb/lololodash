var _ = require("lodash");

var SortCitiesByTemp = function(cities) {
  var result = { hot: [], warm: [] }

  for (var city in cities) {
    temps = cities[city]

    if (cityIsHot(temps)) {
      result.hot.push(city)
    } else if (cityIsWarm(temps)) {
      result.warm.push(city)
    }
  }
  return result
}

var isTempHot = temp => temp > 19

function cityIsHot(temps) {
  return _.every(temps, isTempHot)
}

function cityIsWarm(temps) {
  return _.some(temps, isTempHot)
}

module.exports = SortCitiesByTemp;
