const create = context => ({
	MemberExpression(node) {
		if (node.property.name === 'forEach') {
			context.report({
				node,
				message: "Unexpected `forEach` method. Use map instead.",
			})
		}
	}
})

module.exports = {
  create,
  meta: {
    docs: {
      description: 'disallow forEach for map',
      category: 'Best Practices',
      recommended: 'error'
    }
  }
}
