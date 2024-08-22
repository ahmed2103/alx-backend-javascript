#!/usr/bin/node
const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should test the resolve object not the promise', (done) => {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(result).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  });
});
