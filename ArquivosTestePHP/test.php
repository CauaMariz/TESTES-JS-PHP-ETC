<?php 

class Pessoa{
  public $name;
  public $age;

  function __construct($name,$age){
    $this->name = $name;
    $this->age = $age;
  }

  function showPeople(){
    echo "Nome: " . $this->name. ". Idade:" . $this->age;
  }
}
$dados = new Pessoa("Joao",23);

$dados->showPeople();