import psycopg2


class DbConnection:
    def __init__(self, dbname="ToDoList", user="postgres", password="geeks8", host="localhost"):
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

    def create_tasks_table(self):
        query = """
        CREATE TABLE IF NOT EXISTS tasks (
            task_id SERIAL PRIMARY KEY,
            task_title TEXT NOT NULL,
            status VARCHAR(20) DEFAULT 'pending',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        """
        try:
            conn = self.connect()
            cursor = conn.cursor()
            cursor.execute(query)
            conn.commit()
            cursor.close()
            conn.close()
            print("Table 'tasks' created successfully.")
        except Exception as e:
            print("Error creating table:", e)


if __name__ == "__main__":
    db = DbConnection()
    db.create_tasks_table()
