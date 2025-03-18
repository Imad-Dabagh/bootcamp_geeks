-- Q1
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
--> Answer: 0 (Unknown)


-- Q2
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
--> Answer: 2
-- we have 3 ids 5 - 6 - 7 in FirstTab, we excluded 5 so remains 2


-- Q3
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
--> Answer: 2
-- We excluded (5 and null) in the Subquery using NOT IN, so 6 and 7 remain.
-- I run the code and got 0, because NOT IN fails with NULL in the subquery.


-- Q4
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
--> Answer: 2
-- We excluded (5) in the Subquery, so 6 and 7 remain.
