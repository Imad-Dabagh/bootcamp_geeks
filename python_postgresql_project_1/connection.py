import psycopg2


class DbConnection:
    def __init__(self, dbname="Library1", user="postgres", password="geeks8", host="localhost"):
        self.dbname = dbname
        self.user = user
        self.password = password
        self.host = host

    def connect(self):
        try:
            connection = psycopg2.connect(
                dbname=self.dbname,
                user=self.user,
                password=self.password,
                host=self.host
            )
            return connection
        except psycopg2.OperationalError as e:
            print("Database connection failed:", e)
            exit()

    def create_tables(self):
        query = """
        CREATE TABLE IF NOT EXISTS books (
            book_id SERIAL PRIMARY KEY,
            title VARCHAR(100) NOT NULL,
            available BOOLEAN NOT NULL DEFAULT TRUE
        );

        CREATE TABLE IF NOT EXISTS members (
                    member_id SERIAL PRIMARY KEY,
                    name VARCHAR(100) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS borrowed_books (
                    borrow_id SERIAL PRIMARY KEY,
                    book_id INT NOT NULL,
                    member_id INT NOT NULL,
                    borrow_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    CONSTRAINT fk_book_id FOREIGN KEY (book_id) REFERENCES books(book_id) ON DELETE CASCADE,
                    CONSTRAINT fk_member_id FOREIGN KEY (member_id) REFERENCES members(member_id) ON DELETE CASCADE
        );
        """
        try:
            conn = self.connect()
            cursor = conn.cursor()
            cursor.execute(query)
            conn.commit()
            cursor.close()
            conn.close()
            print("The tables created successfully.")
        except Exception as e:
            print("Error creating table:", e)


if __name__ == "__main__":
    db = DbConnection()
    db.create_tables()
