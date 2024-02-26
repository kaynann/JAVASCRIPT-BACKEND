// Crie um código que receba um valor e faça a conversão de acordo com a solicitação do usuário

const prompt = require('prompt-sync')();

function converteValor () {
    const valor = Number(prompt('Informe um valor numerico: '))
    if (!isNaN(valor)) {
        const valorInicial = prompt(`
            Informe a unidade inicial: 
                km para quilometros
                m para metros
                cm para centimetros
                mm para milimetros 
        `)
        const valorFinal = prompt(`
            Informe a unidade destino:
                km para quilometros
                m para metros
                cm para centimetros
                mm para milimetros 
        `)
        if (valorInicial === valorFinal) {
            console.log(`${valor}${valorInicial} é igual a ${valor}${valorFinal}`)
            return
        }
        // conversão par metros
        let metros
        switch(valorInicial) {
            case 'm':
                metros = valor
                break
            case 'km':
                metros = valor * 1000
                break
            case 'cm':
                metros = valor / 100
                break
            case 'mm':
                metros = valor / 1000
                break
        }
        console.log(metros)
        
        let resultado
        switch(valorFinal) {
            case 'm':
                resultado = metros
                break
            case 'km':
                resultado = metros / 1000
                break
            case 'cm':
                resultado = metros * 100
                break
            case 'mm':
                resultado = metros * 1000
                break
        }
        console.log(`${valor}${valorInicial} equivale a ${resultado}${valorFinal}`)
    } else {
        console.log(`${valor} não é uma valor valido`)
    }
}

converteValor()