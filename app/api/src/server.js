require("dotenv").config();

const express = require("express");
const cors = require("cors");

const trackingRoutes = require("./routes/trackingRoutes");
const webhookHandler = require("./webhooks/ship24");

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Tracking API is running",
  });
});

// API routes
app.use("/trackings", trackingRoutes);

// AfterShip webhook
app.post("/webhooks/aftership", webhookHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});