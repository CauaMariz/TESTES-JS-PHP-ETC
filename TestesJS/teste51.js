//Usando o continue, posso pular o numero ou str especificado. No codigo, disse que quando o i for igual a 4, tem que pular o numero especificado.
for (i = 0; i < 10; i++) {
  if (i === 4) { continue }
  console.log('Numero ' + i)
}
//Ja neste caso. especifiquei que quando i for igual a 4, tem que parar o programa. 
for (i = 0; i < 10; i++) {
  if (i === 4) { break }
  console.log('Versao 2. Numero ' + i)
}
//
//Usando for of() é um jeito de fazer isso so que mais moderno e legivel, porem tem que haver uma variavel para voce usar apos o of
let nums = [1, 5, 3, 2]
for (let i of nums) {
  nums+=i
  console.log('Num' , i)
}