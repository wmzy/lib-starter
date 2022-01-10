import hello from '../src';

describe('lib-starter', () => {
  it('hello', () => {
    hello('world').should.be.equal('hello world');
  });
});
