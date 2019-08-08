const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Rotas
const homeRoute = require("./routes/homeRoute");
app.use("/", homeRoute);

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
