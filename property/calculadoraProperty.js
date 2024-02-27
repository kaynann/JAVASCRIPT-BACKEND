const calculadora = {
  num01: 0,
  num02: 0,
  result: 0,
  mostrarResultado: function() {
    console.log(`O primeiro número é ${this.num01}, e o segundo número é ${this.num02} o resultado é: ${ this.result }`)
  }
};

const soma = {
  somar: function() {
    this.result = this.num01 + this.num02;
    return this.result;
  }
};

const multiplica = {
  multiplicar: function() {
    this.result = this.num01 * this.num02;
    return this.result;
  }
};

Object.setPrototypeOf(soma, calculadora);
Object.setPrototypeOf(multiplica, soma);

calculadora.num01 = 10;
calculadora.num02 = 10;

soma.somar();
soma.mostrarResultado();
multiplica.multiplicar();
multiplica.mostrarResultado();