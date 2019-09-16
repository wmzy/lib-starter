import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';
import plugins, {file} from 'rollup-plugin-by-output';
import pkg from './package.json';

const banner = `
/*!
  * ${pkg.name} v${pkg.version} (${pkg.homepage})
  * Copyright (c) 2019-present ${pkg.author}
  * Licensed under ${pkg.license} (${pkg.homepage}/blob/master/LICENSE)
  */
`;

export default {
  input: 'src/index.js',
  external: ['lodash'],
  plugins: plugins(
    babel({
      exclude: ['node_modules/**']
    }),
    [file(/\.min\.js$/), terser({sourcemap: true, output: {comments: /^!/}})]
  ),
  output: [
    // browser-friendly UMD build
    {
      globals: {
        lodash: '_'
      },
      name: pkg.name,
      file: pkg.browser,
      sourcemap: true,
      format: 'umd'
    },
    {
      globals: {
        lodash: '_'
      },
      name: pkg.name,
      banner,
      file: pkg.unpkg,
      sourcemap: true,
      format: 'umd'
    },
    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify
    // `file` and `format` for each target)
    {
      file: pkg.main,
      sourcemap: true,
      format: 'cjs'
    },
    {
      file: pkg.module,
      sourcemap: true,
      format: 'es'
    }
  ]
};
