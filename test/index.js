import hello from '../src';

/** @typedef {import('should')} */

describe('lib-starter', () => {
  it('hello', () => {
    hello('world').should.be.equal('hello world');
  });
});
