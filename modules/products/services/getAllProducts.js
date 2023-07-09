const productsModel = require("../model");

async function getallproducts(req, res) {
  try {

    const products = await productsModel.find();

    return res
      .status(200)
      .send({ code: 200, message: "products fetched", data: products });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the products" });
  }
}

module.exports = getallproducts;
