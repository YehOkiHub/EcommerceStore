const router = require("express").Router();
const { response } = require("express");
const userModel = require("../../models/users");

router.post("/", (req, res) => {
  userModel.create(req.body);
  res.json({ message: "User account created" });
  console.log(req.body);
});

router.get("/", async (req, res) => {
  let users = await userModel.findAll();

  res.json(users);
});

router.post("/login", async (req, res) => {
  try {
    const userData = await userModel.findOne({ where: { username: req.body.username } });

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

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
    
  }
});

router.get("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      
    });
  } 
  res.redirect("/")
});

module.exports = router;
