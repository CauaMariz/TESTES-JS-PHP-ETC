//com Promisse(), consigo criar dois casos, resolve e reject, que sao os parametros de Promisse. no exemplo abaixo, se a soma de nums for 4, resolve é chamado, senao reject é chamado. depois do codigo, usamos o .then, que se resolve for chamado, result aparece na tela. se reject for chamado, .catch é usado com erro, e o .finally é que independente do resultado, ele sera executado.
const Promessa = new Promise((resolve, reject) => {
  let nums = 1 + 3
  if (nums == 4) {
    resolve(nums)
  } else {
    reject('Erro')
  }
})
Promessa.then((result) => {
  console.log(`Valor ${result}`)
}).catch((erro) => {
  console.log(`${erro}`)
}).finally(() => {
  console.log('Fim')
})