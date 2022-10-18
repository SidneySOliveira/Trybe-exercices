-- 01. Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.
SELECT Name, Price 
FROM Pieces 
INNER JOIN Provides on Pieces.Code = Provides.Piece;
-- 02. Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
SELECT * 
FROM ((Pieces 
INNER JOIN Provides on Pieces.Code = Provides.Piece)
INNER JOIN Providers on Providers.Code = Provides.Provider)
-- 03. Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços,
--     começando a lista a partir do 3º item.
SELECT PiecesProviders.Providers.Name, PiecesProviders.Provides.Price
FROM ((Pieces 
INNER JOIN Provides on Pieces.Code = Provides.Piece)
INNER JOIN Providers on Providers.Code = Provides.Provider)
ORDER BY PiecesProviders.Provides.Price DESC
LIMIT 4 OFFSET 3
-- 04. Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL. 
--     Ordene o resultado pelos preços das peças de forma decrescente.
SELECT PiecesProviders.Providers.Name, PiecesProviders.Provides.Price
FROM ((Pieces 
INNER JOIN Provides on Pieces.Code = Provides.Piece)
INNER JOIN Providers on Providers.Code = Provides.Provider)
WHERE PiecesProviders.Provides.provider LIKE 'HAL'
ORDER BY PiecesProviders.Provides.Price DESC
-- 05. Escreva uma query para exibir por quantas empresas a peça 1 é provida.
SELECT PiecesProviders.Providers.Name, PiecesProviders.Provides.Price
FROM ((Pieces 
INNER JOIN Provides on Pieces.Code = Provides.Piece)
INNER JOIN Providers on Providers.Code = Provides.Provider)
WHERE PiecesProviders.Provides.provider LIKE 'HAL'
ORDER BY PiecesProviders.Provides.Pric