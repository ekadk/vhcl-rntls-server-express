const errorHandler = (error, req, res, next) => {
  console.log(error);
  let code = 500;
  let message = "internal server error";

  if (
    error.name === "SequelizeValidationError" ||
    error.name === "SequelizeUniqueConstraintError"
  ) {
    code = 400;
    message = error.errors[0].message;
  }

  if (error.name === "EMAIL_REQUIRED") {
    code = 400;
    message = "email is required!";
  }

  if (error.name === "PASSWORD_REQUIRED") {
    code = 400;
    message = "password is required!";
  }

  if (error.name === "INVALID_TOKEN" || error.name === "JsonWebTokenError") {
    code = 401;
    message = "invalid token!";
  }

  if (error.name === "INVALID_LOGIN") {
    code = 403;
    message = "invalid email/password!";
  }

  if (error.name === "NOT_FOUND") {
    code = 404;
    message = error.message;
  }

  res.status(code).json({ message });
};

module.exports = errorHandler;
