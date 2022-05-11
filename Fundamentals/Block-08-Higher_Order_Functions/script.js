/*
const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.log);

  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(3, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  });

  const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator);

  // --- Estruturando uma HOF 
  // 1 - Crie uma função que retorne a string 'Acordando!!' ;
  // 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
  // 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
  // 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.

  const primeiro = () => 'Acordadndo!';
  const segundo = () => "Bora tomar café!!";
  const terceiro = () => 'Partiu dormir!!!';
  
  const doingThings = (wakeUp) => console.log(wakeUp())

  doingThings(primeiro)
  

// ---Exercicios
// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } 
//    representando uma nova pessoa contratada.Passe sua função como parâmetro da HOF newEmployees 
//    para criar cada pessoa contratada em seu respectivo id.A sua função deve receber como parâmetro 
//    o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato 
//    nome_da_pessoa @trybe.com.

const newEmployees = (nome1, nome2, nome3) => {
  const employees = {
    id1: pessoaContratada(`${nome1}`), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: pessoaContratada(`${nome2}`), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: pessoaContratada(`${nome3}`), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(Object.keys(newEmployees()).length)

const pessoaContratada = (nomeFuncionario) => {
  const funcionario = {
    nomeCompleto: `${nomeFuncionario}`,
    email: `${nomeFuncionario.replace(/ /g, '_')}@trybe.com`,
  };
  return funcionario
};

console.log(newEmployees('Pedro Guerra', 'Luiza Drumond', 'Carla Paiva'));


// ---Exercicios
//    2 - Desenvolva uma HOF que retorna o resultado de um sorteio. 
//    Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado
//    e uma função que checa se o número apostado é igual ao número sorteado. 
//    O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const resultado = (numSorteado, numApostado) => {
  const resultado = (numSorteado === numApostado) ? `Parabéns você ganhou! Num. Sorteado: ${numSorteado} => Num. Apostado: ${numApostado}` : `Tente Novamente! Num. Sorteado: ${numSorteado} => Num. Apostado: ${numApostado}`;
  return resultado;
}

const numSorteado = () => Math.floor(Math.random() * 5 + 1);

console.log(resultado(numSorteado(), 3))
*/

// ---Exercicios
//        3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas 
//    (Gabarito), o segundo será um array de respostas a serem verificadas 
//    (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão 
//    corretas e faz a contagem da pontuação final recebida pela pessoa estudante. 
//    Ao final a HOF deve retornar o total da contagem de respostas certas.
//        Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, 
//    e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correcao = (RIGHT_ANS, STUDENT_ANS) => {
  if (STUDENT_ANS === 'N.A') { return 0}
  if (RIGHT_ANS === STUDENT_ANS) { return 1}
  else {return -0.5}
}

const contagem = (RIGHT, STUDENT, correcao) => {
  let resultadoFinal = 0
  for (let i = 0; i < RIGHT.length; i += 1) {
    let resultadoParcial = correcao (RIGHT[`${i}`], STUDENT[`${i}`])
    resultadoFinal += resultadoParcial
  }
  return resultadoFinal
}

console.log(contagem(RIGHT_ANSWERS, STUDENT_ANSWERS, correcao))