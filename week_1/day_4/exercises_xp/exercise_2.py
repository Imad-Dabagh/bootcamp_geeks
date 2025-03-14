# Create a class called Dog with the following attributes name, age, weight.
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"
    
    def run_speed(self):
        dog_speed = self.weight/(self.age * 10)
        return dog_speed

    def fight(self, other_dog):
 
        first_dog_power = self.run_speed() * self.weight
        other_dog_power = other_dog.run_speed() * other_dog.weight

        if first_dog_power > other_dog_power:
            return f"{self.name} wins the fight"
        elif other_dog_power > first_dog_power:
            return f"{other_dog.name} wins the fight"
        else:
            return f"Boths dogs are equal"
        

dog1 = Dog("Rex", 4, 30)
dog2 = Dog("Jaki", 5, 40)
dog3 = Dog("Malinwa", 2, 30)

print(dog1.bark)
print(dog1.run_speed)

print(dog2.bark)
print(dog2.run_speed)

print(dog3.bark)
print(dog3.run_speed)

print(dog1.fight(dog2))
print(dog1.fight(dog3))
print(dog2.fight(dog3))