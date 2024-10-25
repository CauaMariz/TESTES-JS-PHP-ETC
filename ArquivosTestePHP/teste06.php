<?php

$valor_um = 10;
$valor_dois = 10;
function conta_dos_valores()
{
  global $valor_um, $valor_dois;
  //O global serve para acessar variaveis que estao fora da function. O global so pode ser usado dentro de uma function!
  $conta = $valor_um + $valor_dois;
  echo "O resultado da conta entre $valor_um + $valor_dois = $conta";
}
conta_dos_valores();

//Ou tambem
//Este jeito é mais dificil, e armazena os valores em um array
function funcao_dois_soma_valores(){
  $GLOBALS['soma'] = $GLOBALS['valor_um'] + $GLOBALS['valor_dois'];
  echo "<pre>";
  print_r ($GLOBALS);
}
funcao_dois_soma_valores();

