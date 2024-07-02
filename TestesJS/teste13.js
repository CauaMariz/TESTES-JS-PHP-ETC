//na linha 3, at serve para mostrar a letra na posicao pedida no (). Na linha 6, slice serve para cortar a string do primeiro numero pedido ate a posicao do segundo numero pedido no(). Na linha 7 e 8 , pad serve para preencher a string ate ela ter o tanto de vezes com o numero especificado com a string especificada apos a virgula. Na linha 9  replace serve para trocar banana por uva na var fruta.
let nome='Pedro'
console.log(nome.at(3))
let fruta='Mamao, abacate, banana'

console.log(fruta.slice(0,16))
console.log(fruta.padEnd(50,'.'))
console.log(fruta.padStart(40,'.'))
console.log(fruta.replace('banana','uva'))
