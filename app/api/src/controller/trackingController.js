const prisma = require("../../../packages/db");
const ship24 = require("../lib/ship24");

exports.createTracking = async (req, res) => {
  const { trackingNumber, courierCode } = req.body;

  try {
    const response = await ship24.post("/v1/trackers", {
      trackingNumber,
      courierCode,
    });

    const tracker = response.data.data;

    await prisma.tracking.create({
      data: {
        trackingNumber,
        ship24TrackerId: tracker.trackerId,
        status: "Pending",
      },
    });

    res.status(201).json({
      success: true,
      tracker,
    });
  } catch (err) {
    console.error(err.response?.data || err.message);

    res.status(500).json({
      success: false,
      message: "Failed to create tracking",
    });
  }
};