USE Scientists
-- 01 - Escreva uma query para exibir todas as informações de todos os cientistas que possuam 
--      a letra e em seu nome.
SELECT * FROM Scientists
WHERE Name LIKE '%E%'
-- 02 - Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A.
--      Ordene o resultado em ordem alfabética.
SELECT * FROM Projects
ORDER BY Name
-- 03 - Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código
--      o número 3. Ordene o resultado em ordem alfabética.
SELECT * FROM Projects
WHERE Code LIKE '%3%'
-- 04 - Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3,
--      Ast3 ou Che1.
SELECT * 
FROM Scientists
INNER JOIN AssignedTo ON Scientists.SSN = AssignedTo.Scientist
WHERE AssignedTo.Project LIKE 'AeH3'
-- 05 - Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.
SELECT * 
FROM Scientists
INNER JOIN AssignedTo ON Scientists.SSN = AssignedTo.Scientist
INNER JOIN Projects ON AssignedTo.Project = Projects.Code
WHERE Projects.Hours > 500
-- 06 - Escreva uma query para exibir todas as informações de todos os projetos cujas horas 
--      sejam maiores que 250 e menores 800.
SELECT * 
FROM Scientists
INNER JOIN AssignedTo ON Scientists.SSN = AssignedTo.Scientist
INNER JOIN Projects ON AssignedTo.Project = Projects.Code
WHERE Projects.Hours > 250 and Projects.Hours < 800
-- 07 - Escreva uma query para exibir o nome e o código de todos os projetos cujo
--      nome NÃO inicie com a letre A .
SELECT Scientists.Name, Scientists.SSN
FROM Scientists
WHERE Name NOT LIKE 'A%'
-- 08 - Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H.
SELECT Name
FROM Projects
WHERE Code LIKE '%H%'
