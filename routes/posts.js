const express = require("express");
const router = express.Router();

const { posts } = require("../data");

router.get("/", () => {
  console.log("Postssss");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const parsedId = parseInt(id);
  // console.log(req.params);
  // console.log("posts", posts);
  const post = posts.find((post) => post.id === parsedId);
  console.log(post);
  if (!post) {
    return res.status(404).send({ message: "post does Not exist" });
  }
  return res.status(200).send(post);
});

module.exports = router;
