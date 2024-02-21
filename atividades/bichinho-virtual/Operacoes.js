export class Operacao {
  constructor(energia, brinca, dorme) {
    this.energia = energia;
    this.brinca = brinca;
    this.dorme = dorme;
  };

// Get's
  get nivelEnergia (){
    return this.energia;
  };

  get nivelBrincar (){
    return this.energia;
  };
// Comuns

  brincar(value) {
    if (value > this.energia) {
        console.log('Seu bichinho não tem energia   suficiente para essa brincadeira 🥱.');
    } else if (this.energia == 5) {
        console.log(`Seu bichinho virtual com a energia em: ${ this.energia }. Ele precisa dormir para brincar novamente.`);
    } else {
        this.energia -= value;
        this.brinca += value;

        if (this.brinca < 10) {
            console.log('Brinca mais um pouco comigo! 😟');
        } else if (this.brinca >= 10 && this.brinca <= 50) {
            console.log('Estou pouco sastifeito com meu nivel de brincadeira! 🙂');
        } else if (this.brinca > 50) {
            console.log('Estou super sastifeito com meu nivel de brincadeira! 😁')
        };

        console.log(`Você brincou ${ value } com seu bichinho. Ele tem ${ this.energia } de energia restantes`);
        return this.energia, this.brinca;
    };
  };

  dormir(value) {
    if (value == 'dormir') {
      if(this.energia > 0 && this.energia < 100) {
          this.energia += 10;
          this.brinca -= 5;
          console.log(`O nivel energia do seu pet aumentou em 10. A energia atual esta em ${ this.energia }`);
      } else if (this.energia == 100) {
          console.log('Seu bichinho já está descansado');
          if (this.brinca < 10) {
              console.log(`Eu preciso brincar! 😓 Meu nivel de brincadeira esta em ${ this.brinca }`);
          };
      };
    };
  };
};