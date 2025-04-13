document.addEventListener("DOMContentLoaded", () => {
  const emojiDisplay = document.getElementById("emoji");
  const optionsContainer = document.getElementById("options");
  const scoreDisplay = document.getElementById("score");
  const guessForm = document.getElementById("guess-form");
  const feedbackDiv = document.getElementById("feedback");
  const resetBtn = document.getElementById("reset-btn");

  let currentQuestion = {};

  // Load new question
  function loadQuestion() {
    fetch("/game")
      .then((response) => response.json())
      .then((data) => {
        currentQuestion = data;
        emojiDisplay.textContent = data.emoji;
        scoreDisplay.textContent = data.score;

        // Clear previous options
        optionsContainer.innerHTML = "";

        // Add new options
        data.options.forEach((option) => {
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

        // Clear feedback
        feedbackDiv.textContent = "";
        feedbackDiv.className = "feedback";
      });
  }

  // Handle form submission
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

    fetch("/guess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ guess }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update score
        scoreDisplay.textContent = data.score;

        // Show feedback
        if (data.correct) {
          feedbackDiv.textContent = "Correct! 🎉";
          feedbackDiv.className = "feedback correct";
        } else {
          feedbackDiv.textContent = `Incorrect! The correct answer was ${data.correctAnswer}.`;
          feedbackDiv.className = "feedback incorrect";
        }

        // Update current question with the next one
        currentQuestion = data.nextQuestion;

        // Load new question after a short delay
        setTimeout(() => {
          emojiDisplay.textContent = data.nextQuestion.emoji;
          scoreDisplay.textContent = data.nextQuestion.score;

          // Clear previous options
          optionsContainer.innerHTML = "";

          // Add new options
          data.nextQuestion.options.forEach((option) => {
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

          // Clear feedback after question changes
          setTimeout(() => {
            feedbackDiv.textContent = "";
            feedbackDiv.className = "feedback";
          }, 1000);
        }, 1500);
      });
  });

  // Reset game
  resetBtn.addEventListener("click", () => {
    fetch("/reset")
      .then((response) => response.json())
      .then((data) => {
        currentQuestion = data;
        emojiDisplay.textContent = data.emoji;
        scoreDisplay.textContent = data.score;
        optionsContainer.innerHTML = "";

        data.options.forEach((option) => {
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
        feedbackDiv.className = "feedback";
      });
  });

  // Load first question
  loadQuestion();
});
