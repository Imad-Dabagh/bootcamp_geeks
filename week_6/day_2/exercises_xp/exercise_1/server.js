const express = require("express");
const app = express();
const routes = require("./server/routes/posts.routes.js");

app.use(express.json());
app.use("/posts", routes);

app.listen(3000, console.log("Server is listening on 3000"));