const veiculos = {
  marca: 'Marca do veículo',
  modelo: 'Modelo do veículo',
  placa: 'Placa do veículo',
  cor: 'Cor do veículo',
  anoDeFabricacao: 'Ano do veículo',
  tipoDeCombustivel: 'Combustível do veículo',
  quantidade: 'Quantidae de veículos',
  setQuantidade: function(novaQuantidade) {
    if (this.quantidade != 0) {
      if (novaQuantidade > 0) {
          this.quantidade += novaQuantidade;
          return true;
      } else {
        if (this.quantidade < Math.abs(novaQuantidade)) {
            console.log(`Você tem ${ this.quantidade } quantidade, impossível retirar ${ Math.abs(novaQuantidade) }`)
            return false;
        } else {
            this.quantidade += novaQuantidade;
            return true;
        };
      };
    } else {
      if (novaQuantidade > 0) {
          this.quantidade += novaQuantidade;
          return true;
      } else {
          console.log(`Você tem ${ this.quantidade } quantidade, impossível retirar ${ Math.abs(novaQuantidade) }`);
          return false
      };
    };
  }
};

veiculos.marca = 'FIAT';
veiculos.modelo = 'ELX';
veiculos.placa = 'FGH-5387';
veiculos.cor = 'Verde';
veiculos.ano = 2018;
veiculos.tipoDeCombustivel = 'FLEX';
veiculos.quantidade = -3
veiculos.setQuantidade(2)

const veiculosUsados = {
  quantidadeDeDonos: 'Donos',
  KmRodados: 'Todos',
  preco: 0,
  estadoConservacao: 'bom',
  statusDeVenda: false,
  vendaDoVeiculo: function(quantidade) {
    this.setQuantidade(quantidade);
    if (this.setQuantidade(quantidade) === true) {
      this.statusDeVenda = true;
    };
  }
};

Object.setPrototypeOf(veiculosUsados, veiculos)

veiculosUsados.marca = 'BMW';
veiculosUsados.modelo = '320i';
veiculosUsados.placa = 'KSW-6194';
veiculosUsados.cor = 'Preta';
veiculosUsados.ano = 2016;
veiculosUsados.tipoDeCombustivel = 'Gasolina';
veiculosUsados.quantidade = -1;
veiculosUsados.setQuantidade(7);

console.log(`O veículo de marca ${ veiculos.marca } e modelo ${ veiculos.modelo }. Tem a placa ${ veiculos.placa } e a cor ${ veiculos.cor }. Seu tipo de combustível é ${ veiculos.tipoDeCombustivel } e temos ${ veiculos.quantidade } unidades em nossa loja.`);

console.log()

console.log(`O veículo de marca ${ veiculosUsados.marca } e modelo ${ veiculosUsados.modelo }. Tem a placa ${ veiculosUsados.placa } e a cor ${ veiculosUsados.cor }. Seu tipo de combustível é ${ veiculosUsados.tipoDeCombustivel } e temos ${ veiculosUsados.quantidade } unidades em nossa loja.`)