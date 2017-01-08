module.exports = {
  rules: {
    'no-array-map': require('./rules/no-array-map'),
    'no-foreach': require('./rules/no-foreach')
  },
  configs: {
    recommended: {
      rules: {
        'no-array-map': "error",
        'no-foreach': "error"
      }
    }
  }
}
