const UnitController = require("../controllers/Unit");
const router = require("express").Router();

router.post("/", UnitController.create);
router.get("/", UnitController.getAll);
router.get("/:id", UnitController.getById);
router.patch("/:id", UnitController.editById);
router.delete("/:id", UnitController.deleteById);

module.exports = router;
