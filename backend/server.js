const express = require('express');
const paypal = require('./paypal');
const app = express();

app.post('/create-paypal-transaction', async (req, res) => {
  const { amount } = req.body;

  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [{ amount: { currency_code: 'USD', value: amount } }],
  });

  try {
    const order = await paypal.client().execute(request);
    res.status(200).json({ id: order.result.id, link: order.result.links[1].href });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
