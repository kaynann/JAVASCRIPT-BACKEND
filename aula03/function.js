function sum(a, b) {
  return a + b
}

console.log(sum(6, 8))

function bigYear(year) {
  switch(true){
    case year == 18:
      console.log('Você tem exatamente 18 anos.')
      break;
    case year > 18:
      console.log('Você é maior de 18 anos.')
      break;
    case year < 18:
      console.log('Você tem menos de 18 anos.')
      break;
    default:
      console.log('Impossível validar sua idade.')
  }
}

const prompt = require('prompt-sync')()
let year = Number(prompt('Informe sua idade: '))

bigYear(year)