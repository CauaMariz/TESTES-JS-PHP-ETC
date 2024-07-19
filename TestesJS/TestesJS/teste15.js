//indexOf() serve para dizer onde esta a string especificada nos ()
//O indexOf() método não pode aceitar valores de pesquisa poderosos (expressões regulares).
{
  let carros='Fiat, gol, ferrari'
  let loc=carros.indexOf('gol')
  console.log(`A palavra gol comeca na posicao ${loc+1}`)
}
//search() funciona do mesmo jeito
//O search()método não pode aceitar um segundo argumento de posição inicial.
{
let carros='Fiat, gol, ferrari'
let loc=carros.search('gol')
console.log(`A palavra gol comeca na posicao ${loc+1}`)
}
{
//match() procura se tem a palavra pedida nos () em carros
let carros='Fiat, gol, ferrari'
let loc=carros.match('gol')
console.log(`Tem palavra gol?  ${loc}`)
}
{
//matchAll() procura todas as palavras possiveis do () em carros. Teve que usar Array.from(loc)
let carros='Fiat, gol, ferrari, gol'
let loc=carros.matchAll('gol')
console.log(`Tem  quantas palavras gol?  ${Array.from(loc)}`)
}
