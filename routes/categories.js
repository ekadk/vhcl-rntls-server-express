const CategoryController = require("../controllers/Category");

const router = require("express").Router();

router.post("/", CategoryController.create);
router.get("/", CategoryController.getAll);
router.get("/:id", CategoryController.getById);
router.patch("/:id", CategoryController.editById);
router.delete("/:id", CategoryController.deleteById);

module.exports = router;
