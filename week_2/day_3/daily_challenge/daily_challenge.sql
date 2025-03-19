--=========== Daily challenge: Part I ===========--
-----> 1. Create 2 tables : Customer and Customer profile. They have a One to One relationship.

CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE CustomerProfile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INT UNIQUE NOT NULL,
    CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES Customer(id) ON DELETE CASCADE
);

-----> 2. Insert those customers
INSERT INTO Customer (first_name, last_name)
VALUES	('John','Doe'), 
		('Jerome','Lalu'), 
		('Lea','Rive');

-----> 3. Insert those customer profiles, use subqueries
INSERT INTO CustomerProfile (isLoggedIn, customer_id)  
VALUES (True, (SELECT id FROM Customer WHERE first_name = 'John'));

INSERT INTO CustomerProfile (customer_id)  
VALUES ((SELECT id FROM Customer WHERE first_name = 'Jerome'));

-----> 4. Use the relevant types of Joins to display:
---> The first_name of the LoggedIn customers
SELECT first_name
FROM customer
INNER JOIN CustomerProfile
ON customer.id = CustomerProfile.customer_id
WHERE isLoggedIn = True;

---> All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT first_name, CustomerProfile.isLoggedIn
FROM customer
LEFT JOIN CustomerProfile
ON customer.id = CustomerProfile.customer_id;

---> The number of customers that are not LoggedIn
SELECT count(*)
FROM customer
LEFT JOIN CustomerProfile
ON customer.id = CustomerProfile.customer_id
WHERE isLoggedIn = False;

--=========== Daily challenge: Part II ===========--

-----> 1. Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

-----> 2. Insert those books :
INSERT INTO Book (title, author)
VALUES	('Alice In Wonderland','Lewis Carroll'), 
		('Harry Potter','J.K Rowling'), 
		('To kill a mockingbird','Harper Lee');

-----> 3. Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. 
---- Make sure that the age is never bigger than 15 (Find an SQL method);
CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);
-----> 4. Insert those students:
INSERT INTO Student (name, age)
VALUES	('John', 12),
    	('Lera', 11),
	    ('Patrick', 10),
		('Bob', 14);

-----> 5. Create a table named Library, with the columns...
CREATE TABLE Library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student (student_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-----> 6. Add 4 records in the junction table, use subqueries.
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)  
VALUES ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
        (SELECT student_id FROM Student WHERE name = 'John'), 
        '2022-02-15');

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)  
VALUES ((SELECT book_id FROM Book WHERE title = 'To Kill a Mockingbird'), 
        (SELECT student_id FROM Student WHERE name = 'Bob'), 
        '2021-03-03');

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)  
VALUES ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
        (SELECT student_id FROM Student WHERE name = 'Lera'), 
        '2021-05-23');

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)  
VALUES ((SELECT book_id FROM Book WHERE title = 'Harry Potter'), 
        (SELECT student_id FROM Student WHERE name = 'Bob'), 
        '2021-08-12');

-----> 6. Display the data:
---> Select all the columns from the junction table (Library)
SELECT * FROM Library;

---> Select the name of the student and the title of the borrowed books
SELECT name, book.title
FROM Student
INNER JOIN Library
ON Student.student_id = Library.student_fk_id
INNER JOIN Book
ON Book.book_id = Library.book_fk_id;

---> Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG(age) as Average_age
FROM Student
INNER JOIN Library
ON Student.student_id = Library.student_fk_id
INNER JOIN Book
ON Book.book_id = Library.book_fk_id
WHERE Book.title = 'Alice In Wonderland';

---> Delete a student from the Student table, what happened in the junction table ?
DELETE FROM Student WHERE name = 'John';
-- Becuase we have used 'ON DELETE CASCADE' all the data related to John in the junction table will be deleted also.





---- Testings
SELECT * FROM Student

SELECT * FROM Library

SELECT * FROM Book

UPDATE Book SET title = 'To Kill a Mockingbird' WHERE book_id = 3