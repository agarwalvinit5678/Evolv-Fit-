const ErrorHander = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHander(
          req.user.role, "is not allowed to access this resouce" ,
          403
        )
      );
    }

    next();
  };
};