/*
// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data.joke));
};

window.onload = () => fetchJoke();
*/

const criptoName = ``

const API_URL = `https://api.coincap.io/v2/assets`;

const cripto = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept-Encoding': 'gzip'}
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then((data) => {const dataCriptos = data.data
      append(dataCriptos)
    })
};

window.onload = () => cripto();



function funcDataSort (data) {
   return data.sort((a, b) => b.priceUsd - a.priceUsd )
}

function append (data) {
  const ol = document.getElementById('listCriptos')
    
  const dataSort = funcDataSort(data)
  for(let i = 0; i < 10; i += 1) {
    let moedaPriceUsd = (data[i].priceUsd)
    const criptoAdd = `${data[i].id} (${data[i].symbol}): ${moedaPriceUsd}`;
    const li = document.createElement('li');
    li.innerHTML = criptoAdd 
    ol.appendChild(li)
  }
}