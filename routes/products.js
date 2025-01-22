const express = require("express");
const router = express.Router();

router.get("/", () => {
  console.log("productsss");
});

module.exports = router;
