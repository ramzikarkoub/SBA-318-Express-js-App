const express = require("express");
const router = express.Router();

const { posts } = require("../utils/data");
const { parsId, generateNewId, errorHandler } = require("../utils/middleware");
router.use(errorHandler);

router.get("/:id", parsId, (req, res) => {
  res.status(200).send(req.post);
});

// GET (All posts and filtered by query parameters)
router.get("/", (req, res) => {
  let filteredPosts = [...posts];

  if (req.query.authorId) {
    filteredPosts = filteredPosts.filter(
      (post) => post.authorId === parseInt(req.query.authorId)
    );
  }

  if (req.query.date) {
    filteredPosts = filteredPosts.filter(
      (post) => post.date === req.query.date
    );
  }

  if (req.query.title) {
    filteredPosts = filteredPosts.filter((post) =>
      post.title.toLowerCase().includes(req.query.title.toLowerCase())
    );
  }

  res.status(200).send(filteredPosts); // Send filtered posts
});

// POST
router.post("/", generateNewId, (req, res, next) => {
  const { newId } = req;
  const post = req.body;
  const newPost = { id: newId, ...post };
  posts.push(newPost);
  if (!post.title || !post.content || !post.authorId || !post.date) {
    const err = new Error("Missing fields");
    err.status = 400;
    return next(err);
  }
  res.status(200).send(posts);
});

// PUT
router.put("/:id", parsId, (req, res) => {
  const { post } = req;
  const updatedPost = req.body;
  if (!post) {
    return res.status(404).send({ message: "post does Not exist" });
  }
  Object.assign(post, updatedPost);
  res.status(200).send(posts);
});

// DELETE
router.delete("/:id", parsId, (req, res) => {
  const { parsedId } = req;
  const postIndex = posts.findIndex((post) => post.id === parsedId);
  if (postIndex === -1) {
    return res.status(404).send({ message: "Post not found" });
  }
  posts.splice(postIndex, 1);
  res.status(200).send({ message: "Post deleted successfully" });
});

module.exports = router;
