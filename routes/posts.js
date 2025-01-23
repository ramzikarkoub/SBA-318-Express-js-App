const express = require("express");
const router = express.Router();

const { posts } = require("../utils/data");
const { parsId, generateNewId } = require("../utils/middleware");

router.get("/", (req, res) => {
  console.log(posts);
  res.status(200).send(posts);
});

router.get("/:id", parsId, (req, res) => {
  res.status(200).send(req.post);
});

router.post("/", generateNewId, (req, res) => {
  const { newId } = req;
  const post = req.body;
  const newPost = { id: newId, ...post };
  console.log(post);
  posts.push(newPost);
  if (!post) return res.sendStatus(401);
  res.status(200).send(posts);
});

router.put("/:id", parsId, (req, res) => {
  const { post } = req;
  const updatedPost = req.body;
  if (!post) {
    return res.status(404).send({ message: "post does Not exist" });
  }
  Object.assign(post, updatedPost);
  res.status(200).send(posts);
  console.log(post);
});

module.exports = router;
