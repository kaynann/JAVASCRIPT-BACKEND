const bebidas = {
  marca: 'marca da bebida',
  sabor: 'sabor da bebida',
  litros: 'litros da bebida',
  acucar: false,
  quantidade: 0,
  validade: Date(),
  preco: 'preco da bebida',
  verificaAcucar: function() {
    if (this.acucar === true) {
        return 'Contém açúcar';
    } else {
        return 'Não contém açúcar';
    };
  },

  verificaValidade: function() {
    const dataAtual = new Date();

    if (this.validade < dataAtual){
        return `Está fora da validade`;
    } else {
        return `Está dentro da validade`;
    };
  },

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
}

bebidas.marca = 'Fanta';
bebidas.sabor = 'Laranja';
bebidas.litros = '2L';
bebidas.açúcar = false;
bebidas.quantidade = 10;
bebidas.validade = new Date(2021, 3, 21);
bebidas.preco = 8.00;
bebidas.setQuantidade(-5);

console.log(`A bebida é da marca ${ bebidas.marca } tem o sabor ${ bebidas.sabor }. Tem ${ bebidas.litros } litros. ${bebidas.verificaAcucar()}. ${ bebidas.quantidade } unidades restantes. Preço: ${ bebidas.preco }. ${ bebidas.verificaValidade() }`);