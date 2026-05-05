const prisma = require("../../../packages/db");
const aftership = require("../lib/aftership");

exports.createTracking = async (req, res) => {
  const { slug, trackingNumber } = req.body;

  try {
    await aftership.post("/trackings", {
      tracking: {
        slug,
        tracking_number: trackingNumber,
      },
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json(err.response?.data || err.message);
  }
};

exports.getTrackings = async (req, res) => {
  const data = await prisma.tracking.findMany({
    orderBy: { updatedAt: "desc" },
  });

  res.json(data);
};