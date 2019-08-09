const express = require("express");
const router = express.Router();

// Controllers
const {
  createProduct,
  showAllProducts,
  deleteProduct,
  updateProduct
} = require("../controllers/homeController");

// Rotas + middlewares
router.post("/", createProduct);
router.get("/", showAllProducts);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

module.exports = router;
