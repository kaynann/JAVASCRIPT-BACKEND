// const animal = Array('galinha', 'vaca', 'cabra');

// console.log(animal)
// console.log(animal.filter(function(animal) { return animal === 'cabra' }));

// const animais = {
//   som: 'um som do animal',
//   tipo: 'animal',
//   emitirsom: function() {
//     console.log(this.som)
//   }
// }

// animais.emitirsom()

// const cabra = {
//   som: 'Béééééeé',
//   tipo: 'cabra',
// }

// console.log(cabra)

// Object.setPrototypeOf(cabra, animais)
// cabra.emitirsom()

class Animais {
  constructor(som, tipo) {
    this.som = som;
    this.tipo = tipo;
  }

  emitirsom() {
    console.log(this.som)
  }
}

let cabrito = new Animais('Bééééééé', 'cabrito')
console.log(cabrito);
cabrito.emitirsom()