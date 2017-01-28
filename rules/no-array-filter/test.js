const rule = require('./')
const RuleTester = require('eslint').RuleTester
const ruleTester = new RuleTester()

const error = message => ({
  ruleId: 'no-array-filter',
  message
})

const filterError = error('Unexpected `filter` method. Use [fp lib] filter function instead.');

ruleTester.run('no-array-filter', rule, {
  valid: [],
  invalid: [
    {
      code: '[1,2,3].filter(function (v) { return true })',
      errors: [filterError]
    }
  ]
})
