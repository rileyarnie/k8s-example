const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // your frontend origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // if you're using cookies or authentication headers
  }),
);

app.get("/summary", async (req, res) => {
  try {
    const [ordersRes, inventoryRes] = await Promise.all([
      axios.get("http://localhost:5001/orders"),
      axios.get("http://localhost:5002/inventory"),
    ]);

    const summary = ordersRes.data.map((order) => {
      const product = inventoryRes.data.find(
        (item) => item.id === order.productId,
      );
      return {
        orderId: order.id,
        productName: product ? product.name : "Unknown",
        quantity: order.quantity,
        stock: product ? product.stock : 0,
      };
    });

    res.json(summary);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

const PORT = 5003;

app.listen(PORT, () => {
  console.log(`Gateway Service running on http://localhost:${PORT}`);
});
