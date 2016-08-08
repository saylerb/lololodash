var _ = require("lodash");

var groupComments = function(comments) {
  var grouped = _.groupBy(comments, 'username');

  var result = []

  for (var user in grouped) {
  
   var sub_result = {}
   var comment_count = _.size(grouped[user]) 

   sub_result['username'] = user
   sub_result['comment_count'] = comment_count

   result.push(sub_result)
  }

  return result.reverse()
}

module.exports = groupComments
