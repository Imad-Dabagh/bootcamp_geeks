from connection import DbConnection

class tasks:
    def __init__(self, task_id, task_title, created_at):
        self.task_id = task_id
        self.task_title = task_title
        self.created_at = created_at
        self.db = DbConnection()

    def add_task(self):
        connection = self.db.connect()
        cursor = connection.cursor()
        cursor.execute(
            "INSERT INTO tasks (task_title) VALUES (%s)", (self.task_title,))
        connection.commit()
        cursor.close()
        connection.close()

    def update_task_title(self, new_title, task_id):
        connection = self.db.connect()
        cursor = connection.cursor()
        cursor.execute(
            "UPDATE tasks SET task_title = %s WHERE task_id = %s", (new_title, task_id))
        connection.commit()
        cursor.close()
        connection.close()

    def update_task_status(self, new_title, task_id):
        connection = self.db.connect()
        cursor = connection.cursor()
        cursor.execute(
            "UPDATE tasks SET status = 'done' WHERE task_id = %s", (task_id,))
        connection.commit()
        cursor.close()
        connection.close()

    def delete_task(self, task_id):
        connection = self.db.connect()
        cursor = connection.cursor()
        cursor.execute(
            "DELETE FROM tasks WHERE task_id = %s", (task_id,))
        connection.commit()
        cursor.close()
        connection.close()

# =========== Not Completed
