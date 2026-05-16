const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// TEMP DATA (same JSON you saw before)
const notifications = [
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
  },
  {
    id: 3,
    title: "Hackathon Event Tomorrow",
    type: "Event",
    timestamp: "2026-05-16T07:00:00Z",
    read: true
  }
];

// 🔥 THIS IS THE ONLY REQUIRED ROUTE
app.get("/api/notifications", (req, res) => {
  res.json(notifications);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});