const router = require("express").Router();
const AuthController = require("../controllers/Auth");

router.post("/signup", AuthController.signup);
router.post("/signin", AuthController.signin);

module.exports = router;
