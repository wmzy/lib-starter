module.exports = {
  presets: [['@babel/env', {modules: false}]],
  env: {
    test: {
      presets: [['@babel/env', {targets: {node: true}}]]
    }
  }
};
