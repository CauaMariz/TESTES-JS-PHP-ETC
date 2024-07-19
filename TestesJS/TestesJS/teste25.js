//Para tirar os {}, [] e "" de um objeto, é preciso entao usar o replace() que é o trocar. Mas ele so funciona em strings, e carros é um object, entao temos que converte-lo antes de usar o replace. A estrutura do replace é a mesma, troque /[{}[\]"]/g por " " (que significa espaco).
let func=()=>{
  let carros={Modelos:['model1','model2','model3'] + '<br>' , Precos:['12332','3213','12312']}
  let carros2=JSON.stringify(carros)
  let newCarros=carros2.replace(/[{}[\]"]/g, ' ');
  document.write(newCarros)
}