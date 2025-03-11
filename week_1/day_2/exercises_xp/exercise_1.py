# Exercise 1 : Convert lists into dictionaries

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
dictionary = {}

for key,value in zip(keys, values):
    dictionary[key]=value

print(dictionary)


print(type(dictionary))