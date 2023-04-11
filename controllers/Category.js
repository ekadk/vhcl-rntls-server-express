const { Category } = require("../models");

module.exports = class CategoryController {
  static async create(req, res, next) {
    try {
      const { name } = req.body;
      const category = await Category.create({ name });
      res.status(201).json({ category });
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const categories = await Category.findAll();
      res.status(200).json({ categories });
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const id = req.params.id;
      const category = await Category.findOne({
        where: { id },
      });

      if (!category)
        throw {
          name: "NOT_FOUND",
          message: `category with id ${id} not found!`,
        };

      res.status(200).json({ category });
    } catch (error) {
      next(error);
    }
  }

  static async editById(req, res, next) {
    try {
      const id = req.params.id;
      const category = await Category.findByPk(id);

      if (!category)
        throw {
          name: "NOT_FOUND",
          message: `category with id ${id} not found!`,
        };

      const { name } = req.body;
      await Category.update({ name }, { where: { id } });

      res.status(200).json({ message: `category with id ${id} updated!` });
    } catch (error) {
      next(error);
    }
  }

  static async deleteById(req, res, next) {
    try {
      const id = req.params.id;
      const category = await Category.findByPk(id);

      if (!category)
        throw {
          name: "NOT_FOUND",
          message: `category with id ${id} not found!`,
        };

      await Category.destroy({ where: { id } });

      res.status(200).json({ message: `category with id ${id} deleted!` });
    } catch (error) {
      next(error);
    }
  }
};
