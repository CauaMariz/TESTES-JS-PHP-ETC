//Na linha 2, declaramos const, abrimos chaves e comecamos a atribuir valores as chaves. primeiroNome(é uma chave):'john'(é o valor da chave). Na linha 6, a chave recebe (:) function, onde no bloco retorna primeiroNome, mas antes tem que vir this, onde 'this' se refere ao valor de primeiroNome que é John. Seria o mesmo que usar pessoa.primeiroNome
const pessoa = {
  primeiroNome: "John",
  ultimoNome : "Doe",
  id       : 5566,
  nomeInteiro : function() {
    return this.primeiroNome + " " + this.ultimoNome + '. ID: ' +this.id;
  }
}

console.log(pessoa.nomeInteiro())

  