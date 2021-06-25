module.exports = {
  extends: [
    'plugin:jest/recommended'
  ],
  plugins: [
    'jest'
  ],
  rules: {
    // promises in tests (particularly with supertest) don't need to return
    // anything
    'promise/always-return': 0
  }
}
