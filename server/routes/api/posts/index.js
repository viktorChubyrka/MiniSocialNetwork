const express = require("express");

const postsController = require("../../../controller/postsController");

const router = express.Router();

router.post("/create", async (req, res) => {
  let newPost = await postsController.createPost(req.body);
  res.send(newPost);
});

router.post("/comment", async (req, res) => {
  let post = await postsController.commentPost(req.body);
  res.send(post);
});

router.post("/like", async (req, res) => {
  let post = await postsController.likePost(req.body);
  res.send(post);
});

router.get("/all_posts", async (req, res) => {
  let posts = await postsController.getAllPosts(req.body);
  res.send(posts);
});

router.post("/user_posts", async (req, res) => {
  let posts = await postsController.getUserPosts(req.body);
  res.send(posts);
});

router.post("/frends_posts", async (req, res) => {
  let posts = await postsController.getFrendsPosts(req.body);
  res.send(posts);
});

module.exports = router;
