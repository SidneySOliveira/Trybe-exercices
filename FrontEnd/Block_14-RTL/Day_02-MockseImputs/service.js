
const randomNumbers = () => {
    return Math.floor(Math.random() * 101)
}

const firstFunction = (str) => str.toUpperCase();
const secondFunction = (str) =>  str.charAt(0);
const thirdFunction = (str1, str2) => str1.concat(str2);

// export default randomNumbers
module.exports = { randomNumbers, firstFunction, secondFunction, thirdFunction }