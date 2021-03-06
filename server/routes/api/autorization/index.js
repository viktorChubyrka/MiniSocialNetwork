const express = require("express");

const userController = require("../../../controller/userController");

const router = express.Router();

router.post("/registration", async (req, res) => {
  let newUser = await userController.registration(req.body);
  res.send(newUser);
});

router.post("/login", async (req, res) => {
  let login = await userController.login(req.body);
  res.send(login);
});

router.get("/logOut", async (req, res) => {
  res.send({ status: "200" });
});

module.exports = router;