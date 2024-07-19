//O metodo toSorted() faz um array ficar em ordem alfabetica
const nomes = ['Ana', 'Julia', 'Carlos', 'Roberta', 'Erica']
let MethodSort=nomes.toSorted()
console.log(MethodSort)
// 

//toSorted funciona com numeros tambem
const numeros = [ 5, 2, 8, 3, 7]
let MethodSort2=numeros.toSorted()
console.log(MethodSort2)
//

//O metodo toReversed() faz o array ficar de tras para frente
let MethodRever=nomes.toReversed()
console.log(MethodRever)
//

//O metodo forEach() faz ter algo para cada item do Array.
const nums = [45, 4, 9, 16, 25];

let txt = "";
nums.forEach(func)
console.log(txt)

function func(value) {
  txt += value + ' ' + "ola" + '\n'
}
//

//O metodo flatMap() é um pouco parecido, porem mais simples.
const numss = [1, 2, 3, 4, 5, 6]
let novo=numss.flatMap((x)=>x*2)
console.log(novo)
//

//forEach() usando o flatMap()
const NewNums=[1,2,3]
let novos=NewNums.flatMap((x)=>x + ' ' +'ola')

console.log(novos.join(', '))
//