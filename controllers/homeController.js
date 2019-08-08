const Product = require("../models/ProductsModel");

exports.createProduct = async (request, response, next) => {
  // Recuperando dados vindo do form atraves do request
  const { title, description } = request.body;

  // Criando produto no DB
  const product = await new Product({
    title: title,
    description: description
  });
  // salvando produto no DB
  product
    .save()
    .then(result => {
      // Retornando mensagem de produto criado com sucesso
      response.status(201).json({
        message: "Produto criado com sucesso"
      });
    })
    .catch(error => console.error(error));
};

exports.showAllProducts = async (request, response) => {
  // Buscando todos os produtos no DB
  const products = await Product.find()
    .then(products => {
      // Apenas certificando que o retorno http sera 200
      response.status(200).json({
        products
      });
    })
    .catch(error => console.error(error));
};

exports.deleteProduct = async (request, response, next) => {
  Product.deleteOne({
    _id: request.params.id
  }).then(() => {
    response.json({ message: "Produto excluido com sucesso" }).redirect("/");
  });
};
