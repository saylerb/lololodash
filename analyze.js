var _ = require("lodash");

var analyze_this = function(freelancers) {

  total_income = _.reduce(freelancers, (sum, freelancer) => {
    return sum += freelancer.income
  },0) 


  var avg_income = total_income / _.size(freelancers)

  var underperform = _.filter(freelancers, freelancer => {
    return freelancer.income < avg_income
  })

  var overperform = _.filter(freelancers, freelancer => {
    return freelancer.income > avg_income
  })

  return { average: avg_income, 
           underperform: _.sortBy(underperform, 'income'),
           overperform: _.sortBy(overperform, 'income') }
  
}

module.exports = analyze_this
