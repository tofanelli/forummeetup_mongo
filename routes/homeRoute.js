const express = require("express");
const router = express.Router();

// Controllers
const {
  createProduct,
  showAllProducts
} = require("../controllers/homeController");

// Rotas + middlewares
router.post("/", createProduct);
router.get("/", showAllProducts);

module.exports = router;
