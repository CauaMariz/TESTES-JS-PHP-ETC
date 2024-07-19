//Forma 1
let nomes = ['Joao', 'Pedro', 'Maria']
function EachNomes() {
  nomes.forEach((nome) => {
    console.log(nome + ' nome')
  })
}
EachNomes()
//
//Forma 2
let Dados = { Nomes: ['Joao', 'Maria', 'Roberto'], Idades: [23, 15, 64] }
console.log(Dados.Nomes)

function seeNames() {
  Dados.Nomes.forEach((Name) => {
    console.log(Name += ' nome')
  })
}
seeNames()
//
//Forma 3
function seeAge() {
  Dados.Idades.forEach((Age) => {

    if (Age < 18) {
      console.log(Age += '-Idade Invalida')
    }

  })
}
seeAge()
//