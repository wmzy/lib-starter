module.exports = {
  presets: [['@babel/env', {modules: false}]],
  env: {
    test: {
      presets: [['@babel/env', {modules: 'commonjs', targets: {node: true}}]]
    }
  }
};
