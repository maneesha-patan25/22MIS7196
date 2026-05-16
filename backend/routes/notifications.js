const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Google Placement Drive",
      type: "Placement",
      timestamp: "2026-05-16T09:00:00Z",
      read: false
    },
    {
      id: 2,
      title: "Semester Results Published",
      type: "Result",
      timestamp: "2026-05-16T08:00:00Z",
      read: false
    }
  ]);
});

module.exports = router;