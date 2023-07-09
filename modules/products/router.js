const express = require("express");
const router = express.Router();

const getallproducts = require("./services/getAllProducts");
const saveProduct = require('./services/save')
const getbyid = require('./services/getByID')

// get commented ideas
router.get("/get-all", async (req, res) => {
  await getallproducts(req, res);
});

// add product
router.post("/save", async (req, res) => {
    await saveProduct(req, res);
  });
  
//  get by id
router.get("/", async (req, res) => {
    await getbyid(req, res);
  });

module.exports = router;
