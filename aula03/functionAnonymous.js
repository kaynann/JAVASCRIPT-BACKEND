const myFunction = function() { return 2 + 2 }

// funcao anomima dentro de um objeto
const object = {}
object.saudacao = function() { return 'Olá pessoal'}
console.log(object.saudacao())
console.log()

// funcao como argumento de uma função

function qualquerCoisa(funcao) {
  funcao()
}

qualquerCoisa(function () {console.log('teste')})

function calculaImposto(funcao, valor) {
  funcao(valor)
}

calculaImposto(
  function(valor) {
    let imposto = valor * 0.05
    console.log(imposto)
  }, 2500
)

// argumentos variaveis nas funções
function multiplicar() {
  let resultado = 1
  for(i in arguments) {
    resultado *= arguments[i]
  }
  return { resultado, arguments }
}

console.log(multiplicar(2, 7, 10))

