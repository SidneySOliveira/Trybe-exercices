const readline = require('readline-sync');

const number1 = readline.question('Qual o 1º numero? ');
const number2 = readline.questionInt('Qual o 2º numero? ');

module.exports = { number1, number2 };