import { Operations } from "./operacoes.js"; 

export class Account extends Operations{
  constructor(name, account, cpf, saldo) {
    super(saldo);
    this._name = name; 
    this.account = account;
    this._cpf = cpf;
  };

// Get's
  get userName(){
    return this._name;
  };

  get cpf() {
    return this.cpf;
  };

  get userAccount() {
    return this.account;
  };

// Set's
  set userName(newName) {
    this._name = newName;
  };
};