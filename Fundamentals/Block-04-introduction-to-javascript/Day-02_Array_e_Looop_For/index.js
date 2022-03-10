let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let maiorValor = numbers[0];
let menorValor = 1000000
let quantidadesImpares = 0;

for (let i=0; i<numbers.length; i += 1) {
    sum += numbers[i];
    mediaValores = sum/(numbers.length+1);
    if (numbers[i]>= maiorValor) {
        maiorValor = numbers[i]; }
    if (numbers[i]%2 != 0) {
        quantidadesImpares += 1
    }
    if (quantidadesImpares === 0) {
        quantidadesImpares = "0";
    }
    if (menorValor > numbers[i]){
        menorValor = numbers[i];
    }
}
if (mediaValores>20) {
    maior = "Valor maior que 20";
} else {
    maior = "Valor menor ou igual a 20";
}


console.log("03 - Média dos valores = " + mediaValores);
console.log("04 - É maior que 20?" + maior);
console.log("05 - Maior valor: " + maiorValor);
console.log("06 - Quantidade de valores ímpares: ", quantidadesImpares);
console.log("07 - Menor valor: ", menorValor);

let array25 = [];
let array25p2 = [];
for (let i=1; i<=25; i += 1) {
    array25.push(i);
    array25p2.push(i/2)
}
console.log("08 - Array de 1 até 25: ", array25);
console.log("08 - Array de 1 até 25 dividido por 2: ", array25p2);