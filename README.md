# eslint-plugin-funfp

A eslint plugin to encourage point-free style of
functional programming using ramda, funfp, or lodash/fp

[![Build](https://travis-ci.org/twilson63/eslint-plugin-funfp.svg?branch=master)](https://travis-ci.org/twilson63/eslint-plugin-funfp)

## Getting Started

Use this plugin with the eslint-plugin-fp for a powerful fp experience.

## Rules

- [no-array-filter](./rules/no-array-filter)
- [no-array-map](./rules/no-array-map)
- [no-array-reduce](./rules/no-array-reduce)
- [no-foreach](./rules/no-foreach)

## .eslint.js

Make sure you enable the recommended rules using the
extends node

```
module.exports = {
    "extends": [
      "plugin:funfp/recommended"
    ],
    "plugins": [
        "funfp"
    ]
}

```

## License

MIT

## Contributions
