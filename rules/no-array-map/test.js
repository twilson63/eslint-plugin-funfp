const rule = require('./')
const RuleTester = require('eslint').RuleTester
const ruleTester = new RuleTester()

const error = message => ({
  ruleId: 'no-array-map',
  message
})

const mapError = error('Unexpected `map` method. Use [fp lib] map function instead.');

ruleTester.run('no-array-map', rule, {
  valid: [],
  invalid: [
    {
      code: '[1,2,3].map(function (v) { return 1 })',
      errors: [mapError]
    }
  ]
})
