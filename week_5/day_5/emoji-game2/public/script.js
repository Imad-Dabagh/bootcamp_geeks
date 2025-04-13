document.addEventListener("DOMContentLoaded", () => {
  const emojiDisplay = document.getElementById("emoji");
  const optionsContainer = document.getElementById("options");
  const scoreDisplay = document.getElementById("score");
  const guessForm = document.getElementById("guess-form");
  const feedbackDiv = document.getElementById("feedback");
  const resetBtn = document.getElementById("reset-btn");

  let score = 0;
  let currentEmoji = null;
  let options = [];

  const emojis = [
    { emoji: "😀", name: "Smile" },
    { emoji: "🐶", name: "Dog" },
    { emoji: "🌮", name: "Taco" },
    { emoji: "🐱", name: "cat" },
    { emoji: "🐭", name: "mouse" },
    { emoji: "🐰", name: "rabbit" },
    { emoji: "🦊", name: "fox" },
  ];

  function getNewQuestion() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    currentEmoji = emojis[randomIndex];

    options = [currentEmoji.name];
    while (options.length < 4) {
      const randomOption =
        emojis[Math.floor(Math.random() * emojis.length)].name;
      if (!options.includes(randomOption)) {
        options.push(randomOption);
      }
    }

    options.sort(() => Math.random() - 0.5);

    emojiDisplay.textContent = currentEmoji.emoji;
    scoreDisplay.textContent = score;

    optionsContainer.innerHTML = "";
    options.forEach((option) => {
      const optionDiv = document.createElement("div");
      optionDiv.className = "option";
      const input = document.createElement("input");
      input.type = "radio";
      input.id = option;
      input.name = "guess";
      input.value = option;
      const label = document.createElement("label");
      label.htmlFor = option;
      label.textContent = option;
      optionDiv.appendChild(input);
      optionDiv.appendChild(label);
      optionsContainer.appendChild(optionDiv);
    });

    feedbackDiv.textContent = "";
    // feedbackDiv.remove();
  }

  guessForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedOption = document.querySelector(
      'input[name="guess"]:checked'
    );

    if (!selectedOption) {
      feedbackDiv.textContent = "Please select an option!";
      feedbackDiv.className = "feedback incorrect";
      return;
    }

    const guess = selectedOption.value;
    const isCorrect = guess === currentEmoji.name;

    if (isCorrect) {
      score++;
      feedbackDiv.textContent = "Correct!";
      feedbackDiv.className = "feedback correct";
    } else {
      feedbackDiv.textContent = "Incorrect!";
      feedbackDiv.className = "feedback incorrect";
    }
    // add new questions after submiting the answer
    setTimeout(() => {
      getNewQuestion();
    }, 2000);
  });

  resetBtn.addEventListener("click", () => {
    score = 0;
    feedbackDiv.textContent = "";
    // feedbackDiv.remove();
    getNewQuestion();
  });

  getNewQuestion();
});
