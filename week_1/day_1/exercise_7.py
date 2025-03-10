basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# Remove Banana from the list.
basket.remove("Banana")
print(basket)

# Remove Blueberries from the list.
basket.remove("Blueberries")
print(basket)

# Add Kiwi to the end of the list.
basket.append('Kiwi')
print(basket)

# Add Apples to the beginning of the list.
basket.insert(0,"Apples")
print(basket)

# Count how many apples are in the basket.
applesNumber = basket.count("Apples")
print(f"The number of Apples in the basket is {applesNumber}")

# Empty the basket.
basket.clear()

# Print(basket)
print(basket)
