const prisma = require("../../../packages/db");

module.exports = async (req, res) => {
  const tracking = req.body.data.tracking;

  await prisma.tracking.upsert({
    where: {
      slug_trackingNumber: {
        slug: tracking.slug,
        trackingNumber: tracking.tracking_number,
      },
    },
    update: {
      status: tracking.tag,
      statusDetail: tracking.subtag_message,
      checkpoints: tracking.checkpoints,
    },
    create: {
      slug: tracking.slug,
      trackingNumber: tracking.tracking_number,
      status: tracking.tag,
      statusDetail: tracking.subtag_message,
      checkpoints: tracking.checkpoints,
    },
  });

  res.sendStatus(200);
};