const { number1, number2 } = require("./moduleNumbers");

function dividirNumeros(num1, num2) {
    const promise = new Promise((resolve, reject) => {
        if (num2 == 0)
          reject(new Error("Não pode ser feito uma divisão por zero"));
        
        const resultado = num1 / num2;
        
        resolve(resultado)
    });

    return promise;
}

// dividirNumeros(+number1, +number2)
//     .then(result => console.log(`sucesso: ${result}`))
//     .catch(err => console.log(`erro: ${err.message}`));

const resultado = async () => {
    console.log( await dividirNumeros(+number1, +number2))
};

resultado().catch(err => console.log("erro: %s", err.message));