const btn = document.querySelector("#btn")
let menu = document.querySelector(".menu")
let span = document.getElementById("span")
function Ver() {
    menu.classList.toggle("ativar")

    menu.innerHTML = '  <a href="#">Home</a>' + '<a href="#">Login</a> ' + ' <a href="#">Carrinho</a>'


    if (menu.classList.contains("ativar")) {

        span.style.backgroundColor = "white"
    } else {
        span.style.backgroundColor = "grey"

        menu.innerHTML=''
    }
}