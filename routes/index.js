const router = require("express").Router();
const authentication = require("../middelwares/authentication");
const authRouter = require("./auth");

router.use("/auth", authRouter);
router.use(authentication);
router.get("/test-auth", (req, res) => {
  res.status(200).json({
    message: "authentication passed!",
  });
});
module.exports = router;
