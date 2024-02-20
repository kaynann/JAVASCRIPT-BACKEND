class Pessoa {
  constructor() {
    this.name = '';
    this.lastname = '';
  };

  nomePessoa(primeiroNome) {
    this.name = primeiroNome
    console.log(`Meu nome é: ${ this.name }`)
  }

};

pessoa = new Pessoa();
pessoa.nomePessoa('teste')