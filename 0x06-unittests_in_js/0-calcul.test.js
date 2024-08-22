#!/usr/bin/node
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should return 4', function () {
    const result1 = calculateNumber(1, 3);
    assert.strictEqual(result1, 4);
  });
  it('should return 5', function () {
    const result2 = calculateNumber(1, 3.7);
    assert.strictEqual(result2, 5);
  });
  it('should return 5', () => {
    const result3 = calculateNumber(1.2, 3.7);
    assert.strictEqual(result3, 5);
  });
  it('should return 6', () => {
    const result4 = calculateNumber(1.5, 3.7);
    assert.strictEqual(result4, 6);
  });
});
