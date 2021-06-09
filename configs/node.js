module.exports = {
  extends: [
    'plugin:node/recommended'
  ],
  plugins: [
    'node'
  ],
  rules: {
    // this doesn't seem to work very well :shrug:
    'node/no-unpublished-require': 0
  }
}
