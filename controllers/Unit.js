const { Unit, Category } = require("../models");

module.exports = class UnitController {
  static async create(req, res, next) {
    try {
      const { name, pricePerDay, imgUrl, stock, categoryId } = req.body;
      const unit = await Unit.create({
        name,
        pricePerDay,
        imgUrl,
        stock,
        categoryId,
      });
      res.status(201).json({ unit });
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const units = await Unit.findAll({
        include: {
          model: Category,
          as: "category",
          attributes: ['id', 'name']
        },
        attributes: ['id', 'name', 'pricePerDay', 'stock', 'imgUrl', 'createdAt']
      });
      res.status(200).json({ units });
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const id = req.params.id;
      const unit = await Unit.findByPk(id);

      if (!unit)
        throw {
          name: "NOT_FOUND",
          message: `unit with id ${id} not found!`,
        };

      res.status(200).json({ unit });
    } catch (error) {
      next(error);
    }
  }

  static async editById(req, res, next) {
    try {
      const id = req.params.id;
      const unit = await Unit.findByPk(id);

      if (!unit)
        throw {
          name: "NOT_FOUND",
          message: `unit with id ${id} not found!`,
        };

      const { name, pricePerDay, imgUrl, stock, categoryId } = req.body;
      await Unit.update(
        { name, pricePerDay, imgUrl, stock, brandId, categoryId },
        { where: { id } }
      );

      res.status(200).json({ message: `unit with id ${id} updated!` });
    } catch (error) {
      next(error);
    }
  }

  static async deleteById(req, res, next) {
    try {
      const id = req.params.id;
      const unit = await Unit.findByPk(id);

      if (!unit)
        throw {
          name: "NOT_FOUND",
          message: `unit with id ${id} not found!`,
        };

      await Unit.destroy({ where: { id } });

      res.status(200).json({ message: `unit with id ${id} deleted!` });
    } catch (error) {
      next(error);
    }
  }
};
