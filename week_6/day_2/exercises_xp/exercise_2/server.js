const express = require("express");
const app = express();
const routes = require("./server/routes/books.routes.js");

app.use(express.json());

app.listen(5000, console.log("Server is listening on Port 5000"));

app.use("/api/books", routes);
