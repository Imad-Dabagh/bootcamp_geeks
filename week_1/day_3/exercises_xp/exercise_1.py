class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat_1 = Cat("Moch", 5)
cat_2 = Cat("Lani", 1)
cat_3 = Cat("Zizo", 4)


def oldest_cat(cat_1,cat_2,cat_3):
    oldest = cat_1

    if cat_2.age > oldest.age:
        oldest = cat_2
    if cat_3.age > oldest.age:
        oldest = cat_3
    
    return oldest

oldest = oldest_cat(cat_1 , cat_2 , cat_3)

print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old")
