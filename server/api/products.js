'use strict';

const router = require('express').Router();
const { models } = require('../db');
const { Product } = models;

//Get /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(product);
  } catch (error) {
    next(error);
  }
});

// GET /api/products/:id
// router.get("/:id", async (req, res, next) => {
//   try {
//     const product = await Product.findByPk(req.params.id);
//     if (product) res.json(product);
//     else res.sendStatus(404);
//   } catch (error) {
//     next(error);
//   }
// });

// POST /api/products/
router.post('/', async (req, res, next) => {
  try {
    res.status(201).json(await Product.create(req.body));
  } catch (error) {
    next(error);
  }
});

// PUT /api/products/:id
// router.put("/:id", async (req, res, next) => {
//   try {
//     const product = await Product.findByPk(req.params.id);
//     res.json(await product.update(req.body));
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
