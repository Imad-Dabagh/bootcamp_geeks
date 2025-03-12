# 1 - 2
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
# 3
    def bark(self):
        print(self.name + " goes woof!")
# 4
    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")

# 5
davids_dog = Dog("Rex" , 50)

# 6
print(f"Davids dog is called {davids_dog.name} and his height is {davids_dog.height}")
davids_dog.bark()
davids_dog.jump()

# 7
sarahs_dog = Dog("Teacup", 20)

# 8
print(
    f"Sarahs dog is called {sarahs_dog.name} and his height is {sarahs_dog.height}")
sarahs_dog.bark()
sarahs_dog.jump()

# 9
if davids_dog.height > sarahs_dog.height:
    bigger_dog = davids_dog
else:
    bigger_dog = sarahs_dog

print(f"The Bigger dog is {bigger_dog.name}")