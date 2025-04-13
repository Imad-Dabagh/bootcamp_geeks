const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🐱", name: "Cat" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🍎", name: "Apple" },
  { emoji: "⚽", name: "Ball" },
  { emoji: "📚", name: "Books" },
];

function getRandomQuestion() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  const options = new Set();
  options.add(correct.name);

  while (options.size < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)];
    options.add(random.name);
  }

  return {
    emoji: correct.emoji,
    correctAnswer: correct.name,
    options: Array.from(options).sort(() => 0.5 - Math.random()), // shuffle
  };
}

module.exports = { getRandomQuestion };
