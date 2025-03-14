from game import Game


def get_user_menu_choice():

    user_menu_choice = input("(p): Play new game\n(x): Show scors and exit\n: ").lower()
    
    if user_menu_choice in ["p", "x"]:
        return user_menu_choice
    else:
        print("Invalid choice, Please choose one of those: p | x ")


def print_results(results):
    print("\nGame Results:")
    print(f"You won {results['win']} times \nYou lost {results['loss']} times \nYou drew {results['draw']} times ")
    
    print("Thank you for playing!")


def main():
    game_1 = Game()
    while True:
        if get_user_menu_choice() == "x":
            print_results(game_1.results_history)
            break
        else:
            game_1.play()


main()