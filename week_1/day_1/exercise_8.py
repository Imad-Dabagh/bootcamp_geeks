sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# Use a while loop to remove all occurrences of Pastrami sandwich from the list

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

#print(sandwich_orders)

# Create an empty list called finished_sandwiches
finished_sandwiches = []

# Remove each sandwich from 'sandwich_orders' and add them to 'finished_sandwiches'

while sandwich_orders:
    sandwiche = sandwich_orders.pop(0)
    finished_sandwiches.append(sandwiche)

print(finished_sandwiches)

# After all the sandwiches have been made, print a message listing each sandwich that was made

# The complex way
for sandwich in range(0, len(finished_sandwiches)):
    print(f"I made your {finished_sandwiches[sandwich]}")

# A simpler way
    # for sandwich in finished_sandwiches:
    #     print(f"I made your {sandwich}")
