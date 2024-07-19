//Ao exibir no html, aparece Object object, pois dados ainda nao sao uma string, e sim objeto. Para converter em string, é necessario usar o JSON.stringify(). Veja na linha 12
/*function clicar(){
  let campo=document.getElementById('campo')
  let dados={Nome:'Caua',Idade:16}
  campo.innerHTML=dados
}
*/
function clicar(){
  let campo=document.getElementById('campo')
  let dados={Nome:['Caua '],Idade:[16]}
  let dados2=dados.Nome.join() + dados.Idade.join()
  campo.innerHTML=JSON.stringify(dados2)  
}
function limpar(){
  campo.innerHTML=''
}