//Perceba que no const carros, tive que colocar tudo dentro de [], pois find serve apenas para arrays. tambem tive que coloca-los dentro de {}, pois sao objetos
const carros=[{
  loja1:['car1','car2'],
  loja2:['car3','car4']
}]

let JSN=JSON.stringify(carros)

const Findcars=carros.map((car)=>{
return car.loja1=='car2'})

function FindCar(){
  console.log('Tem o car1 na loja1? : ',Findcars)
}

const NewJSN=JSN.replace(/[{}[\]"]/g, ' ')

FindCar()

console.log(NewJSN)