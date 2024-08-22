#!/usr/bin/node
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should return 4', function () {
    assert.strictEqual(calculateNumber(1,3), 4);
  });
  it('should return 5', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should return 5', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 6', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('should correctly add two positive integers', function() {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('should correctly add two negative integers', function() {
    assert.strictEqual(calculateNumber(-1, -2), -3);
  });

  it('should correctly add a positive integer and a negative integer', function() {
    assert.strictEqual(calculateNumber(1, -2), -1);
  });

  // Edge Cases
  it('should correctly round and add two fractional numbers', function() {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('should correctly handle zero values', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 1.5), 2);
    assert.strictEqual(calculateNumber(-1.6, 0), -2);
  });

  it('should correctly handle large numbers', function() {
    assert.strictEqual(calculateNumber(123456789.9, 987654321.1), 1111111111);
  });
});
