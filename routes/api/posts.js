const express = require("express");
const router = express.Router();

// @route GET ao/posts/test
// @desc Tests post route
// @access Public
router.get("/test", (req, res) => {
  res.status(200).json({
    msg: "Posts workers"
  });
});

module.exports = router;
