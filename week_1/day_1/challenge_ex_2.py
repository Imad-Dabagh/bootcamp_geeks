# Challenge 2: Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.

user_string = input("Please Enter a string: ")
new_string = ""

for i in range(len(user_string)):
    if i > 0 and user_string[i] == user_string[i - 1]:
        new_string += ""
    else:
        new_string += user_string[i]

print(new_string)

# "h-e-l-l-o"
# "0-1-2-3-4"
# length = 5

print(len(user_string))
