const router = require("express").Router();
const { models } = require("../db");
const User = require("../db/models/User");
const { Order, LineItem } = models;
const requireToken = require("../middleware");
// const requireToken = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;
//     const user = await User.findByToken(token);
//     req.user = user;
//     next();
//   } catch (error) {
//     next(error);
//   }
// };

router.get("/", requireToken, async (req, res, next) => {
  try {
    const orders = await User.findByPk(req.user.id, {
      include: { model: Order },
    });
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
