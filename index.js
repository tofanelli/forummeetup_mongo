// Core
const path = require("path");

// 3rd
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
require("dotenv").config();

// Porta
// Setando porta para servidor e localhost
const PORT = process.env.PORT || 3000;

// Static Folder
// Upload de arquivos como JS, CSS e imagens
app.use(express.static(path.join(__dirname, "public")));

// Handlebars
// Template engine para renderizar paginas HTML
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Inicializacao das rotas
const homeRoute = require("./routes/homeRoute");

// Body Parser
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Mongoose
// Colocando DB como variavel de ambiente por seguranca
mongoose.connect(process.env.mongoURI || mongoURI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("conectado no banco"));

// Rotas
app.use("/", homeRoute);

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
