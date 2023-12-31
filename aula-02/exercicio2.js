/* 
    Crie um jogo de adivinhação em que o programa gera um número aleatório entre 1 e 100 e o jogador tenta adivinhar o número.
    O jogo deve dar dicas ao jogador, informando se o número é maior ou menor do que a tentativa atual.
    O jogador deve continuar a adivinhar até acertar o número. No final, deverá informar a quantidade de tentativas.
*/

/*const prompt = require("prompt-sync")();

const numero = prompt("Digite um numero:");
console.log(numero);*/


const prompt = require('prompt-sync')()
const numeroAleatorio = Math.floor(Math.random() * 100) + 1

console.log("Número aleatório: " + numeroAleatorio)

let numeroDigitado, tentativas = 0

do {
  numeroDigitado = prompt("Digite um número:" )
  
  if (numeroDigitado > numeroAleatorio) {
    console.log('Tente novamente! Dica: o número é menor que o digitado! ${numero}')
  } else if (numeroDigitado < numeroAleatorio){
    console.log("Tente novamente! Dica: o número é maior que o digitado!")    
  }
  tentativas++
}while (numeroDigitado != numeroAleatorio)

console.log("Você acertou!!")