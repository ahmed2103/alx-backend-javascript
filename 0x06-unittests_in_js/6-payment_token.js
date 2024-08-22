#!/usr/bin/node
function getPaymentTokenFromAPI (success) {
  return new Promise((resolve, ___) => {
    if (success) { return resolve({ data: 'Successful response from the API' }); }
  });
}

module.exports = getPaymentTokenFromAPI;
