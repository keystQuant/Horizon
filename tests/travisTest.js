const chai = require('chai');

const expect = chai.expect;

describe('Travis CI runs test', () => {
  it('Travis CI에서 테스트가 잘 돌아간다', (done) => {
    const testText = 1;
    expect(testText).to.equal(1);
    done();
  });
});
