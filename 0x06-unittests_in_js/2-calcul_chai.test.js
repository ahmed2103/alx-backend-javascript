#!/usr/bin/node
const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });
  describe('SUBTRACT', function () {
    it('should return -4', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });
  describe('DIVIDE', function () {
    it('should return .2', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });
  describe('DIVIDE', function () {
    it('should return "Error"', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
