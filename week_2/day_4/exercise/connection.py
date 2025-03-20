import psycopg2


class DbConnection:
    def __init__(self, dbname="Restaurant", user="postgres", password="geeks8", host="localhost"):
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
