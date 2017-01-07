const create = context => ({
	MemberExpression(node) {
		if (node.property.name === 'map') {
			context.report({
				node,
				message: "Unexpected `map` method. Use [fp lib] map function instead.",
			})
		}
	}
})

module.exports = {
  create,
  meta: {
    docs: {
      description: 'disallow map method',
      category: 'Best Practices',
      recommended: 'error'
    }
  }
}
