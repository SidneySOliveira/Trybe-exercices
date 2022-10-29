const { number1, number2 } = require('./moduleNumbers');

function dividirNumeros(num1, num2) {
    if (num2 == 0 ) throw new Error("Não pode ser feito uma divisão por zero");

    return num1/num2
}

try {
    const resultado = dividirNumeros( +number1, +number2);
    console.log(`resultado: ${resultado}`);
} catch (e) {
    console.log(e.message)
}