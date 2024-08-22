#!/usr/bin/node
function sendPaymentRequestToApi (totalAmount, totalShipping) {
  const utils = require('./utils');
  const result = utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
