const axios = require("axios");
const fs = require("fs");

const PRIORITY = {
  Placement: 3,
  Result: 2,
  Event: 1
};

const mockNotifications = [

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
  },

  {
    id: 4,
    title: "Amazon Internship Hiring",
    type: "Placement",
    timestamp: "2026-05-15T10:00:00Z",
    read: false
  },

  {
    id: 5,
    title: "Internal Exam Results",
    type: "Result",
    timestamp: "2026-05-14T11:00:00Z",
    read: true
  }

];

async function fetchNotifications() {

  try {

    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications"
    );

    fs.appendFileSync(
      "app.log",
      "Fetched API notifications\n"
    );

    return response.data;

  } catch (error) {

    fs.appendFileSync(
      "app.log",
      "Using mock notifications\n"
    );

    return mockNotifications;
  }
}

function sortNotifications(notifications) {

  return notifications.sort((a, b) => {

    const priorityDifference =
      PRIORITY[b.type] - PRIORITY[a.type];

    if (priorityDifference !== 0) {
      return priorityDifference;
    }

    return (
      new Date(b.timestamp) -
      new Date(a.timestamp)
    );

  });
}

module.exports = {
  fetchNotifications,
  sortNotifications
};