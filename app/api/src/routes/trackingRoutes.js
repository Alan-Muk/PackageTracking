const express = require("express");
const router = express.Router();

const {
  createTracking,
  getTrackings,
} = require("../controllers/trackingController");

router.get("/", getTrackings);
router.post("/", createTracking);

module.exports = router;