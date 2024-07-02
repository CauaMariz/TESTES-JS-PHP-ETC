//Outro exemplo usando o join, mas como falei no teste 8, ele so pode ser usado para Arrays
let notas={
Sala8A: 
{Nomes: ['Joao','Maria','Pedro'],
Notas: ['1','6','8']},
Sala8B: {Nomes:['Julia','Vitor','Pietro'],
Notas:['8','10','9']}
}
let sala8A=notas.Sala8A.Nomes.join(', ')+ '\n' +notas.Sala8A.Notas.join(', ')
let sala8b=notas.Sala8B.Nomes.join() +'\n'+ notas.Sala8B.Notas.join()
console.log('-'.repeat(30))

console.log('Sala 8A')
console.log(sala8A)

console.log('-'.repeat(30))

console.log(notas.Sala8A.Nomes[0])
console.log(notas.Sala8A.Nomes[1])

console.log('-'.repeat(30))

console.log('Sala 8B')
console.log(sala8b)

console.log('-'.repeat(30))