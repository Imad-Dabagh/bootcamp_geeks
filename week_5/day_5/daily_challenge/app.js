const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// ➕ ADD THIS: redirect "/" to "/index.html"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Emoji game logic
const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🐱", name: "Cat" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🍎", name: "Apple" },
  { emoji: "⚽", name: "Ball" },
  { emoji: "📚", name: "Books" },
];

let score = 0;
let currentAnswer = null;

function getRandomQuestion() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];

  const options = [correct];
  while (options.length < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)];
    if (!options.find((e) => e.name === random.name)) {
      options.push(random);
    }
  }

  // Shuffle the options
  options.sort(() => Math.random() - 0.5);
  currentAnswer = correct.name;

  return { emoji: correct.emoji, options: options.map((e) => e.name) };
}

app.get("/question", (req, res) => {
  const question = getRandomQuestion();
  res.json({ ...question, score });
});

app.post("/guess", (req, res) => {
  const userGuess = req.body.guess;

  let message = "Wrong!";
  if (userGuess === currentAnswer) {
    score++;
    message = "Correct!";
  }

  const question = getRandomQuestion();

  res.json({
    message,
    score,
    emoji: question.emoji,
    options: question.options,
  });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
