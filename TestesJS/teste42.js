//Cada get. retorna o valor pedido. Exemplo: getHours-> retorna apenas as horas da var data.
let data=new Date('2024','07','07')
let ano=data.getFullYear()
let mes=data.getMonth()
let dia=data.getDate()
let hora=data.getHours()
let minutos=data.getMinutes()
let segundos=data.getSeconds()

console.log(data)
console.log(mes)
console.log(dia)
console.log(hora)
console.log(minutos)
console.log(segundos)