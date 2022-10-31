const { height, weight } = require('./inputs');

function bmi (height, weight) {
    if (weight == 0) {
        return new Error("Informar peso maior que ZERO!")
    }

    const bmi = (Math.round((height / (weight ** 2))*100)/100).toFixed(2);

    if (bmi < 18.5) { return `Abaixo do peso (magreza), BMI = ${bmi}`};
    if (bmi >= 18.5 && bmi < 25) { return `Peso normal, BMI = ${bmi}`};
    if (bmi >= 25.0 && bmi < 30) { return `Acima do peso (sobrepeso), BMI = ${bmi}`};
    if (bmi >= 30 && bmi < 35) { return `Obesidade grau I, BMI = ${bmi}`};
    if (bmi >= 35 && bmi < 40) { return `Obesidade grau II, BMI = ${bmi}`};
    if (bmi >= 40) { return `Obesidade graus III e IV', BMI = ${bmi}`};

}

try {
    console.log(bmi(+height, +weight));
} catch (e) {
    console.log("erro: %s", e.message);
}


