const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

const routes = require("./server/routes/users.routes.js");
app.use("/", routes);

app.listen(3000, console.log("Server is listening on Port 3000"));
