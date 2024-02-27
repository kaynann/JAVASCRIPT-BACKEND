import { Veiculo } from "./Veiculos.js";

export class VeiculosNovos extends Veiculo {
  constructor(marca, modelo, placa, cor, anoDeFabricacao, tipoDeCombustivel, quantidade, preco, localizacao){
    super(marca, modelo, placa, cor, anoDeFabricacao, tipoDeCombustivel, quantidade);
    this.preco = preco;
    this.localizacao = localizacao;
    this.emplacado = false;
    this.taxaEmplacamento = 0;
    this.statusDeVenda = false;
  };

// Get's
  get getPreco() {
    return this.preco;
  };

  get getLocalizacao() {
    return this.localizacao;
  };

  get getEmplacado() {
    return this.emplacado;
  };

  get getTaxaEmplacamento() {
    return this.taxaEmplacamento;
  };

  get getStatusVenda() {
    return this.statusDeVenda;
  };

// Set's
  set setPreco(novoPreco) {
    this.preco = novoPreco;
    return this.preco;
  }

  set setLocalizacao(novaLocalizacao) {
    this.localizacao =  novaLocalizacao;
    return this.localizacao;
  };

  set setEmplacamento(novoStatus) {
    this.emplacado = novoStatus;
    return this.emplacado
  };

  set setTaxaEmplacamento(novaTaxaEmplacamento) {
    this.taxaEmplacamento = novaTaxaEmplacamento;
    return this.taxaEmplacamento;
  };

  set setStatusVenda(novoStatusVenda) {
    this.statusDeVenda = novoStatusVenda;
    return this.statusDeVenda;
  }
};