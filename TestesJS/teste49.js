async function func() {
  let URL = 'https://jsonplaceholder.typicode.com/posts/1/comments'
  let fet = await fetch(URL)
  let js = await fet.json()
  console.log(js)
}
setTimeout(() => {
  func()
}, 3600)

let dados = { Nomes: ['Joao' + 12, 'Pedro', 'Maria'], Idades: [16, 47, 22] }

let FullDados = {
  Int1:
  {
    Nome: 'Joao',
    Idade: 12,
    Nacionalidade: 'Brasileiro'
  },
  Int2: {
    Nome: 'Maria',
    Idade: 19,
    Nacionalidade: 'Boliviana'
  }
}

console.log(FullDados.Int2, '\n', FullDados.Int1)
console.log(FullDados.Int1.Nome.length)
console.log(dados.Nomes)
console.log(dados.Idades.length)
console.log('Carregando...')