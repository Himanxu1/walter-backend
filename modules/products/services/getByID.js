const productsModel = require("../model");

async function getByID(req, res) {
  try {
    const { productId } = req.query;
    const product = await productsModel.find({id: productId });

    return res
      .status(200)
      .send({ code: 200, message: "product fetched", data: product });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the product" });
  }
}

module.exports = getByID;
