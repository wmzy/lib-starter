import _ from 'lodash';
import hello from '../src';

describe('lib-starter', function() {
  it('hello', function() {
    hello().should.be.equal(_.VERSION);
  });
});
