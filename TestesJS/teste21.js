
function vermenu(){
  let menu=document.querySelector('#menuu')
  
  if (menu.classList.contains('remove')){
      menu.classList.add('add')
      menu.classList.remove('remove')
      menu.innerHTML='<a href=´#´ >Home</a>' + 
      '<a href=´#´>Login</a>' +
      '<a href=´#´>Configuracoes</a>'
      
  } else{
      menu.classList.add('remove')
      menu.classList.remove('add')
      menu.innerHTML=''
  }
}