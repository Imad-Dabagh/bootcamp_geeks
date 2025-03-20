from connection import DbConnection
from menu_item import MenuItem


class MenuManager:

    @classmethod
    def get_by_name(cls, item_name):
        db = DbConnection()
        connection = db.connect()
        cursor = connection.cursor()

        cursor.execute(
            "SELECT * FROM Menu_Items WHERE item_name = %s", (item_name,))
        item = cursor.fetchone()

        cursor.close()
        connection.close()

        return item
    
    @classmethod
    def all_items(cls):
        db = DbConnection()
        connection = db.connect()
        cursor = connection.cursor()

        cursor.execute(
            "SELECT * FROM Menu_Items")
        items = cursor.fetchall()

        cursor.close()
        connection.close()

        return items
