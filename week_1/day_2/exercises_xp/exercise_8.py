data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


def star_wars_quiz():
    correct = 0
    incorrect = 0
    wrong_answers = []

    for item in data:
        answer = input(f"{item['question']} ")
        if answer.lower() == item["answer"].lower():
            correct += 1
        else:
            incorrect += 1
            wrong_answers.append({
                "question": item['question'],
                "user_answer": answer,
                "correct_answer": item['answer']
            })

    print(" ----- Results: ----- ")
    print(f"You got {correct} correct answers and {incorrect} incorrect answers.")

    print(" ----- Correction: ----- ")
    if wrong_answers:
        print("Here are the questions you answered wrong:\n")
        for wrong in wrong_answers:
            print(f"The Question: {wrong['question']}")
            print(f"Your answer: {wrong['user_answer']}")
            print(f"The Correct answer: {wrong['correct_answer']}\n")

    if incorrect > 3:
        print("You had more than 3 wrong answers. Play again!")

star_wars_quiz()
