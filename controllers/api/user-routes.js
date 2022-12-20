const router = require("express").Router();
const { response } = require("express");
const { Product, Users, Cart, Category } = require("../../models");
const { tableName } = require("../../models/Productv");

router.post("/", async (req, res) => {
  Users.create(req.body);
  res.json({ message: "User account created" });
  console.log(req.body);
});

router.get("/", async (req, res) => {
  let users = await Users.findAll();

  res.json(users);
});

router.post("/login", async (req, res) => {
  try {
    const userData = await Users.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    req.session.save(async () => {
      const data = await Cart.findAll({
        where: { user_id: userData.id },
        include: Product,
      });
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get("/logout", async (req, res) => {
  if (req.session.logged_in) {
    await req.session.destroy(() => {});
  }
  res.redirect("/");
});

router.get("/cart", async (req, res) => {
  const data = await Cart.findAll({
    where: { user_id: req.session.user_id },
    include: Product,
  });
  res.json(data);
});

module.exports = router;
