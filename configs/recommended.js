module.exports = {
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended'
  ],
  rules: {
    /**
     * We generally don't need or want semicolons, but we should require them
     * before so-called continuation characters like "(" and "[", because
     * automatic semicolon insertion doesn't "fix" cases like this:
     *
     * ```js
     * const foo = 'bar'
     *
     * (() => {
     *   console.log(foo)
     * })()
     * ```
     *
     * Our rules only require semicolons in cases like this, where ASI doesn't
     * apply and it would be interpreted as:
     *
     * ```js
     * const foo = 'bar'(() => { console.log(foo) })()
     * ```
     *
     * ...yielding the difficult-to-decipher error:
     *
     * ```
     * Uncaught TypeError: "bar" is not a function
     * ```
     */
    semi: ['error', 'never', {
      beforeStatementContinuationChars: 'always'
    }]
  },
  parserOptions: {
    ecmaVersion: 9
  },
  plugins: [
    'import',
    'promise'
  ]
}
