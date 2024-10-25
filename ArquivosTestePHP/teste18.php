<?php
$Dados = [
  "Nome" => "Maria",
  "Idade" => 28
];
foreach ($Dados as $Chave => $Valor) {
  print_r($Chave . ".   Valor: " . $Valor . "<br>");
}
//Aqui no php, diferente do JS que é preciso apenas usar um parametro, aqui precisamos usar o primeiro parametro que é o elemento e o segundo parametro que é o valor do elemento