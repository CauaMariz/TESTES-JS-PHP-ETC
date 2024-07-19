
  function clicar(){
  let menuapa=document.querySelector('.menuapa')
  let show=document.querySelector('.show')
  let hide=document.querySelector('.hide')
  if (menuapa.classList.contains('hide')){
    menuapa.classList.remove('hide')
    menuapa.classList.add('show')
  } else{
    menuapa.classList.remove('show')
    menuapa.classList.add('hide')
  }
}
