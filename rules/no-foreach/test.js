const rule = require('./')
const RuleTester = require('eslint').RuleTester
const ruleTester = new RuleTester()

const error = message => ({
  ruleId: 'no-foreach',
  message
})

const forEachError = error('Unexpected `forEach` method. Use map instead.');

ruleTester.run('no-foreach', rule, {
  valid: [],
  invalid: [
    {
      code: '[1,2,3].forEach(function (v) { return 1 })',
      errors: [forEachError]
    }
  ]
})
