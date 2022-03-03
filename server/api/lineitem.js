const router = require("express").Router();
const { models } = require("../db");
const { LineItem } = models;

router.get("/user/:id", async (req, res, next) => {
  try {
    const lineitems = await LineItem.findByPk();
    res.json(lineitems);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
