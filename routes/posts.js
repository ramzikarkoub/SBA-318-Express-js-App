const express = require("express");
const router = express.Router();

const { posts } = require("../data");

router.get("/", () => {
  console.log("Postssss");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const parsedId = parseInt(id);
  const post = posts.find((post) => post.id === parsedId);
  console.log(post);
  if (!post) {
    return res.status(404).send({ message: "post does Not exist" });
  }
  return res.status(200).send(post);
});
router.post("/", (req, res) => {
  const post = req.body;
  const newPosts = posts.push(post);
  if (!req.user) return res.sendStatus(401);
  req.logout((err) => {
    if (err) return res.sendStatus(400);
    res.status(200).send(newPosts);
  });
});

module.exports = router;
