const logger = (req, res, next) => {
  console.log(`[LOCAL LOG] ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = logger;
