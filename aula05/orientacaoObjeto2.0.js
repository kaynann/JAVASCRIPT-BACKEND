class Animal {
   constructor(tipo, cor, peso){
    this.tipo = tipo;
    this.cor = cor;
    this.peso = peso;
   };

   obterTipo() {
    return this.tipo
   };
};

let meuPet = new Animal('anfibio', 'preto', '10kg');
let meuPet2 = new Animal('réptil', 'azul', '2kg');
let meuPet3 = new Animal('felino', 'marrom', '25kg');

console.log(meuPet.obterTipo());
console.log(meuPet2);
console.log(meuPet3); 