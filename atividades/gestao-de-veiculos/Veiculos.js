export class Veiculo {
  constructor(marca, modelo, placa, cor, anoDeFabricacao, tipoDeCombustivel, quantidade) {
    this.marca = marca;
    this.modelo = modelo;
    this.placa = placa;
    this.cor = cor;
    this.anoDeFabricacao = anoDeFabricacao;
    this.tipoDeCombustivel = tipoDeCombustivel;
    this.quantidade = quantidade;
  };

// Get's
  get getMarca() {
    return this.marca;
  };

  get getModelo() {
    return this.modelo;
  };

  get getPlaca() {
    return this.placa;
  };

  get getCor() {
    return this.cor;
  };

  get getAnoDeFabricacao() {
    return this.anoDeFabricacao;
  };

  get getTipoDeCombustivel() {
    return this.tipoDeCombustivel;
  };

  get getQuantidade() {
    return this.quantidade;
  };

// Set's
  set setMarca(novaMarca) {
    this.marca = novaMarca;
    return this.marca;
  };

  set setModelo(novoModelo) {
    this.modelo = novoModelo;
    return this.modelo;
  };

  set setPlaca(novaPlaca) {
    this.placa = novaPlaca;
    return this.placa;
  };

  set setCor(novaCor) {
    this.cor = novaCor;
    return this.cor;
  };

  set setAnoDeFabricacao(novoAno) {
    this.anoDeFabricacao = novoAno;
    return this.anoDeFabricacao;
  };

  set setTipoDeConbustivel(novoTipoDeCombustivel) {
    this.tipoDeCombustivel = novoTipoDeCombustivel;
    return this.tipoDeCombustivel;
  };

  set setQuantidade(novaQuantidade) {
    if (this.quantidade != 0) {
      if (novaQuantidade > 0) {
          this.quantidade += novaQuantidade;
          return this.quantidade;
      } else {
        if (this.quantidade < Math.abs(novaQuantidade)) {
            console.log(`Você tem ${ this.quantidade } quantidade, impossível retirar ${ Math.abs(novaQuantidade) }`)
        } else {
            this.quantidade += novaQuantidade;
            return this.quantidade;
        };
      };
    } else {
      if (novaQuantidade > 0) {
          this.quantidade += novaQuantidade;
          return this.quantidade;
      } else {
        console.log(`Você tem ${ this.quantidade } quantidade, impossível retirar ${ Math.abs(novaQuantidade) }`);
      };
    };
  };
};