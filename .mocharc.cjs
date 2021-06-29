module.exports = {
  extension: ['js', 'ts'],
  recursive: true,
  exclude: ['mock', 'typings', 'fixtures'],
  require: ['test/babel-register.cjs', 'should', 'should-sinon']
}
