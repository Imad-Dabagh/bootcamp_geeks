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


def ask_questions():
    correct = 0
    incorrect = 0
    wrong_answers = []

    for item in data:
        answer = input(item["question"] + " ")

        if answer.strip().lower() == item["answer"].lower():
            correct += 1
        else:
            incorrect += 1
            wrong_answers.append(item["question"])

    show_results(correct, incorrect, wrong_answers)


def show_results(correct, incorrect, wrong_answers):
    print(
        f"\nYou got {correct} correct answers and {incorrect} incorrect answers.")

    if incorrect > 0:
        print("\nThe questions you answered wrong:")
        for question in wrong_answers:
            print(question)

ask_questions()
