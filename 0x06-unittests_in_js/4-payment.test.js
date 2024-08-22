#!/usr/bin/node
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  it('should assert calculateNumber was called with argument', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const logSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.callCount).to.be.equal(1);
    expect(logSpy.calledWith('The total is: 10'));
    stub.restore();
    logSpy.restore();
  });
});
