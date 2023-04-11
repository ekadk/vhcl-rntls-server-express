const { verifyToken } = require("../helpers/jwt");

const authentication = async (req, res, next) => {
  try {
    const access_token = req.headers.access_token;
    if (!access_token) throw { name: "INVALID_TOKEN" };

    const decoded = verifyToken(access_token);

    req.headers.user = { id: decoded.id };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
