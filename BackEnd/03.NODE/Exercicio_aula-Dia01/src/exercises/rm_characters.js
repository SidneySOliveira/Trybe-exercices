// C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const fs = require('fs').promises;
const readline = require('readline-sync');
const { getDate } = require('./getDate');
const path = require('path');


async function rmCharacters() {
    try{
        const date = await getDate();
        const newArray = date.filter(f => f.id !== '6' && f.id !== '10' )
        await fs.writeFile(path.resolve(__dirname, '../../simpsonsrm.json'), JSON.stringify(newArray));
        return newArray; 
    } catch (error) {
        console.error(`erro ao apagar itens com id 06 e 10: ${ error }`);
    }
};

const resultado = async () => {
    console.log( await rmCharacters());
};

resultado();
