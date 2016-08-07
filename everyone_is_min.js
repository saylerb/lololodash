var _ = require("lodash");

var SortCitiesByTemp = function(cities) {
  
  var result = { hot: [], warm: [] }

  for (var city in cities) {
    temps = cities[city]

    if (_.every(temps, temp => temp > 19)) {
      result.hot.push(city)
    } else if (_.some(temps, temp => temp > 19)) {
      result.warm.push(city)
    }
  }

  return result
}
 
module.exports = SortCitiesByTemp;
