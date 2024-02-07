const prompt = require('prompt-sync')()

let user_year = Number(prompt('Informe sua idade: '))

if( user_year > 0 && user_year < 12 ){
    console.log('Você é uma criança')
} else if( user_year >= 12 && user_year < 18 ){
    console.log('Você é um adolescente')
} else if( user_year >= 18 && user_year < 60 ){
    console.log('Você é um adulto')
} else if( user_year >= 60 && user_year < 150 ){
    console.log('Você é idoso')
} else {
    console.log('Impossível validar sua idade.')
}
