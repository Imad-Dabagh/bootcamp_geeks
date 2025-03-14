import random
# from exercise_2 import Dog  
    # I commented this import because it reuins the output
    # So i defined the class Dog here BUT without instances

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        dog_speed = self.weight / (self.age * 10)
        return dog_speed

    def fight(self, other_dog):
        first_dog_power = self.run_speed() * self.weight
        other_dog_power = other_dog.run_speed() * other_dog.weight

        if first_dog_power > other_dog_power:
            return f"{self.name} wins the fight"
        elif other_dog_power > first_dog_power:
            return f"{other_dog.name} wins the fight"
        else:
            return "Both dogs are equal"

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        message = ", ".join(args) + " all play together"
        print(message)

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet.")


dog1 = PetDog("Rex", 3, 15)
dog2 = PetDog("Malinwa", 5, 20)
dog3 = PetDog("Jaki", 2, 10)

dog1.train()

dog1.play("Rex", "Malinwa", "Jaki")

dog1.do_a_trick()
dog2.do_a_trick()
