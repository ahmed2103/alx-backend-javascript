#!/usr/bin/node
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  it('should assert calculateNumber was called with argument', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.callCount).to.be.equal(1);
    spy.restore();
  });
});
