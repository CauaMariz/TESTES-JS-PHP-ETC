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
