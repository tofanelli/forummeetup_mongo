const Products = require("../models/ProductsModel");

exports.showAllProducts = async (request, response) => {
  // Buscando todos os produtos no DB
  const products = await Products.find()
    .then(products => {
      // Apenas certificando que o retorno http sera 200
      response.status(200).json({
        products
      });
    })
    .catch(error => console.error(error));
};
