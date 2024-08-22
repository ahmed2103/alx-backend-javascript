#!/usr/bin/node
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  let logSpy;
  beforeEach(() => {
    if (!logSpy) logSpy = logSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    logSpy.resetHistory();
  });
  after(() => {
    logSpy.restore();
  });
  it('should assert console was called once and logs 120', function () {
    sendPaymentRequestToApi(100, 20);
    expect(logSpy.callCount).to.be.equal(1);
    expect(logSpy.calledWith('The total is: 120'));
  });
  it('should assert console was called once and logs 20', function () {
    sendPaymentRequestToApi(10, 10);
    expect(logSpy.callCount).to.be.equal(1);
    expect(logSpy.calledWith('The total is: 20'));
  });
});
