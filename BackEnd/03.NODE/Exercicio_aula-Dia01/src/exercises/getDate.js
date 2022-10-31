const fs = require('fs').promises;

async function getDate() {
    try {
        const data = await fs.readFile('./simpsons.json', 'utf-8');
        const characters = await JSON.parse(data);
        return characters;
    } catch (error) {
        console.error('Erro na leitura do arquivo')
    };
    
}

module.exports = { getDate };
