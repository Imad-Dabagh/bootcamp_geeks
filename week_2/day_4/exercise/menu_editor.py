from menu_manager import MenuManager
from menu_item import MenuItem


def add_item_to_menu():
    item_to_add_name = input("\nGive the name of the item you want to add: ")
    item_to_add_price = int(input("Give the price of the item: "))

    item = MenuItem(item_to_add_name, item_to_add_price)
    item.save()

    print(f"\n{item_to_add_name} added successfully!\n")


def remove_item_from_menu():
    item_to_delete = input("\nGive the name of the item you want to delete: ")

    item = MenuItem(item_to_delete, 0)
    item.delete()

    print(f"\n{item_to_delete} deleted successfully!\n")


def update_item_from_menu():
    item_to_update_name = input("\nGive the name of the item you want to update: ")
    new_item_name = input("Give the new name: ")
    new_item_price = int(input("Give the new price: "))

    item = MenuItem(item_to_update_name, 0)
    item.update(new_item_name, new_item_price)

    print(f"\n{item_to_update_name} updated to Name: {new_item_name}, Price: {new_item_price}\n")



def show_restaurant_menu():
    items = MenuManager().all_items()

    if items:
        print("\n====== Restaurant Menu ======")
        for item in items:
            print(f"ID: {item[0]}, Name: {item[1]}, Price: {item[2]}")
    else:
        print("No item found")
    


def show_user_menu():

    while True:
        print("View an Item (V)")
        print("Add an Item (A)")
        print("Delete an Item (D)")
        print("Update an Item (U)")
        print("Show the Menu (S)")
        print("Exit the program (X)")

        user_input = input("Enter your choice: ").upper()

        # View an Item
        if user_input == 'V':
            name = input("Give the name of the item: ")
            item = MenuManager().get_by_name(name)

            if item:
                print(f"ID: {item[0]}, Name: {item[1]}, Price: {item[2]}")
            else:
                print("No item found====V")

        # Add an Item
        elif user_input == 'A':
            add_item_to_menu()

        # Delete an Item
        elif user_input == 'D':
            remove_item_from_menu()

        # Update an Item
        elif user_input == 'U':
            update_item_from_menu()

        # Show The Menu
        elif user_input == 'S':
            show_restaurant_menu()

        elif user_input == 'X':
            show_restaurant_menu()
            break
        
        else:
            print("\nPlease enter a valid choice from the menu")


show_user_menu()
