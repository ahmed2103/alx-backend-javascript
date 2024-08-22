#!/usr/bin/node
const { expect } = require('chai');
const request = require('request');

describe('Express app GET /', function () {
  it('GET / should respond with correct propeties', function (done) {
    request('http://localhost:7865', (___, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Express app GET cart/:id', function () {
  it('GET cart/number should respond with correct propeties', (done) => {
    request('http://localhost:7865/cart/299', (___, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 299');
      done();
    });
  });
  it('GET cart/! number should respond with correct propeties', (done) => {
    request('http://localhost:7865/cart/test', (___, res, __) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});

describe('Express app GET /available_payments', function () {
  it('GET /available_payments should respond with correct propeties', (done) => {
    request('http://localhost:7865/available_payments', (___, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Express app POST /login', function () {
  it('POST /login should respond with correct propeties', (done) => {
    request.post('http://localhost:7865/login', { json: { userName: 'Betty' } }, (__, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Betty');
      done();
    });
  });
});
