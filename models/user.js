"use strict";
const { hashPw } = require("../helpers/hashPw");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "email is already used!",
        },
        validate: {
          notNull: { msg: "email is required!" },
          notEmpty: { msg: "email is required!" },
          isEmail: { msg: "invalid email format!" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "password is required!" },
          notEmpty: { msg: "password is required!" },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate((user, options) => {
    user.password = hashPw(user.password);
  });

  return User;
};
