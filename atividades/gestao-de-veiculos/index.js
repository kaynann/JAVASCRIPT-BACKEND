import { Veiculo } from "./Veiculos.js"; 
import { VeiculosNovos } from "./VeiculosNovos.js";

let palio = new Veiculo('FIAT', 'ELX', 'GHJ-4729', 'Azul', '2015', 'Flex', 0);
console.log(palio);
palio.setQuantidade = -3;
console.log(palio.getQuantidade);
palio.setQuantidade = 6;
console.log(palio.getQuantidade)
palio.setQuantidade = -3;
console.log(palio.getQuantidade);

let bmw = new VeiculosNovos('BMW', '320i', null, 'Preta', '2023', 'Gasolina', 6, 343950.00, 'concessionária')
console.table(bmw)
console.log()
bmw.setStatusVenda = true;
bmw.setQuantidade = -1;
bmw.setTaxaEmplacamento = 3000.00
bmw.setEmplacamento = true;
bmw.setPlaca = 'ZXV-4791';
console.table(bmw);