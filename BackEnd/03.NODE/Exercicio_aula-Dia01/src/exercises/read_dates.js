const { getDate } = require('./getDate');

async function readDates() {
        const date = await getDate()
        const list = date.map(p => console.log(`${p.id} - ${p.name}`))
        return list;
}

console.log(readDates());

module.exports = readDates;
