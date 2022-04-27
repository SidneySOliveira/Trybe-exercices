/*
// 02 - Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipolet comida = 'gato';
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const arrayPets = [comida, animal, bebida]
const [animalCorrect, bebidaCorrect, comidaCorrect] = arrayPets
console.log(animalCorrect, bebidaCorrect, comidaCorrect);


// 3 - Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

let pares = [numerosPares[3], numerosPares[4], numerosPares[5], numerosPares[6] ]

console.log(pares);

const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
*/
const getPosition = (latitude, longitude) => {
    return {
    latitude,
    longitude};
    };
  
  console.log(getPosition(-19.8157, -43.9542));