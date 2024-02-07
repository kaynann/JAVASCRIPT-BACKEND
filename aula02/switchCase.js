const prompt = require('prompt-sync')()

let year = Number(prompt('Informe sua idade: '))

switch(true) {
  case year >= 0 && year < 12:
    console.log('Você é uma criança')
    break;

  case year >= 12 && year < 18:
    console.log('Você é um adolescente')
    break;

  case year >= 18 && year <= 60:
    console.log('Você é um adulto')
    break;

  case year > 61 && year < 150:
    console.log('Você é um idoso')
    break;
  default:
    console.log('Impossível validar sua idade')
} 