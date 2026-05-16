const express = require("express");

const router = express.Router();

const {
  fetchNotifications,
  sortNotifications
} = require("../services/notificationService");

router.get("/", async (req, res) => {

  try {

    const notifications =
      await fetchNotifications();

    res.json(notifications);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch notifications"
    });
  }
});

router.get("/priority", async (req, res) => {

  try {

    const limit =
      parseInt(req.query.limit) || 10;

    let notifications =
      await fetchNotifications();

    notifications =
      notifications.filter(
        item => !item.read
      );

    const sorted =
      sortNotifications(notifications);

    res.json(sorted.slice(0, limit));

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch priority inbox"
    });
  }
});

module.exports = router;