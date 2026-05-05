require("dotenv").config();
const express = require("express");
const cors = require("cors");

const trackingRoutes = require("./routes/trackingRoutes");
const webhookHandler = require("./webhooks/aftership");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/trackings", trackingRoutes);
app.post("/webhooks/aftership", webhookHandler);

app.listen(3001, () => {
  console.log("API running on port 3001");
});