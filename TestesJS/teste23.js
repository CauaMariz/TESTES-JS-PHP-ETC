class carros{
  constructor(modelo,marca,valor){
    this.Modelo = modelo;
    this.Marca = marca;
    this.Valor = valor;
  }
}
const dados= new carros('ford ','ford ','15000')
console.log(dados)



function tipos(){
  return modelos=['fiat','ford']
  return valor=['15000','20000']
}
console.log(tipos().join(', '))
