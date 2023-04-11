const router = require("express").Router();
const authentication = require("../middelwares/authentication");
const authRouter = require("./auth");
const categoryRouter = require("./categories");

router.use("/auth", authRouter);
router.use(authentication);
router.use("/categories", categoryRouter);
module.exports = router;
