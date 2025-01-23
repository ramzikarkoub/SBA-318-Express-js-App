const express = require("express");
const router = express.Router();

const { users } = require("../utils/data");
const { parsId, generateNewId, errorHandler } = require("../utils/middleware");

router.get("/:id", parsId, (req, res) => {
  res.status(200).send(req.info);
});

// GET (All users and filtered by query parameters)
router.get("/", (req, res) => {
  let filteredUsers = [...users];

  if (req.query.isActive) {
    const isActive = req.query.isActive.toLowerCase() === "true";
    filteredUsers = filteredUsers.filter((user) => user.isActive === isActive);
  }

  if (req.query.minAge) {
    filteredUsers = filteredUsers.filter(
      (user) => user.age >= parseInt(req.query.minAge)
    );
  }

  if (req.query.name) {
    filteredUsers = filteredUsers.filter((user) =>
      user.name.toLowerCase().includes(req.query.name.toLowerCase())
    );
  }

  res.status(200).send(filteredUsers);
});

// POST
router.post("/", generateNewId, (req, res, next) => {
  const { newId } = req;
  const user = req.body;
  const newUser = { id: newId, ...user };
  users.push(newUser);
  if (!user.name || !user.email || !user.age || user.isActive === undefined) {
    const err = new Error("Missing fields");
    err.status = 400;
    return next(err);
  }
  res.status(200).send(users);
});

// PUT
router.put("/:id", parsId, (req, res) => {
  const { info } = req;
  const updatedUser = req.body;
  if (!info) {
    return res.status(404).send({ message: "User does not exist" });
  }
  Object.assign(info, updatedUser);
  res.status(200).send(users);
});

// DELETE
router.delete("/:id", parsId, (req, res) => {
  const { parsedId } = req;
  const userIndex = users.findIndex((user) => user.id === parsedId);
  if (userIndex === -1) {
    return res.status(404).send({ message: "User not found" });
  }
  users.splice(userIndex, 1);
  res.status(200).send({ message: "User deleted successfully" });
});

module.exports = router;
