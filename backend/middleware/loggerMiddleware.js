const log = require("../utils/logger");

function loggerMiddleware(req, res, next) {
  log(`${req.method} ${req.url}`);
  next();
}

module.exports = loggerMiddleware;