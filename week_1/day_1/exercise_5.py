# ------ Exercise 5 : Favorite Numbers
# 1
my_fav_numbers = {20, 25, 50, 70}
# 2
my_fav_numbers.add(90)
my_fav_numbers.add(10)
print(my_fav_numbers)
# 3
my_fav_numbers.remove(90)
print(my_fav_numbers)

# 4
friend_fav_numbers = {3, 42, 40, 60}

# 5
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)
