const express = require("express");
const app = express();
const PORT = 8000;
app.use(express.json());

const productsRouter = require("./routes/products");

// app.use("/users", () => {
//   console.log("usersss");
// });
app.use("/products", productsRouter);
// app.use("/posts", () => {
//   console.log("posts");
// });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
