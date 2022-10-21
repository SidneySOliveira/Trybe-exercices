SELECT UCASE('trybe');
--
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
--
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
--
SELECT LENGTH('Uma frase qualquer');
--
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
-- OU
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', -36, 10);
--
USE sakila;
SELECT
    film_id,
    title,
    IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS 'conheço o filme?'
FROM sakila.film;
--
SELECT
    title, 
    rating, 
    CASE
        WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos' 
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
    END AS 'público Alvo'
FROM sakila.film;
--
SELECT IF(16 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';
--
SELECT 220 DIV 12;
--
SELECT FLOOR(15 + (RAND() * 5));
--
SELECT ROUND(15.7515971, 5);
--
SELECT FLOOR(39.494);
--
SELECT CEIL(39.494);
--
SELECT DATEDIFF('2030-01-20', NOW());
-- OU
SELECT DATEDIFF('1989-04-24', CURRENT_DATE());
--
SELECT AVG(length) AS 'Média de Duração',
       MIN(length) AS 'Duração Mínima',
       MAX(length) AS 'Duração Máxima',
       SUM(length) AS 'Tempo de Exibição Total',
       COUNT(*) AS 'Filmes Registrados'
FROM sakila.film;
--
SELECT active, COUNT(*)
FROM sakila.customer
GROUP BY active;
--
SELECT district, COUNT(*)
FROM sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;
--
SELECT rating, AVG(length) duracao_media
FROM sakila.film
GROUP BY rating
HAVING duracao_media BETWEEN 115.0 AND 121.50
ORDER BY duracao_media DESC;
--
SELECT rating, SUM(replacement_cost) AS custo_de_substituicao
FROM sakila.film
GROUP BY rating
HAVING custo_de_substituicao  > 3950.50
ORDER BY custo_de_substituicao;

SELECT * FROM sakila.film;

