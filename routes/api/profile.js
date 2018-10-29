const express = require("express");
const router = express.Router();

// @route GET ao/profile/test
// @desc Tests profile route
// @access Public
router.get("/test", (req, res) => {
  res.status(200).json({
    msg: "Profile workers"
  });
});

module.exports = router;
