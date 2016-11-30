var chai = require('chai'),
  expect = chai.expect,
  util = require('../src/js/util');

describe('isEmpty', function() {

  it('Should be true', function() {
    expect(util.isEmpty(null)).to.be.true;
    expect(util.isEmpty(undefined)).to.be.true;
    expect(util.isEmpty('')).to.be.true;
    expect(util.isEmpty(false)).to.be.true;
    expect(util.isEmpty([])).to.be.true;
  });

  it('Should be false', function() {
    expect(util.isEmpty('abc')).to.be.false;
    expect(util.isEmpty(123)).to.be.false;
    expect(util.isEmpty(true)).to.be.false;
    expect(util.isEmpty([1, 2, 3])).to.be.false;
    expect(util.isEmpty({})).to.be.false;
    expect(util.isEmpty({name: 'abc'})).to.be.false;
  });
});

describe('isEmptyObject', function() {

  it('Should be true', function() {
    expect(util.isEmptyObject({})).to.be.true;
  });

  it('Should be false', function() {
    expect(util.isEmptyObject(null)).to.be.false;
    expect(util.isEmptyObject(undefined)).to.be.false;
    expect(util.isEmptyObject('')).to.be.false;
    expect(util.isEmptyObject('abc')).to.be.false;
    expect(util.isEmptyObject(123)).to.be.false;
    expect(util.isEmptyObject(true)).to.be.false;
    expect(util.isEmptyObject(false)).to.be.false;
    expect(util.isEmptyObject([])).to.be.false;
    expect(util.isEmpty([1, 2, 3])).to.be.false;
    expect(util.isEmpty({})).to.be.false;
    expect(util.isEmpty({name: 'abc'})).to.be.false;
  });
});

describe('getRandomArbitrary', function() {
  it('Should between (min, max]', function() {
    var i = 0,
      n = 1000;
    
    for (i = 0; i < n; i++) {
      var result = util.getRandomArbitrary(10, 20);

      expect(result).to.be.at.above(10);
      expect(result).to.be.at.most(20);
    }
  });
});

describe('getRandomInt', function() {
  it('Should between [min, max]', function() {
    var i = 0,
      n = 1000;
    
    for (i = 0; i < n; i++) {
      var result = util.getRandomInt(10, 20);

      expect(result).to.be.within(10, 20);
    }
  });
});

// TODO: complete it
describe('getRandomId', function() {
});

// TODO: complete it
describe('getDistance', function() {
});

// TODO: complete it
describe('getDistanceBetween', function() {
});

// TODO: complete it
describe('getRotationBetween', function() {
});

// TODO: complete it
describe('getDegreeBetween', function() {
});

// TODO: complete it
describe('creature2DArray', function() {
});

// TODO: complete it
describe('getCurrentUtcTimestamp', function() {
});

// TODO: complete it
describe('convertTimestampToLocaleString', function() {
});

// TODO: complete it
describe('addClass', function() {
});

// TODO: complete it
describe('removeClass', function() {
});

// TODO: complete it
describe('removeElement', function() {
});
