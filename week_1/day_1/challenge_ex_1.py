number = int(input("Please give a number "))

lenght = int(input("Please give the length "))

multiples = []

i = 1

while True:
    if i % number == 0:
        multiples.append(i)
    if len(multiples) == lenght:
        break
    i+=1

print(multiples)
