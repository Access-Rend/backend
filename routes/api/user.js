const express = require("express");
const router = express.Router();

const userList = [
  {
    username: "Snowsore",
    password: "123",
  },
  {
    username: "Rend",
    password: "123",
  },
];

router.get("/login", (req, res) => {
  if (
    userList.filter(
      (user) =>
        user.username == req.body.username && user.password == req.body.password
    ).length
  ) {
    req.session.username = req.body.username;
    res.redirect("/");
  } else {
    res.status(401).json({ msg: "Wrong login" });
  }
});

router.post("/register", (req, res) => {
  if (userList.filter((user) => user.username == req.body.username).length) {
    res.json({ msg: "User already exist" });
  } else {
    res.json({ msg: "Reg success" });
  }
});

module.exports = router;
