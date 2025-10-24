const express = require("express");
const app = express();
const PORT = 5002;

const inventory = [
  { id: 101, name: "Laptop", stock: 10 },
  { id: 102, name: "Phone", stock: 20 },
];

app.get("/inventory", (req, res) => {
  res.json(inventory);
});

app.listen(PORT, () => {
  console.log(`Inventory Service running on http://localhost:${PORT}`);
});
