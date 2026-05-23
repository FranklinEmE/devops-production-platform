const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "OK",
    service: "backend",
    time: new Date()
  });
});

module.exports = router;
