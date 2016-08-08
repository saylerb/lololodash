var _ = require("lodash");

var analyze_this = function(freelancers) {

  avg_income = _.reduce(freelancers, (sum, freelancer) => {
    return sum += freelancer.income
  },0) / _.size(freelancers)

  underperform = _.chain(freelancers)
    .filter(freelancer => freelancer.income <= avg_income)
    .sortBy('income')

  overperform = _.chain(freelancers)
    .filter(freelancer => freelancer.income > avg_income)
    .sortBy('income')

  return { 
    average: avg_income, 
    underperform: underperform, 
    overperform: overperform 
  }
}

module.exports = analyze_this
