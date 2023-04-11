"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Unit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Unit.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });
    }
  }
  Unit.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "unit is already in database!",
        },
        validate: {
          notNull: { msg: "unit name is required!" },
          notEmpty: { msg: "unit name is required!" },
        },
      },
      pricePerDay: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "unit price per day is required!" },
          notEmpty: { msg: "unit price per day is required!" },
        },
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "unit image url is required!" },
          notEmpty: { msg: "unit image url is required!" },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "unit stock is required!" },
          notEmpty: { msg: "unit stock is required!" },
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "unit category id is required!" },
          notEmpty: { msg: "unit category id is required!" },
        },
        references: {
          model: "Categories",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
    },
    {
      sequelize,
      modelName: "Unit",
    }
  );
  return Unit;
};
