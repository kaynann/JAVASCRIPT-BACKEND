const prompt = require('prompt-sync')()

let year = prompt('Informe sua idade: ')

if (year > 18){
  console.log('Você é maior de idade')
} else {
  console.log('Você é menor de idade')
}