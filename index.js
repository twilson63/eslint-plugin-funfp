module.exports = {
  rules: {
    'no-array-map': require('./rules/no-array-map'),
    'no-foreach': require('./rules/no-foreach')
  },
  configs: {
    recommended: {
      rules: {
        'funfp/no-array-map': "error",
        'funfp/no-foreach': "error"
      }
    }
  }
}
