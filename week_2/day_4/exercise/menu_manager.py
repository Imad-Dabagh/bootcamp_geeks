from connection import DbConnection


# class MenuManager:

    # @classmethod
    # def get_by_name(cls, item_name):
    #     db = DbConnection()
    #     connection = db.connect()
    #     cursor = connection.cursor()

    #     cursor.execute(
    #         "SELECT * FROM Menu_Items WHERE item_name = %s", (item_name,))
    #     item = cursor.fetchone()

    #     cursor.close()
    #     connection.close()

    #     return item
    
    # @classmethod
    # def all_items(cls):
    #     db = DbConnection()
    #     connection = db.connect()
    #     cursor = connection.cursor()

    #     cursor.execute(
    #         "SELECT * FROM Menu_Items")
    #     items = cursor.fetchall()

    #     cursor.close()
    #     connection.close()

    #     return items

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

        cursor.execute("SELECT * FROM Menu_Items")
        items = cursor.fetchall()

        cursor.close()
        connection.close()

        return items

    # Get the price of a single item by name
    @classmethod
    def get_item_price(cls, item_name):
        
        item = cls.get_by_name(item_name)
        if item:
            return item[2]
        return None

    # Calculate the average price of all items
    @classmethod
    def get_average_price(cls):
        db = DbConnection()
        connection = db.connect()
        cursor = connection.cursor()

        cursor.execute("SELECT AVG(item_price) FROM Menu_Items")
        avg_price = cursor.fetchone()[0]

        cursor.close()
        connection.close()

        return avg_price


# ======== Testings ========

# item = MenuItem('Burger', 35)
# item.save()
# item.delete()
# item.update('Veggie Burger', 37)

# item2 = MenuItem('Pizza', 20)
# item2.save()
# item2 = MenuManager.get_by_name('Pizza')
# items = MenuManager.all_items()
