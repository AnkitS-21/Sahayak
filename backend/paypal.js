const paypal = require('@paypal/checkout-server-sdk');

// Set up PayPal environment
const environment = new paypal.core.SandboxEnvironment('your-client-id', 'your-client-secret');
const client = new paypal.core.PayPalHttpClient(environment);

function getClient() {
  return client;
}

module.exports = {
  client: getClient,
  orders: paypal.orders,
};
