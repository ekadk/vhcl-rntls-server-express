"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Unit, { foreignKey: "categoryId", as: "units" });
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "category is already in database!",
        },
        validate: {
          notNull: { msg: "category name is required!" },
          notEmpty: { msg: "category name is required!" },
        },
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );

  Category.beforeCreate((category, options) => {
    category.name = category.name.toLowerCase();
  });
  return Category;
};
