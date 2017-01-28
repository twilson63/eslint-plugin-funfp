var RuleTester = require("eslint").RuleTester;
var test = require("tape");

RuleTester.describe = function(text, method) {
    RuleTester.it.title = text;
    return method.apply(this);
};

RuleTester.it = function(text, method) {
  test(RuleTester.it.title + ": " + text, t => {
    method()
    t.end()
  });
};

module.exports = RuleTester
