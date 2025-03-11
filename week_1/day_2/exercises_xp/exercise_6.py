def make_shirt(size = "L", message = "I love Python"):
    print(f"The size of the shirt is '{size}' and the text is '{message}'")

# Call the function, in order to make a large shirt with the default message
make_shirt()
# Make medium shirt with the default message
make_shirt("M")

# Make a shirt of any size with a different message.
make_shirt("XL", "Hello world")

# Bonus: Call the function using keyword arguments
make_shirt(message="My name is IMAD", size="S")
