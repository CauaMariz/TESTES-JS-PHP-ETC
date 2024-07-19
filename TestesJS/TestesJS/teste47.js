//Utilizando operador Ternario. Usado para basicamente nao precisar escrever if e else. Com ? é possivel escrever tudo numa mesma linha. idade >= 18 é a condição.
//'Adulto' é o valor retornado se a condição for verdadeira.
//'Menor de idade' é o valor retornado se a condição for falsa.

let Idade=18
let VerIdade=(Idade>=18) ? 'Maior de Idade' : 'Menor de Idade'
console.log(VerIdade)

//O ?? é usado quando uma var ainda nao tem valor definido (undefined ou null), ai apos ?? coloca-se o que sera exibido, se a var for null ou undefined.
let Name
let VerName=(Name) ?? 'Invalido ou sem valor'
console.log(VerName)