const prompt = require('prompt-sync')()
let numero = prompt('Informe um numero: ')
let resultado = 1

for (let i = 1; i <= numero; i++){
  resultado = resultado * i;
}

console.log(`O fatorial de ${ numero } é ${ resultado }`)