import { Account } from './conta.js'

let account1 = new Account('Kaynan', '12345678', 11122233344, 1000);
let account2 = new Account('Geicy', '87654321', 55566677788, 2000);
account1.deposit(1000);
console.log(account1);

account2.deposit(500);
console.log(account2);

account1.draw(200);
console.log(account1);

account2.draw(150);
console.log(account2);

account1.transfer(1000, account2);
console.log(account1);
console.log(account2);

