const mongoose = require("mongoose");

// Definindo o schema do documento, equivalente a tabela em SQL
const ProductsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3
  },
  description: {
    type: String,
    required: true,
    min: 4
  },
  image: {
    type: String,
    required: false
  }
});

// Exportando o model, usando o Schema para entrada de dados e setando o nome da collection
module.exports = mongoose.model("Products", ProductsSchema, "products");
