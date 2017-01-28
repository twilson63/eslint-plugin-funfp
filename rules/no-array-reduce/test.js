const rule = require('./')
const RuleTester = require('eslint').RuleTester
const ruleTester = new RuleTester()

const error = message => ({
  ruleId: 'no-array-reduce',
  message
})

const reduceError = error('Unexpected `reduce` method. Use [fp lib] reduce function instead.');

ruleTester.run('no-array-reduce', rule, {
  valid: [],
  invalid: [
    {
      code: '[1,2,3].reduce(function (a, v) { return 1 })',
      errors: [reduceError]
    }
  ]
})
