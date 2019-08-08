const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Porta
const PORT = process.env.PORT || 3000;

// Body Parser
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Mongoose
mongoose.connect(process.env.mongoURI || mongoURI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("conectado no banco"));

// Rotas
const homeRoute = require("./routes/homeRoute");
app.use("/", homeRoute);

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
