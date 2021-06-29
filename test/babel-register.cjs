const register = require('@babel/register');

// eslint-disable-next-line no-underscore-dangle
global.__DEV__ = true;

register({extensions: ['.js', '.jsx', 'ts', 'tsx']});
