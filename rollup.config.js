import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const base = {
  input: 'src/index.js',
  external: ['lodash'],
  plugins: [
    babel({
      exclude: ['node_modules/**']
    })
  ]
};

export default [
  // browser-friendly UMD build
  {
    ...base,
    output: {
      globals: {
        lodash: '_'
      },
      name: pkg.name,
      file: pkg.browser,
      format: 'umd'
    }
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    ...base,
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ]
  }
];
