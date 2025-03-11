import random

# 1. Create a function called get_random_temp()
# 1.1 This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# 1.2 Test your function to make sure it generates expected results.

def get_random_temp():
    return random.randint(-10, 40)

print(get_random_temp())

# 2. Create a function called main().
# 2.1 Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# 2.2 Inform the user of the temperature in a friendly message

def main():
    temperature = get_random_temp()
    print(f"The temperature right now is {temperature} degrees Celsius.")

main()

# 3. Let’s add more functionality to the main() function.

def main_2():
    temperature = get_random_temp()

    if temperature < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 0 <= temperature < 16:
        print("Quite chilly! Don’t forget your coat")
    elif 16 <= temperature < 23:
        print("The weather is nice today")
    elif 24 <= temperature < 32:
        print("It's warm outside.")
    elif 32 <= temperature <= 40:
        print("It's very hot!")


# Question 4

# Change the get_random_temp() function
def get_random_temp_2(season):
    if season == "winter":
        return random.randint(-10, 16)
    elif season == "spring":
        return random.randint(16, 23)
    elif season == "summer":
        return random.randint(24, 32)
    elif season == "autumn":
        return random.randint(10, 23)

# Now let’s change the main() function
def main_3():
    season = input("Please give the season (winter, spring, summer, autumn): ")
    temperature = get_random_temp_2(season)
    print(f"The temperature right now is {temperature} degrees Celsius.")

main_3()

# Bonus 1: Give the temperature as a floating-point number instead of an integer.

def get_random_temp_3(season):
    if season == "winter":
        return round(random.uniform(-10, 16), 1) 
    elif season == "spring":
        return round(random.uniform(16, 23), 1)
    elif season == "summer":
        return round(random.uniform(24, 32), 1)
    elif season == "autumn":
        return round(random.uniform(10, 23), 1)

# Bonus 2: 


def main_4():
    month = int(input("Please enter the number of the month (1-12): "))

    if month in [12, 1, 2]:
        season = "winter"
    elif month in [3, 4, 5]:
        season = "spring"
    elif month in [6, 7, 8]:
        season = "summer"
    elif month in [9, 10, 11]:
        season = "autumn"
    else:
        print("Invalid month. Please enter a number between 1 and 12.")
        return

    temperature = get_random_temp_3(season)
    print(f"The temperature in {season} is {temperature}°C.")


main_4()

