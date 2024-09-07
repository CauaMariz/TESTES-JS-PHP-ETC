//O metodo Set() serve basicamente para armarzenar valores sem duplicacao.
const x = new Set()

x.add('Joao')//O metodo add() adiciona objetos ao set()

x.add('Maria')
x.add('Paula')
x.add('Marina')

x.delete('Joao')//O metodo delete() deleta o objeto especificado do set()

console.log(x)

console.log(x.has('Joao'))//O metodo has() verifica se ja existe o valor especificado no set()
console.log(x.size)//O size verifica o tamanho do set()

x.clear()//clear() limpa todo o conteudo do set()
console.log(x)

//Set() com array

const c=new Set(['Paula','Caua','Roberto','Lucas'])

c.add('Maria')
c.delete('Caua')

console.log(c.has('Roberto'))
console.log(c.size)
console.log(c)

console.log(c.entries())
console.log(c.keys())