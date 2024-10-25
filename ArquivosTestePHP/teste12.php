<?php 

//Significados no PHP
/*
  -> Usado para acessar propriedades e métodos de um objeto. É o operador de acesso a membros de um objeto.

  exemplo:

  class Carro {
    public $cor;
    
    public function setCor($cor) {
        $this->cor = $cor;
    }
}

  $meuCarro = new Carro();
  $meuCarro->setCor('azul');
  echo $meuCarro->cor; // Saída: azul


  => Usado em arrays associativos para associar uma chave a um valor. É o operador de atribuição em arrays.
    
  exemplo: 
  $carro = [
      'marca' => 'Fusca',
      'ano' => 1970,
      'cor' => 'azul'
  ];

  echo $carro['marca']; // Saída: Fusca

*/
