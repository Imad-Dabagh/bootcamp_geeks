word = input("Please give a word: ")
letter_indexes = {}

for index in range(len(word)):
    letter = word[index]
    if letter in letter_indexes:
        letter_indexes[letter].append(index)
    else:
        letter_indexes[letter] = [index]

print(letter_indexes)
