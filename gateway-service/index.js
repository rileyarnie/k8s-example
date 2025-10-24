const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  }),
);

app.get("/summary", async (req, res) => {
  console.log("summary called");
  try {
    const [ordersRes, inventoryRes] = await Promise.all([
      axios.get("http://order-service.default:5002/orders"),
      axios.get("http://inventory-service.default:5001/inventory"),
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
    // res.json(summary);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Gateway Service running on http://localhost:${PORT}`);
});
