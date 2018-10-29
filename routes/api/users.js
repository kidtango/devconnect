const express = require("express");
const router = express.Router();

// @route GET ao/users/test
// @desc Tests user route
// @access Public
router.get("/test", (req, res) => {
  res.status(200).json({
    msg: "Users workers"
  });
});

module.exports = router;
