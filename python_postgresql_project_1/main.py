from models import Books, Members, Manager
from tabulate import tabulate

def main():

    while True:
        print("\nLibrary Management System")
        print("1. Add a Book")
        print("2. Show all the books")
        print("3. Delete a Book")
        print("4. Add a Member")
        print("5. Show all Members")
        print("6. Delete a Member")
        print("7. Borrow a book")
        print("8. Show all borrowed books")
        print("9. Close the menue")

        user_choice = int(input("Choose an option: "))

        if user_choice == 1:
            print("\n=== Adding a Book ===\n")
            title = input("Enter the title: ")
            book = Books(None, title, True)
            book.add_book()
            print(f"{title} book added successfuly")

        elif user_choice == 2:
            print("\n=== Showing all the books ===\n")

            book = Books(None, None, None)
            all_books = book.list_books()

            if all_books:
                print(tabulate(all_books, headers=["Book ID", "Title", "Available"], tablefmt="psql"))
            else:
                print("No books found!")

        elif user_choice == 3:
            print("\n=== Deleting a Book ===\n")
            book_id = input("Enter the id: ")

            book = Books(book_id, None, None)
            book.delete_book(book_id)

            print("Book deleted successfuly")

        elif user_choice == 4:
            print("\n === Adding a member ===\n")
            name = input("Enter the member name: ")
            member = Members(None, name)
            member.add_member()
            print(f"Member {name} added successfuly")

        elif user_choice == 5:
            print("\n=== Showing all the members ===\n")
            members = Members(None, None)
            all_members = members.list_members()
            
            if all_members:
                print(tabulate(all_members, headers=[
                      "Member ID", "Name"], tablefmt="psql"))
            else:
                print("No members found!")

        elif user_choice == 6:
            print("\n=== Deleting a Member ===\n")
            member_id = input("Enter the id: ")

            member = Members(member_id, None)
            member.delete_member(member_id)

            print("Member deleted successfuly")

        elif user_choice == 7:
            print("\n=== Borrowing a book ===\n")
            book_id = input("Enter the book Id: ")
            member_id = input("Enter the member Id: ")

            manager = Manager()
            manager.borrow_book(book_id, member_id)

        elif user_choice == 8:
            print("\n=== Showing all the brrowed books ===\n")

            manager = Manager()
            borrowed_books = manager.show_borrowed_books()

            if borrowed_books:
                print(tabulate(borrowed_books, headers=[
                    "Book ID", "Title", "Available", "Member ID", "Member Name", "Book ID", "Member ID", "Borrow Date"
                ], tablefmt="psql"))
            else:
                print("No records found!")

        elif user_choice == 9:
            print("\nQuitting the menu: Good Bye!!\n")
            break

        else:
            print("\nPlease Enter a valid choice from the list\n")


if __name__ == "__main__":
    main()

