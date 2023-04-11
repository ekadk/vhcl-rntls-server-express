const router = require("express").Router();
const authentication = require("../middelwares/authentication");
const authRouter = require("./auth");
const categoryRouter = require("./categories");
const unitRouter = require("./units");

router.use("/auth", authRouter);
router.use(authentication);
router.use("/categories", categoryRouter);
router.use("/units", unitRouter);
module.exports = router;
