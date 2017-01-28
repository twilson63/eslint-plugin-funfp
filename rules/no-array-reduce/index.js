const create = context => ({
	MemberExpression(node) {
		if (node.property.name === 'reduce') {
			context.report({
				node,
				message: "Unexpected `reduce` method. Use [fp lib] reduce function instead.",
			})
		}
	}
})

module.exports = {
  create,
  meta: {
    docs: {
      description: 'disallow reduce method',
      category: 'Best Practices',
      recommended: 'error'
    }
  }
}
