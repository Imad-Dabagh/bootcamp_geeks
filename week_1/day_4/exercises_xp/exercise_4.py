class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born (self,**kwargs):
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
                print(f"{key} is {value} ") # i did this print in case we added more details rather than name, age, gender to the members
            
            if index < len(self.members) - 1:
                print("\nNext Member:")

family_1 = Family("Alaoui")


family_1.members.append({"name": "Amine", "age": 25, "gender": "Male"})
family_1.members.append({"name": "Ahmad", "age": 40, "gender": "Male"})
family_1.members.append({"name": "Salma", "age": 15, "gender": "Female"})

family_1.born(name="Mehdi", gender="Male")
print(family_1.is_18("Amine"))
print(family_1.is_18("Salma")) 
print(family_1.is_18("Ali"))

print("\nFamiy Presentation")
family_1.family_presentation()
