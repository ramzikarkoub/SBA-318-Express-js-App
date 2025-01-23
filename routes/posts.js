const express = require("express");
const router = express.Router();

const { posts } = require("../utils/data");
const { parsId, generateNewId, errorHandler } = require("../utils/middleware");
router.use(errorHandler);

router.get("/", (req, res) => {
  // console.log(posts);
  res.status(200).send(posts);
});

router.get("/:id", parsId, (req, res) => {
  res.status(200).send(req.post);
});

router.post("/", generateNewId, (req, res, next) => {
  const { newId } = req;
  // console.log(newId);
  const post = req.body;
  const newPost = { id: newId, ...post };
  // console.log(post);
  posts.push(newPost);
  if (!post.title || !post.content || !post.authorId || !post.date) {
    const err = new Error("Missing fields");
    err.status = 400;
    return next(err);
  }
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
  // console.log(post);
});

module.exports = router;
