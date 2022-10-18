-- 01 - Vamos lá! Faça uma consulta que retorne todas as peças que começam com as letras GR.
SELECT * 
FROM Pecas
WHERE name LIKE 'GR%'
-- 02 - Agora, escreva uma query para retornar todos os fornecimentos em que a coluna peca possua 
--      o valor 2. Organize o resultado por ordem alfabética de fornecedor.
SELECT * 
FROM Fornecimentos
WHERE peca = 2
-- 03 - Em seguida, faça uma consulta para exibir as peças, preço e fornecedor de todos os fornecimentos
--      em que o código do fornecedor tenha a letra N.
SELECT * FROM Fornecimentos
WHERE Fornecedor LIKE '%N%'
-- 03 - Avante, falta pouco! Escreva uma query para exibir todas as informações dos fornecedores
--      que são empresas limitadas (LTDA). Ordene esses resultados em ordem alfabética decrescente.
SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA%'
-- 04 - Agora, faça uma consulta para exibir o número de empresas (fornecedores) que contém a letra
--      F no código.
SELECT COUNT(*) 
FROM Fornecedores
WHERE name LIKE '%F%'
-- 05 - Quase lá! Agora escreva uma query para exibir os fornecimentos onde as peças custam 
--      mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.
SELECT * 
FROM Fornecimentos
WHERE Preco > 15 AND Preco < 40
-- 06 - Ufa! Por fim, faça uma query para exibir o número de vendas feitas entre o dia 15/04/2018
--      e o dia 30/07/2019.
SELECT * 
FROM Vendas
WHERE order_date BETWEEN '2018-04-15' and '2019-07-30'
