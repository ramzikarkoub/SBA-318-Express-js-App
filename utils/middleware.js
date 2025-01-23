const { posts } = require("./data");

const parsId = (req, res, next) => {
  const id = req.params.id;
  const parsedId = parseInt(id);
  const post = posts.find((post) => post.id === parsedId);
  if (!post) {
    return res.status(404).send({ message: "Post not found" });
  }
  req.post = post;
  req.parsedId = parsedId;
  next();
};

const generateNewId = (req, res, next) => {
  req.newId = posts.length + 1;
  next();
};

module.exports = { parsId, generateNewId };
