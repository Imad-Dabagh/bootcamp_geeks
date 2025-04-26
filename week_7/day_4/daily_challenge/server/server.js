const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello From Express" });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  const { message } = req.body;
  res.send(
    "I received your POST request. This is what you sent me: " + message
  );
});

app.listen(3000, console.log("Server is listening on 3000"));
