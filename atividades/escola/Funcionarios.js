export class Funcionario {
  constructor(nome, cargo, salario, turno) {
    this._nome = nome;
    this._cargo = cargo;
    this._salario = salario;
    this._turno = turno;
  };

// Get's
  get verNome() {
    return this._nome;
  };
  
  get verCargo() {
     return this._cargo; 
  };

  get verSalario() {
    return this._salario;
  };

  get verTurno() {
    return this._turno;
  };

// Set's
  /**
   * @param { any } novoNome
   */
  set alteraNome(novoNome) {
    this._nome = novoNome;
    return this._nome;
  };

  /**
   * @param { any } novoCargo
   */
  set alteraCargo(novoCargo) {
    this._novoCargo = novoCargo;
    return this._cargo;
  };

  /**
   * @param { number } novoSalario
   */
  set alteraSalario(novoSalario) {
    if (this._salario < novoSalario) {
        this._salario = novoSalario;
    } else {
      return `O novo salário não pode ser menor que ${ this._salario }`;
    };
  };

  /**
   * @param { any } novoTurno
   */
  set alteraTurno(novoTurno) {
    if (this._turno === novoTurno) {
        return `O seu turno já é ${ novoTurno }`;
    } else {
        this._turno == novoTurno;
        return this._turno;
    };
  };
};