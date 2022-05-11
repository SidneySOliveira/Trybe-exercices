// console.log(document.getElementById('start').nextSibling)
// console.log(document.getElementById('start').nextElementSibling)

// 01 - Acesse o elemento elementoOndeVoceEsta.
console.log("01 - Acesse o elemento elementoOndeVoceEsta.")
console.log(document.getElementById('elementoOndeVoceEsta'));

// 02 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
console.log("02 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.")
document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'red';

// 03 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
//    Você se lembra dos vídeos da aula anterior, como fazer isso?
console.log("03 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele.")
document.getElementById('elementoOndeVoceEsta').firstElementChild.innerText = "texto exercício 03 adicionado";

// 04 - Acesse o primeiroFilho a partir de pai.
console.log("04 - Acesse o primeiroFilho a partir de pai.")
console.log(document.getElementById('pai').firstElementChild)

// 05 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log("05 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.")
console.log(document.getElementById('elementoOndeVoceEsta').parentNode)

// 06 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log("06 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.") 
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling)

// 07 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log("07 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.")
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling)

// 08 - Agora acesse o terceiroFilho a partir de pai.
console.log("08 - Agora acesse o terceiroFilho a partir de pai.")
console.log(document.getElementById('pai').children[2])

// 09 - Crie um irmão para ElementoOndeVoceEsta
console.log("09 - Crie um irmão para ElementoOndeVoceEsta")
let irmao = document.createElement('section');
irmao.innerText = "Irmão do Elemento onde você está"
document.getElementById('pai').appendChild(irmao)
console.log(document.getElementsByTagName('section')[7])

// 10 - Crie um filho para elementoOndeVoceEsta .
console.log("10 - Crie um filho para ElementoOndeVoceEsta");
let filho = document.createElement('section');
filho.innerText = "Filho do Elemento onde você está";
filho.classList = "Filho_do_Elemento_onde_você_está";
document.getElementById('elementoOndeVoceEsta').appendChild(filho);
console.log(document.getElementById('elementoOndeVoceEsta').children);

// 11 - Crie um filho para primeiroFilhoDoFilho.
console.log("11 - Crie um filho para primeiroFilhoDoFilho");
let filhoDoFilho = document.createElement('section');
filhoDoFilho.innerText = "Filho do Elemento primeiroFilhoDoFilho";
document.getElementById('primeiroFilhoDoFilho').appendChild(filhoDoFilho);
console.log(document.getElementById('primeiroFilhoDoFilho').children);

// 12 - A partir desse filho criado, acesse terceiroFilho
console.log("12 - A partir desse filho criado, acesse terceiroFilho")
console.log(document.querySelectorAll('section')[4].parentElement.parentElement.nextElementSibling)
