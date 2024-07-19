{
  let num = 4.7
  let novo = Math.round(num) //Retorna o num inteiro mais proximo
  console.log(novo)
}
{
  let num = 4.7
  let novo = Math.ceil(num) //Retorna o num inteiro mais proximo para cima
  console.log(novo)
}
{
  let num = 4.7
  let novo = Math.floor(num) //Retorna o num inteiro mais proximo para baixo
  console.log(novo)
}
{
  let num = 4.7
  let novo = Math.sign(num) //Retorna se o num é nulo, positivo ou negativo
  console.log(novo)
}
{
  let novo = Math.pow(4, 2) //Retorna o primeiro num de num vezes o total de vezes do segundo num
  console.log(novo)
}
{
  let num = 4
  let novo = Math.sqrt(num) //Retorna a raiz  quadrada do num
  console.log(novo)
}
{
  let num = -4.7
  let novo = Math.abs(num) //Converte o num para positivo
  console.log(novo)
}
{
  let novo = Math.max(2, 5, 20, -6) //Retorna o maior num
  let novo2 = Math.min(2, 5, 20, -6)// Retorna o menor valor
  console.log(novo)
  console.log(novo2)
}
{
  let novo = Math.random() //Da um valor aleatorio entre 0 e 1
  console.log(novo)
}
{
  let novo = Math.floor(Math.random() * 15) //Usar Math.floor() para especificar onde ate vai o gerador de numeros. no caso ate o numero 15
  console.log(novo)
}
{
  let novo = Math.floor(Math.random() * 15) + 1 // Neste caso, o 0 nao aparece, pois somo os valores a 1
  console.log(novo)
}