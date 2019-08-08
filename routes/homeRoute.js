const express = require("express");
const router = express.Router();

// Controllers
const productsHome = require("../controllers/homeController");

router.get("/", productsHome, (request, response) => {
  response.send("/index");
});

module.exports = router;
