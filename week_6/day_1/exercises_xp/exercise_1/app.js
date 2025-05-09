const express = require("express");
const app = express();
const routes = require("./routes/index.js");

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

app.use(express.json());

app.use("/api", routes);