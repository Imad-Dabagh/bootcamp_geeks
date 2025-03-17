-------> 1. Count how many actors are in the table.
SELECT COUNT(*) FROM actors;

-------> 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
insert into actors (first_name, last_name, birthdate, number_oscars) values ('Imad','','',8);

-- ERROR:  invalid input syntax for type date: ""
-- LINE 5: ...last_name, birthdate, number_oscars) values ('Imad','','',8)
