var _ = require("lodash");

var templating = function(user_data) {

  user_template = "Hello <%= name %> (logins: <%= _.size(login) %>)"

  return _.template(user_template)(user_data)
}

module.exports = templating
