------> 1. Get a list of all the languages, from the language table.
SELECT name AS languages FROM language;

------> 2. Get a list of all films joined with their languages – select the following details : film title, description, and language name.
SELECT title, description, language.name AS Language_Name
FROM film
JOIN language
ON film.language_id = language.language_id;

------> 3. Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
SELECT language.name AS Language_Name, title, description
FROM language
LEFT JOIN film
ON language.language_id = film.language_id;

------> 4. Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film(
	id SERIAL PRIMARY KEY,
	name VARCHAR (50) NOT NULL
)

INSERT INTO new_film (name) VALUES	('Wja3 Trab'), ('Kebbour'), ('Titanic');

------> 5. Create a new table called customer_review, which will contain film reviews that customers will make...
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT NOT NULL,
    language_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_film_id FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
    CONSTRAINT fk_language_id FOREIGN KEY (language_id) REFERENCES language(language_id)
);

------> 6. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
(1, 1, 'Good', 7, 'It was a good movie, i recommend'),
(2, 1, 'Nice', 8, 'The movie was good and funny');

------> 5. Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film WHERE id = 1;
-- The review has been deleted also because 'ON DELETE CASCADE' removes the related data in other tables with the same id's.
