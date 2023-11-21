// take 3 things while creating a middleware (req, res,next)
// next to move from one logic to another
const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

module.exports = { notFound };
