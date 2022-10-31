// 02 - Função para retornar personagem conforme id digitado no console

const readline = require('readline-sync');
const persona = readline.question('Characteres id: ');
const { getDate } = require('./getDate');

async function main(persona) {
    const date = await getDate()
    const findPersona = new Promise((resolve, reject) => {
        const getPersona = date.find(p => p.id == persona);
        if (!getPersona) 
            reject (new Error("id não encontrado"));

        resolve(getPersona);
    })
    return findPersona;
};

const resultado = async () => {
    console.log( await main(persona));
};

resultado().catch(err => console.log("erro: %s", err.message));
