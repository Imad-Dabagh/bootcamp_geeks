# Exercise 3: Zara

# Create a dictionary called brand...

brand = {
    "name": "Zara",
    "creation_date": "1975",
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# 2. Change the number of stores to 2
brand["number_stores"] = 2

# 3. Use the key [type_of_clothes] to print a sentence that explains who Zaras clients are.

clients = brand["type_of_clothes"]

sentence = "Zaras clients are "

for i in range(len(clients)):
    if i == 0:
        sentence += clients[i]
    else:
        sentence += ", " + clients[i]

print(sentence)

# 4. Add a key called country_creation with a value of Spain.
brand["country_creation"] = "Spain"

# 5. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
else:
    print("international_competitors is not in the dictionary")

# 6. Delete the information about the date of creation.
del brand["creation_date"]

# 7. Print the last international competitor.
print(brand["international_competitors"][-1])

# 8. Print the major clothes colors in the US.
print(brand["major_color"]["US"])

# 9. Print the amount of key value pairs (ie. length of the dictionary).
print(len(brand))

# 10. Print the keys of the dictionary.
print(brand.keys())

# 11. Create another dictionary called more_on_zara with the given details
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# 12. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
brand.update(more_on_zara)

# 13. Print the value of the key number_stores. What just happened?
print(brand["number_stores"])  

# The value changed from 2 to 10000
