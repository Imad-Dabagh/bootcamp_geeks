class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        self.animals.append(new_animal)

    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        else:
            print(f"We don't have {animal_sold} in the Zoo")

    def sort_animals(self):
        self.animals.sort()
        grouped_animals = {} 

        for animal in self.animals:
            first_letter = animal[0]
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = [animal]
            else:
                grouped_animals[first_letter].append(animal)

        return grouped_animals
    
    def get_groups(self):
        grouped_animals = self.sort_animals()
        for letter, animals in grouped_animals.items():
            print(f"Group {letter}: {', '.join(animals)}")
        
# Creating the object
zoo_1 = Zoo("CasaZoo")

# filling the list
zoo_1.add_animal("Lion")
zoo_1.add_animal("Eagle")
zoo_1.add_animal("Bear")
zoo_1.add_animal("Lama")
zoo_1.add_animal("Owl")
zoo_1.add_animal("Boar")

# showing the list
zoo_1.get_animals()

# selling an animal
zoo_1.sell_animal("Owl")

# sorting the animals question 6
print(zoo_1.sort_animals())

# grouping the animals question 7
zoo_1.get_groups()


# Question 8: creating new object
new_york_zoo = Zoo("New York Zoo")
# --> Add animal method
animal_to_add = input("Which animal should we add to the zoo --> ")
new_york_zoo.add_animal(animal_to_add)

# --> Get animals list
new_york_zoo.get_animals()

# --> Sell animale and update the list
animal_to_sell = input("Which animal should we sell --> ")
new_york_zoo.sell_animal(animal_to_sell)

# --> Sort animals in dictionary
print(new_york_zoo.sort_animals())

# --> Sort animals in groups
new_york_zoo.get_groups()
