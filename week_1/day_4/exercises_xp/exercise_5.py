class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, **kwargs):
        kwargs["age"] = 0

        self.members.append(kwargs)

        print(f"Congratulations on the new born {kwargs['name']}!!")

    def is_18(self, member_name):
        for member in self.members:
            if member["name"] == member_name:
                return member["age"] > 18

        print(f"{member_name} is not a member of {self.last_name} family")

    def family_presentation(self):
        print(f"{self.last_name} family:")

        for index, member in enumerate(self.members):
            for key, value in member.items():
                # i did this print in case we added more details rather than name, age, gender to the members
                print(f"{key} is {value} ")

            if index < len(self.members) - 1:
                print("\nNext Member:")

# ==================== Exercise 5 Begins HERE ====================
class TheIncredibles(Family):
    def __init__(self, last_name):
        super().__init__(last_name)

    def use_power(self, member_name):
        for member in self.members:
            if member["name"] == member_name:
                if member["age"] >= 18:
                    print(f"{member['name']} can {member['power']}!")
                else:
                    raise Exception(
                        f"{member['name']} is not over 18 years old.")
                return
        else:
            print(f"{member_name} is not a member of the {self.last_name} family.")

    def incredible_presentation(self):
        print("*Here is our powerful family*")
        super().family_presentation()


family_2 = TheIncredibles("Incredibles")

family_2.members.append({'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False,
                         'power': 'fly', 'incredible_name': 'MikeFly'})

family_2.members.append({'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False,
                         'power': 'read minds', 'incredible_name': 'SuperWoman'})

family_2.use_power("Sarah")
family_2.use_power("Amine")

family_2.incredible_presentation()

family_2.born(name="Jack", gender="Male", power="Unknown Power", incredible_name="BabyJack")

family_2.incredible_presentation()