const express = require("express");
const cors = require("cors");
const fs = require("fs");

const loggerMiddleware =
  require("./middleware/loggerMiddleware");

const notificationRoutes =
  require("./routes/notificationRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(loggerMiddleware);

app.use("/notifications", notificationRoutes);

app.get("/", (req, res) => {
  res.send("Campus Notification Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {

  fs.appendFileSync(
    "app.log",
    `Server running on port ${PORT}\n`
  );

});