const router = require("express").Router();
const authRouter = require("./auth");

router.use("/auth", authRouter);

router.get("/test-auth", (req, res) => {
  res.status(200).json({
    message: "authentication passed!",
  });
});
module.exports = router;
