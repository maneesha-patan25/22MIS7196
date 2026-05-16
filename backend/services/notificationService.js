const axios = require("axios");

const PRIORITY = {
  Placement: 3,
  Result: 2,
  Event: 1
};

async function fetchNotifications() {
  const response = await axios.get(
    "http://4.224.186.213/evaluation-service/notifications"
  );

  return response.data;
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