// 1. Faça um algoritmo que calcule a soma de 50 a 100 usando a estrutura “for” e retorne no formato:
// A soma de 50 a 100 é: X.
console.log("Exercício 01");
let soma = 0
for (let i=50; i<=100; i+=1){
    soma += i
}
console.log("Soma de 50 a 100 é ", soma);
// 2. Crie um algoritmo que conte quantos números do intervalo entre 1 e 125 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta a sua escolha.
console.log(" ");
console.log("Exercício 02");
let divisiveis = 0

for (let i=1; i<=125; i+=1){
    if (i%3 === 0){
        divisiveis += 1
    }
}
if (divisiveis === 50){
    console.log("É IGUAL A 50")
} else {
    console.log("São divisiveis por 3 ", divisiveis)
}

// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.
console.log(" ");
console.log("Exercício 03");
let jogador01 = Math.floor(Math.random()*3);
let jogador02 = Math.floor(Math.random()*3);

if (jogador01 === 1){ jogador01 = "Pedra"}
else if (jogador01 ===2){ jogador01 = "Papel"}
else {jogador01 = "Tesoura"}
if (jogador02 === 1){ jogador02 = "Pedra"}
else if (jogador02 ===2){ jogador02 = "Papel"}
else {jogador02 = "Tesoura"}
console.log("Jogador 01: ", jogador01);
console.log("Jogador 02: ", jogador02);

if(jogador01 === jogador02){
    "Empate"
} else if (jogador01 === "Pedra" && jogador02 === "Tesoura") {
    console.log("Jogador 01 Venceu!")
}
else if (jogador01 === "Tesoura" && jogador02 === "Papel") {
    console.log("Jogador 01 Venceu!")
}
else if (jogador01 === "Papel" && jogador02 === "Pedra") {
    console.log("Jogador 01 Venceu!")
}
else {console.log("Jogador 02 Venceu!")}

// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.
console.log(" ");
console.log("Exercício 04");

let idade = Math.floor(Math.random()*130);
console.log("Idade: ", idade);

if (idade < 18){
    console.log("A pessoa é MENOR de idade!")
} else {
    console.log("A pessoa é MAIOR de idade")
}

// 5. Crie um algoritmo que recebe a idade de Marcella, Carlos e Camila e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.
console.log(" ");
console.log("Exercício 05");

let Marcella = Math.floor(Math.random()*130);
let Carlos = Math.floor(Math.random()*130);
let Camila = Math.floor(Math.random()*130);
let menorIdade = 1000;
let idades = [Marcella, Carlos, Camila];
let nomes = ["Marcella", "Carlos", "Camila"];

for (let i=0; i<idades.length; i+=1){
    if (menorIdade > idades[i]) {
        menorIdade = idades[i];
        x = i;
    }
}
console.log(nomes);
console.log(idades);
console.log(nomes[x], " é a pessoa mais nova com ", menorIdade, "anos");
