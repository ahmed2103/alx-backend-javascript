#!/usr/bin/node
const { expect } = require('chai');
const request = require('request');

describe('Express app', function () {
  it('should return respond with correct propeties', function (done) {
    request('http://localhost:7865', (___, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
