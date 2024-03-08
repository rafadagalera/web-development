// Uma livraria esta fazendo uma promoção para os livros de Harry Potter:
// de R$22 por R$15, isso se levar os 7 livros (ou mais).
// Faça um programa para ajudar o vendedor a inforar o preço total com base no
// número de livros adquiridos

 function pegarDados(){
     let quantidade = prompt("Quantidade de livros");
     console.log(typeof quantidade)
     return quantidade;
 }

 function calcularPreço(quantidade){
    let valor; 
    if (quantidade >=7){
        valor = quantidade * 15;
     } else {
        valor = quantidade * 22;
     }
     return valor
 }

 function main(){
     let quantidade = pegarDados();
     let retorno = calcularPreço(quantidade);
     console.log(retorno)
 }
 main()

// const prompt = require('prompt-sync')()

// const getUserInfo = () => {
// }
// const calcularPreço = nlivros =>{
//     if(nlivros >=7)
// }
// const ma{
//     let books = getUserInfo()
//     let preçofinal = calcularPreço()
// }