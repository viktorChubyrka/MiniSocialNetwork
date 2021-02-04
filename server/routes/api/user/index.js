const express = require("express");

const userController = require("../../../controller/userController");

const router = express.Router();

router.post("/add_friend", async (req, res) => {
  let message = await userController.addFriend(req.body);
  res.send(message);
});

router.post("/delete_friend", async (req, res) => {
  let message = await userController.deleteFriend(req.body);
  res.send(message);
});

router.post("/find_users", async (req, res) => {
  let message = await userController.findUsers(req.body);
  res.send(message);
});

router.post("/get_user_data", async (req, res) => {
  let message = await userController.findUsers(req.body);
  res.send(message);
});

module.exports = router;
