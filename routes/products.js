const express = require("express");
const router = express.Router();

const { products } = require("../utils/data");
const { parsId, generateNewId, errorHandler } = require("../utils/middleware");

router.get("/:id", parsId, (req, res) => {
  res.status(200).send(req.info);
});

// GET (All products and filtered by query parameters)
router.get("/", (req, res) => {
  let filteredProducts = [...products];

  if (req.query.category) {
    filteredProducts = filteredProducts.filter((product) =>
      product.category.toLowerCase().includes(req.query.category.toLowerCase())
    );
  }

  if (req.query.minPrice) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= parseFloat(req.query.minPrice)
    );
  }

  if (req.query.maxPrice) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= parseFloat(req.query.maxPrice)
    );
  }

  res.status(200).send(filteredProducts);
});

// POST
router.post("/", generateNewId, (req, res, next) => {
  const { newId } = req;
  const product = req.body;
  const newProduct = { id: newId, ...product };
  products.push(newProduct);
  if (!product.name || !product.price || !product.category || !product.stock) {
    const err = new Error("Missing fields");
    err.status = 400;
    return next(err);
  }
  res.status(200).send(products);
});

// PUT
router.put("/:id", parsId, (req, res) => {
  const { info } = req;
  const updatedProduct = req.body;
  if (!info) {
    return res.status(404).send({ message: "Product does not exist" });
  }
  Object.assign(info, updatedProduct);
  res.status(200).send(products);
});

// DELETE
router.delete("/:id", parsId, (req, res) => {
  const { parsedId } = req;
  const productIndex = products.findIndex((product) => product.id === parsedId);
  if (productIndex === -1) {
    return res.status(404).send({ message: "Product not found" });
  }
  products.splice(productIndex, 1);
  res.status(200).send({ message: "Product deleted successfully" });
});

module.exports = router;
