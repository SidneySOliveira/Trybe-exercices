// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
document.getElementsByTagName("p")[0].innerText = "Trabalhando em um grande projeto";

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';

// Crie uma função que mude a cor do quadrado vermelho para branco.
document.getElementsByTagName('section')[0].style.backgroundColor = 'rgb(255,255,255)';

// Crie uma função que corrija o texto da tag <h1>.
document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaEscript';

// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function Maiuscula (){
    let pMaiuscula = document.getElementsByTagName('p');
        for(i = 0; i < pMaiuscula.length; i += 1){
        pMaiuscula[i].innerText = pMaiuscula[i].innerText.toUpperCase()
    }
}
Maiuscula();
// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function exibir (){
    let pexibir = document.getElementsByTagName('p');
        for(i = 0; i < pexibir.length; i += 1){
        console.log(pexibir[i].innerHTML);
    }
}
exibir();