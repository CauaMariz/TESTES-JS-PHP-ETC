<?php

//Uma classe é um modelo para objetos, e um objeto é uma instância de uma classe.

//O public faz com que as variveis dentro da class sejam globais. O public usa-se em classes
class Carros
{
  public $Cor;
  public $Preco;
  public $Ano;

  public function __construct($Cor, $Preco, $Ano)
  {
    $this->Cor = $Cor;
    $this->Preco = $Preco;
    $this->Ano = $Ano;
  }
  public function mensagem_carro()
  {
    echo "A cor do carro é:" . $this->Cor . ". O preco é: R$" . $this->Preco . ". E o ano é: " . $this->Ano;
  }
}

$valores_carro = new Carros("Preto", 35000, 2010);
echo "<pre>";
print_r($valores_carro);
$valores_carro->mensagem_carro();
