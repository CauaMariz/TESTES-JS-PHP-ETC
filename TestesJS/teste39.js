function See() {
  let campo = document.querySelector('#campo')

  function FirstFunc() {
    return new Promise((resolve) => {
      setTimeout(() => {

        let Dados = {
          Nome: ['Joao', 'Maria', 'Pedro'],
          Idades: [7, 8, 10]
        }

        campo.innerHTML +=
          Dados.Nome + '<br>' +
          Dados.Idades + '<br>' + '<br>'

        resolve()
      }, 2000)
    })
  }
  try {
    async function SecondFunc() {
      campo.innerHTML += 'Inicio' + '<br>' + '<br>'
      await FirstFunc()
      campo.innerHTML += 'Fim'
    }
    SecondFunc()
  } catch (erro) {
    campo.innerHTML = `Erro ${erro}`
  }
}
