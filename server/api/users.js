const router = require("express").Router();
const { models } = require("../db");
const { User } = models;
//require admin token

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username", "isAdmin"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
