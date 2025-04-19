const express = require("express");
const routes = require('./routes/quiz.js');
const app = express();

app.listen(3000, console.log("Server listening on port 3000"));

app.use(express.json())

app.use('/quiz', routes);