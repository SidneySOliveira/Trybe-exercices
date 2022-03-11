// // Exercise 01 - Crie um algoritmo que retorne o fatorial de 10

// let number = 1;
// for (i=1; i<=10; i += 1){
//     number = number * i
// };
// console.log("Excercise 01 - O fatorial de 10 é ", number);


// //Exercise 02 - Desenvolva um algoritmo que é capaz de inverter uma palavra

// let word = "trybe";
// let newword = '';
// for (i=0; i<word.length;  i += 1){
//     a = word.length -1 - i
//     newword = newword.concat(word[a])
// };

// console.log("Excercise 02 - A palavra invertida é ", newword);


// // Exercise 03 - algoritmo que retorne a maior e menor palavra de uma array

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// menorPalavra = "1000000000000000000000000000000000000000000000000";
// maiorPalavra = ""
// for (i=0; i<array.length; i += 1){
//     if (menorPalavra.length > array[i].length) {
//         menorPalavra = array[i]
//     };
//     if (maiorPalavra.length < array[i].length) {
//         maiorPalavra = array[i]
//     }
// }

// console.log("Excercise 03 - A maior palavra é ", maiorPalavra, " e a menor é ", menorPalavra);

// Exercise 04 - Escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let limInferior = 1;
let limSuperior = 50;
let divisiveis = 0
let primos = [];
let maiorPrimo = "";

for (i=limInferior; i<=limSuperior; i +=1){
    let divisiveis = 0
    for (j=limInferior; j<=i; j+=1){
        if (i%j === 0) {
            divisiveis += 1
        }
    }
    if (divisiveis === 2){
        primos.push(i)
    }
};
console.log("O maior numero primo é", primos[primos.length-1]);
