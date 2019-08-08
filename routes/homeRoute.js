const express = require("express");
const router = express.Router();

// Controllers
const {
  createProduct,
  showAllProducts,
  deleteProduct
} = require("../controllers/homeController");

// Rotas + middlewares
router.post("/", createProduct);
router.get("/", showAllProducts);
router.delete("/:id", deleteProduct);

module.exports = router;
