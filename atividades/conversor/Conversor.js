const prompt = require('prompt-sync')();

class Conversor{
  constructor() {
    this.valor = null;
    this.unidadeI = null;
    this.unidadeF = null;
  };

// Get's
  get mostraValor() {
    return this.valor;
  };

  get mostraUnidadeI() {
    return this.unidadeI;
  };

  get mostraUnidadeF() {
    return this.unidadeF;
  };

// Comuns
  inserirValor( ) {
    const valor = Number(prompt('Insira um número: '));
    this.valor = valor;
    return this.valor
  };

  inserirUnidades() {
    if (!isNaN(this.valor)) {
      const valorInicial = prompt(`
      Informe a unidade inicial: 
          km para quilometros
          m para metros
          cm para centimetros
          mm para milimetros 
     `);
      this.unidadeI = valorInicial;

      const valorFinal = prompt(`
            Informe a unidade destino:
                km para quilometros
                m para metros
                cm para centimetros
                mm para milimetros 
      `);

      this.unidadeF = valorFinal;

      if (this.unidadeI === this.unidadeF) {
        console.log(`${valor}${valorInicial} é igual a ${valor}${valorFinal}`);
        return;
      };

      return this.unidadeI, this.unidadeF;
    };
  };

  converter() {
    this.inserirUnidades();
    let metros
    switch(this.unidadeI) {
      case 'm':
        metros = this.valor;
        break;
      case 'km':
        metros = this.valor * 1000;
        break;
      case 'cm':
        metros = this.valor / 100;
        break;
      case 'mm':
        metros = this.valor / 1000;
        break;
    };
    console.log(metros)
        
    let resultado
    switch(this.unidadeF) {
      case 'm':
        resultado = metros;
        break;
      case 'km':
        resultado = metros / 1000;
        break;
      case 'cm':
        resultado = metros * 100;
        break;
      case 'mm':
        resultado = metros * 1000;
        break;
    };
    console.log(`${this.valor}${this.unidadeI} equivale a ${resultado}${this.unidadeF}`);
    } ;
};

let numero = new Conversor();
numero.inserirValor();
numero.converter();
console.log(numero);