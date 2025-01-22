const express = require("express");
const app = express();
const PORT = 8000;
app.use(express.json());

const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");

app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
// app.use("/posts", () => {
//   console.log("posts");
// });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
