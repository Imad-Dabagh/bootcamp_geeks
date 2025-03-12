# 1 - The Farm class should be implemented with an __init__ method to store the name of the farm and the dictionary. It should also have methods add_animals and get_info

# 2 - Yes the Farm class needs an __init__ method. It should take 2 parameters: self and name.

# 3 - It needs two methods: add_animal to add animals and get_info to show the animals.

# 4 - The add_animal method allows adding an animal with an optional count. If no count is provided default 1

class Farm:
    def __init__(self,name):
        self.name = name
        self.animals = {}
    
    def add_animal(self, animal,number=1):
        if animal in self.animals:
            self.animals[animal] +=number
        else:
            self.animals[animal] = number

    def get_info(self):
        farm_info = f"{self.name}'s Farm \n\n"
        for animal, number in self.animals.items():
            farm_info += f"{animal} : {number} \n"
        farm_info += "\n    E-I-E-I-0!" 
        return farm_info
    
    def get_animal_types(self):
        return sorted(self.animals.keys())
    
    def get_short_info(self):

        pass


macdonald = Farm("McDonald")

macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(macdonald.get_info())

print(macdonald.get_animal_types())
