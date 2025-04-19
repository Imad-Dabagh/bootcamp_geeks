const express = require("express");
const app = express();
const routes = require("./routes/books.js");

app.use(express.json());

app.listen(3000, console.log("Server is listening on Port 3000"));

app.use("/books", routes);
