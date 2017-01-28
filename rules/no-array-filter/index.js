const create = context => ({
	MemberExpression(node) {
		if (node.property.name === 'filter') {
			context.report({
				node,
				message: "Unexpected `filter` method. Use [fp lib] filter function instead.",
			})
		}
	}
})

module.exports = {
  create,
  meta: {
    docs: {
      description: 'disallow array filter method',
      category: 'Best Practices',
      recommended: 'error'
    }
  }
}
