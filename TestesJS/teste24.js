//o metodo concat junta arrays
const carros=['car1','car2','car3']
const carros2=['car4','car5','car6']
console.log(carros.concat(carros2))
//splice() serve para cortar os elementos de um array. Onde 0 é o lugar de corte e 3 é quantos elementos devem ser cortados. 
let novos=carros.splice(0,3)
console.log(novos)