import random

class Game:

    def __init__(self):
        self.results_history = {"win": 0, "loss": 0, "draw": 0}

    def get_user_item(self):
        while True:
            user_item = input("Select (r)ock, (p)aper or (s)cissors: ").lower()
            if user_item in ["r", "p", "s"]:
                return user_item
            else:
                print("Invalid choice, Please choose one of those: R | P | S ")

    def get_computer_item(self):
        return random.choice(["r", "p", "s"])
    
    
    def get_game_result(self, user_item, computer_item):

        if user_item == computer_item:
            return "draw"
        elif user_item == "s" and computer_item == "p" or user_item == "p" and computer_item == "r" or user_item == "r" and computer_item == "s":
            return "win"
        else:
            return "loss"
        
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()

        result = self.get_game_result(user_item, computer_item)

        full_word = {"p":"paper","r":"rock","s":"scissors"}

        print(f"You selected {full_word[user_item]}. The computer selected {full_word[computer_item]}.")
        
        self.results_history[result] += 1

        if result == "draw":
            print("You Drew")
        elif result == "win":
            print("You Won")
        else:
            print("You Lost")
        return result

    
# game_1 = Game()
# game_1.play()