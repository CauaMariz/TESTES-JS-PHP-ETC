function mostrar(){
  function nomes(nome, idade, pais, estado) {
    this.Nome = nome;
    this.Idade = idade;
    this.Pais = pais;
    this.Estado = estado;
    this.ficha = function() {
      return 'Nome' + ' Idade' + ' País' + '    Estado' + '<br>' +
      this.Nome + " " + this.Idade + ", " + this.Pais + ", " + this.Estado;
    };
  }
  let dados = new nomes('Pedro', ' 59', 'Brasil', 'Rio de Janeiro')
  let campo=document.getElementById('campo')
  campo.innerHTML=dados.ficha()
}
