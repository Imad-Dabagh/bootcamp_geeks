# Exercise 2 : Cinemax #2

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# How much does each family member have to pay ?
total_cost = 0

for name,age in family.items():
    if age < 3:
        print(f"{name} can watch for free")
    if 3 <= age <= 12:
        print(f"{name} should pay 10$")
        total_cost += 10
    if age > 12:
        print(f"{name} should pay 15$")
        total_cost += 15

# Print out the family’s total cost for the movies.
print(f"The total cost to pay is: {total_cost}")


# ----- Bonus -----
# Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

family_dictionary = {}
family_members = int(input("How many family member you have: "))

for members in range(0,family_members):
    name = input("Give the name: ")
    age = int(input("Give its age: "))
    print("---- Next member ----")
    family_dictionary[name] = age

total_cost_2 = 0

for name, age in family_dictionary.items():
    if age < 3:
        print(f"{name} can watch for free")
    elif 3 <= age <= 12:
        print(f"{name} should pay 10$")
        total_cost_2 += 10
    else:
        print(f"{name} should pay 15$")
        total_cost_2 += 15

print(f"The total cost to pay is: {total_cost_2}")

