const express = require('express');
const app = express();
const PORT = 5001;

const orders = [
  { id: 1, productId: 101, quantity: 2 },
  { id: 2, productId: 102, quantity: 1 },
];

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.listen(PORT, () => {
  console.log(`Order Service running on http://localhost:${PORT}`);
});

