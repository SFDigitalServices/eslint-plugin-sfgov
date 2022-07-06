module.exports = {
  plugins: [
    'node'
  ],
  extends: [
    'plugin:node/recommended'
  ],
  parserOptions: {
    // node 14+
    ecmaVersion: 2020
  },
  env: {
    node: true
  },
  rules: {
    // this doesn't seem to work very well :shrug:
    'node/no-unpublished-require': 0
  }
}
