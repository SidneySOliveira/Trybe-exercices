const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correcao = (RIGHT_ANS, STUDENT_ANS) => {
  if (STUDENT_ANS === 'N.A') { return 0}
  if (RIGHT_ANS === STUDENT_ANS) { return 1}
  else {return -0.5}
}

const contagem = (RIGHT, STUDENT, correcao) => {
  for (let i = 0; i < RIGHT.length; i =+ 1) {
    let resultadoParcial = correcao (RIGHT[`${i}`], STUDENT[`${i}`])
    let resultadoFinal =+ resultadoParcial
  }
  return resultadoFinal
}

console.log(contagem(RIGHT_ANSWERS, STUDENT_ANSWERS, correcao))