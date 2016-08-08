var _ = require("lodash");

var groupComments = function(comments) {

  var result = []
  var grouped = _.groupBy(comments, 'username');

  for (var user in grouped) {

   var total_comments = _.size(grouped[user]) 

   result.push({ username: user, comment_count: total_comments })
  }

  return result.reverse()
}

module.exports = groupComments
