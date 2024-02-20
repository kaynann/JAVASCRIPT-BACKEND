export class Operations {
  constructor(saldo) {
    this._saldo = saldo
  };

// Get's
  get saldo(){
    return this._saldo
  }

// Comuns
  deposit(value) {
    if ( value <= 0) {
        return;
    } else {
        this._saldo += value;
        return value;
    };
  };

  draw(value) {
    if(this._saldo >= value) {  
        this._saldo -= value;
        return this._saldo
    }
  };

  transfer(value, account) {
    const draweeValue = this.draw(value);
    account.deposit(draweeValue);
  };
};
