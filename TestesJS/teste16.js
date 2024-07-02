
function verLoja1(){

let loja1={
   Loja1:
  
    {Marcas:['Fiat','Volswagem','Nissan'],
    Modelos:['Polo','Nissan 350Z','Fusca'],
    Valores:['R$ 90000','R$ 25000','R$ 150000']},
  }
  let campo=document.getElementById('campo')
  
  campo.innerHTML=
  loja1.Loja1.Marcas.join(', ') + '<br>' + 
  loja1.Loja1.Modelos.join(', ') + '<br>' + 
  loja1.Loja1.Valores.join(', ') 
  
  let botao=document.createElement('button')
  botao.textContent='Ver modelos'
  botao.id='botaoVerModelos'
  botao.addEventListener('click', function(){
    campo.innerHTML=loja1.Loja1.Modelos.join(', ')
    })
  document.body.appendChild(botao)
}
  

function verLoja2(){
  let loja2={Loja2:
  
    {Marcas:['Subaru','Toyota','Hyundai'],
    Modelos:['Subaru Impreza','Hyundai HB20','Corolla'],
    Valores:['200000 R$','45000 R$','70000 R$']}
  }
  let campo=document.getElementById('campo')
  
  campo.innerHTML=
  loja2.Loja2.Marcas.join(', ') + '<br>' + 
  loja2.Loja2.Modelos.join(', ') + '<br>' + 
  loja2.Loja2.Valores.join(', ') 
  let botao=document.getElementById('botaoVerModelos')
  if (botao){
    botao.parentNode.removeChild(botao)
  }
}
function limpar(){
  let campo=document.getElementById('campo').innerHTML=''
  let botao=document.getElementById('botaoVerModelos')
  if (botao){
    botao.parentNode.removeChild(botao)
  }
}
document.getElementById('limpar').addEventListener('click', limparTela);