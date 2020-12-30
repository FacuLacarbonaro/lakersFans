const express = require("express");
const router = express.Router();

const Products = require("../models/Products");

router.get("/products", async (req, res) => {
  const productsSearched = await Products.find();
  res.json(productsSearched);
});

router.post("/products/add", async (req, res) => {
  const addProduct = new Products(req.body);
  const savedProduct = await addProduct.save();

  res.json(savedProduct);
});

module.exports = router;
