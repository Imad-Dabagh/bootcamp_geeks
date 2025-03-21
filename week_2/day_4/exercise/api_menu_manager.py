from fastapi import FastAPI, HTTPException
from menu_item import MenuItem
from menu_manager import MenuManager
from pydantic import BaseModel

app = FastAPI()

class MenuItemRequest(BaseModel):
    item_name: str
    item_price: int

@app.post("/menu/add")
def add_item(item: MenuItemRequest):
    new_item = MenuItem(item.item_name, item.item_price)
    new_item.save()
    return {"message": f"{item.item_name} added successfully!"}

@app.delete("/menu/delete/{item_name}")
def delete_item(item_name: str):
    item = MenuItem(item_name, 0)
    item.delete()
    return {"message": f"{item_name} deleted successfully!"}

@app.put("/menu/update")
def update_item(item_name: str, new_name: str, new_price: int):
    item = MenuItem(item_name, 0)
    item.update(new_name, new_price)
    return {"message": f"{item_name} updated to Name: {new_name}, Price: {new_price}"}

@app.get("/menu/items")
def get_all_items():
    items = MenuManager.all_items()
    return {"menu": items}

@app.get("/menu/item/{item_name}")
def get_item_by_name(item_name: str):
    item = MenuManager.get_by_name(item_name)
    if item:
        return {"item": item}
    raise HTTPException(status_code=404, detail="Item not found")