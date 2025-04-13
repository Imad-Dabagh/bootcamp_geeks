const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Emoji database
const emojis = [
  { emoji: "🐶", name: "dog" },
  { emoji: "🐱", name: "cat" },
  { emoji: "🐭", name: "mouse" },
  { emoji: "🐹", name: "hamster" },
  { emoji: "🐰", name: "rabbit" },
  { emoji: "🦊", name: "fox" },
  { emoji: "🐻", name: "bear" },
  { emoji: "🐼", name: "panda" },
  { emoji: "🦁", name: "lion" },
  { emoji: "🐮", name: "cow" },
  { emoji: "🐷", name: "pig" },
  { emoji: "🐸", name: "frog" },
  { emoji: "🐵", name: "monkey" },
  { emoji: "🐔", name: "chicken" },
  { emoji: "🐧", name: "penguin" },
  { emoji: "🦄", name: "unicorn" },
  { emoji: "🐙", name: "octopus" },
  { emoji: "🦀", name: "crab" },
  { emoji: "🐋", name: "whale" },
  { emoji: "🐍", name: "snake" },
];

// Game state
let score = 0;
let currentEmoji = null;
let options = [];

// Helper function to get random emoji and options
function getNewQuestion() {
  // Get random emoji
  const randomIndex = Math.floor(Math.random() * emojis.length);
  currentEmoji = emojis[randomIndex];

  // Get 3 incorrect options
  options = [];
  while (options.length < 3) {
    const randomOption = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (randomOption !== currentEmoji.name && !options.includes(randomOption)) {
      options.push(randomOption);
    }
  }

  // Add correct option and shuffle
  options.push(currentEmoji.name);
  options = options.sort(() => Math.random() - 0.5);

  return {
    emoji: currentEmoji.emoji,
    options: options,
    score: score,
  };
}

// Routes
app.get("/game", (req, res) => {
  res.json(getNewQuestion());
});

app.post("/guess", (req, res) => {
  const { guess } = req.body;
  const isCorrect = guess === currentEmoji.name;

  if (isCorrect) {
    score++;
  }

  res.json({
    correct: isCorrect,
    correctAnswer: currentEmoji.name,
    score: score,
    nextQuestion: getNewQuestion(),
  });
});

app.get("/reset", (req, res) => {
  score = 0;
  res.json(getNewQuestion());
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
