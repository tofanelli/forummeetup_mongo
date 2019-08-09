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

exports.updateProduct = async (request, response, next) => {
  // Buscando no DB o id do produto a ser alterado
  await Product.findByIdAndUpdate({
    _id: request.params.id
  }).then(product => {
    // Recuperando os novos valores enviados
    product.title = request.body.title;
    product.description = request.body.description;

    // Salvando no DB os novos valores e mandando uma mensagem de que
    // a alteracao foi feita com sucesso
    product.save().then(product => {
      response.status(200).json({ message: "Produto alterado com sucesso" });
    });
  });
};

exports.deleteProduct = async (request, response, next) => {
  // Metodo Mongo para exclusao de um item no db
  await Product.deleteOne({
    // Recuperando o valor do produto
    _id: request.params.id
  }).then(() => {
    response.json({ message: "Produto excluido com sucesso" });
    // .redirect("/");
  });
};
