require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(express.json());
app.use(cors());

const productRoute = require("./modules/products/router");
require("./config/database").connect();

app.use("/api/products", productRoute);


app.get("/api", (req, res) => {
  res.send("Api Working!");
});



const { PORT } = process.env || 8000;

app.listen(PORT, function () {
  console.log("Server running on http://localhost:" + PORT);
});
