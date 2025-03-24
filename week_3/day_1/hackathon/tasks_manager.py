from connection import DbConnection


class MenuManager:
    @classmethod
    def pending_tasks(cls):
        db = DbConnection()
        connection = db.connect()
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM tasks WHERE status = 'pending' ")
        pending_tasks = cursor.fetchall()

        cursor.close()
        connection.close()

        return pending_tasks
    
    @classmethod
    def done_tasks(cls):
        db = DbConnection()
        connection = db.connect()
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM tasks WHERE status = 'pending' ")
        done_tasks = cursor.fetchall()

        cursor.close()
        connection.close()

        return done_tasks
