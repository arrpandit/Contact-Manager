const { constant } = require("../constant");


const errorHandler = (err, req, res, hext) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constant.VALIDATION_ERROR:
      res.json({
        title: "validation failed",
        message: err.message,
        stackTrack: err.stack,
      });
      break;
    case constant.NOT_FOUND:
      res.json({
        title: "Not found",
        message: err.message,
        stackTrack: err.stack,
      });
      case constant.UNAUTHORIZED:
      res.json({
        title: "UNAUTHORIZED",
        message: err.message,
        stackTrack: err.stack,
      });
      case constant.FORBIDDEN:
      res.json({
        title: "FORBIDDEN",
        message: err.message,
        stackTrack: err.stack,
      });
      case constant.SERVER_ERROR:
      res.json({
        title: "SERVER_ERROR",
        message: err.message,
        stackTrack: err.stack,
      });
      
    default:
      break;
  }
};

module.exports = errorHandler;
