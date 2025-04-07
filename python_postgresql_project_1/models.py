from connection import DbConnection

class Books:
    def __init__(self, book_id, title, available):
        self.book_id = book_id
        self.title = title
        self.available = available
        self.db = DbConnection()

    def add_book(self):
        connection = self.db.connect()
        cursor = connection.cursor()
        cursor.execute(
            "INSERT INTO books (title) VALUES (%s)", (self.title,))
        connection.commit()
        cursor.close()
        connection.close()

    def list_books(self):
        connection = self.db.connect()
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM books")
        all_books = cursor.fetchall()
        cursor.close()
        connection.close()
        return all_books
    
    # def is_available(self, title):
    #     connection = self.db.connect()
    #     cursor = connection.cursor()
    #     cursor.execute(
    #         "SELECT * FROM books WHERE title ILIKE %s AND available = TRUE", ('%' + title + '%',))
    #     available = cursor.fetchall()
    #     cursor.close()
    #     connection.close()

    #     return available

    def is_available(self, book_id):
        connection = self.db.connect()
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM books WHERE book_id = %s", (book_id,))
        book = cursor.fetchone()

        return book

    def delete_book(self, book_id):
        connection = self.db.connect()
        cursor = connection.cursor()
        cursor.execute(
            "DELETE FROM books WHERE book_id = %s", (book_id,))
        connection.commit()
        cursor.close()
        connection.close()

class Members:
    def __init__(self, member_id, name):
        self.member_id = member_id
        self.name = name
        self.db = DbConnection()
    
    def add_member(self):
        connection = self.db.connect()
        cursor = connection.cursor()

        cursor.execute("INSERT INTO members (name) VALUES (%s)", (self.name,))

        connection.commit()
        cursor.close()
        connection.close()

    def list_members(self):
        connection = self.db.connect()
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM members")
        all_members = cursor.fetchall()

        cursor.close()
        connection.close()

        return all_members

    def delete_member(self, member_id):
        connection = self.db.connect()
        cursor = connection.cursor()

        cursor.execute(
            "DELETE FROM members WHERE member_id = %s", (member_id,))

        connection.commit()
        cursor.close()
        connection.close()

class Manager:
    
    def __init__(self):
        self.books = Books(None, None, None)
        self.db = DbConnection()

    def borrow_book(self, book_id, member_id):
        connection = self.db.connect()
        cursor = connection.cursor()

        book = self.books.is_available(book_id)

        if book and book[2]:

            cursor.execute("SELECT * FROM members WHERE member_id = %s", (member_id,))
            member = cursor.fetchone()

            if member:
                # Update the books table to be unavailable
                cursor.execute("UPDATE books SET available = FALSE WHERE book_id = %s", (book_id,))

                # Insert data into borrowed books table
                cursor.execute("INSERT INTO borrowed_books (book_id, member_id) VALUES (%s , %s)",(book_id, member_id))
                connection.commit()

                print(f"The book id {book_id} is borrowed by the member id {member_id}")
                
                cursor.close()
                connection.close()

            else: print(f"Member does not exist")
        
        else: print(f"Book is not available")

    def show_borrowed_books(self):
        connection = self.db.connect()
        cursor = connection.cursor()

        cursor.execute(""" 
        SELECT b.book_id, b.title, b.available, m.member_id, m.name, bbk.bood_id, bbk.member_id, bbk.borrow_date
        FROM borrowed_books bbk
        INNER JOIN books b ON b.book_id = bbk.book_id
        INNER JOIN members m ON m.member_id = bbk.member_id
         """)
        
        borrowed_books = cursor.fetchall()

        return borrowed_books

        
