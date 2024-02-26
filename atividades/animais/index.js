// Estruturas Globais:  Object, String, Number, Array e as Functions

const animal = new Array('gato', 'cachorro', 'rato')

console.log(animal)
console.log(animal.filter(function(animal) { return animal === 'rato' }))

const animais = {
    som: 'um som de animal',
    tipo: 'animal',
    emitirSom: function() {
        console.log(this.som)
    }
}

animais.emitirSom()

const gato = {
    som: 'Miauuuu',
    tipo: 'gato'
}

Object.setPrototypeOf(gato, animais)

gato.emitirSom()
console.log(gato.tipo)

const cachorro = {
    som: 'Au au',
    tipo: 'cachorro'
}

Object.setPrototypeOf(cachorro, animais)

cachorro.emitirSom()

const gatoRaivoso = {
    tipo: 'gato raivoso',
    miarForte: function() {
        console.log(this.som.toUpperCase())
    }
}

Object.setPrototypeOf(gatoRaivoso, gato)
gatoRaivoso.miarForte()