const express = require("express");
const router = express.Router();

router.get("/", () => {
  console.log("users");
});

module.exports = router;
