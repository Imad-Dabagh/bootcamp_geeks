const express = require("express");

const router = express.Router();

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

let quiz = {
  currentQuestion: 0,
  score: 0,
};

router.get('/', (req,res) => {
    let currentQuestion = quiz.currentQuestion;
    if (currentQuestion < triviaQuestions.length) {
    res.send(triviaQuestions[currentQuestion].question);
    } else {
      res.send("The quiz is Over");
    }
});

router.post("/", (req, res) => {
    if (quiz.currentQuestion < triviaQuestions.length) {
      let userAnswer = req.body.answer.trim().toLowerCase();
      let currentQuestion = quiz.currentQuestion;
      let answer = triviaQuestions[currentQuestion].answer.trim().toLowerCase();
      if (answer === userAnswer) {
        quiz.currentQuestion++;
        quiz.score++;
        res.send("Correct!");
      } else {
        quiz.currentQuestion++;
        res.send("Wrong! the correct answer is " + answer);
      }
    } else {
      res.send("The quiz is Over");
    }
});

router.get("/score", (req, res) => {
    let userScore = quiz.score;
    res.send(`Your score is: ${userScore}`);
});

module.exports = router;