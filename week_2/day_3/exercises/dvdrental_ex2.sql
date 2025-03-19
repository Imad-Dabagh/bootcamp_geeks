-- Exercise 2 : DVD Rental
------> 1. Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film SET language_id = (SELECT language_id FROM language WHERE name = 'French') WHERE film_id BETWEEN 7 AND 23;
UPDATE film SET language_id = (SELECT language_id FROM language WHERE name = 'German') WHERE film_id BETWEEN 56 AND 100;
-- I randomly updated too many film languages at once

------> 2. Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
select * from customer 
-- If we want to insert data in cutomer table we need to make sure that store_id and address_id exist in there tables (store and address)

------> 3. We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review;
-- Yes it's easy because we used 'ON DELETE CASCADE' so no need for extra checking

------> 4. Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT COUNT(*) FROM rental WHERE return_date IS NULL;


------> 5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT film.film_id, film.title, film.rental_rate
FROM film
INNER JOIN inventory
ON film.film_id = inventory.film_id
INNER JOIN rental
ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC LIMIT 30

------> 6. Your friend is at the store, and decides to rent a movie...
---> 6.1. The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT title, description, actor.first_name, actor.last_name
FROM film
INNER JOIN film_actor
ON film.film_id = film_actor.film_id
INNER JOIN actor
ON actor.actor_id = film_actor.actor_id
WHERE film.description ILIKE '%sumo wrestler%' 
AND actor.first_name = 'Penelope' AND actor.last_name = 'Monroe'

---> 6.2. A short documentary (less than 1 hour long), rated “R”
SELECT title, description, length, rating 
FROM film WHERE length < 60 and rating = 'R'
AND description ILIKE '%documentary%'

---> 6.3. A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, 
-- and he returned it between the 28th of July and the 1st of August, 2005.
SELECT film.title 
FROM rental
JOIN payment ON rental.rental_id = payment.rental_id
JOIN customer ON rental.customer_id = customer.customer_id
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE payment.amount > 4.00
AND customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';

---> 6.4. The 4th film : His friend Matthew Mahan watched this film, as well. 
-- It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT film.title, film.description, film.replacement_cost
FROM rental
JOIN customer ON rental.customer_id = customer.customer_id
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew' 
AND customer.last_name = 'Mahan'
AND (film.title LIKE '%boat%' OR film.description LIKE '%boat%') 
ORDER BY film.replacement_cost DESC;



------------- Testings --------------------------
SELECT * FROM language

SELECT * FROM customer
SELECT * FROM rental
SELECT * FROM inventory -- Film_id
SELECT * FROM film
SELECT * FROM payment -- customer_id | rental_id | amount

SELECT * FROM film