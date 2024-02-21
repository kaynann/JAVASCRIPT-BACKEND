import { Operacao } from './Operacoes.js'

export class BichinhoVirtual extends Operacao{
  constructor(nome, energia, brinca, dorme) {
    super(energia, brinca, dorme)
    this.nome = nome;
  };

// Get's
  get mostarNome(){
    return this.nome;
  };

// Set's
  /**
   * @param { any } novoNome
   */
  set mudarNome(novoNome) {
    this.nome = novoNome;
    return this.nome
  }
};