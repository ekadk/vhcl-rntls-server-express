const { User } = require("../models");
const { comparePw } = require("../helpers/hashPw");
const { createToken } = require("../helpers/jwt");

module.exports = class AuthController {
  static async signup(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.create({
        email,
        password,
      });
      res.status(200).json({ id: user.id, email: user.email });
    } catch (error) {
      next(error);
    }
  }

  static async signin(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) throw { name: "EMAIL_REQUIRED" };
      if (!password) throw { name: "PASSWORD_REQUIRED" };

      const user = await User.findOne({ where: { email } });
      if (!user) throw { name: "INVALID_LOGIN" };

      const isValid = comparePw(password, user.password);
      if (!isValid) throw { name: "INVALID_LOGIN" };

      const access_token = createToken({
        id: user.id,
        email: user.email,
      });

      res.status(201).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
};
