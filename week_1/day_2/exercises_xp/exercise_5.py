import random

def func_random(number_1):
    number_2 = random.randint(1, 100)

    if number_1 == number_2:
        print("Success!")
    else:
        print(f"Failed! Your number is {number_1}, my number is {number_2}")

func_random(20)
