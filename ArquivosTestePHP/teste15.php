<?php 
//Constantes em PHP sao instanciadas com o metodo define($varivel,valorDaVariavel) ou const 
/*
  const não pode ser criado dentro de outro escopo de bloco, como dentro de uma função ou dentro de uma if instrução.
  define pode ser criado dentro de outro escopo de bloco.
 */
 
define("Nome","Teste");
const Nome2="Teste";
echo Nome2;

//define() tambem pode ser usada para arrays

define("Dados",[
  "Nome"=>"Caua",
  "Idade"=>17
]);
//Se eu quiser exibir dessa maneira com echo, nao pode haver chave identificadora(=>), apenas quando usar print_r()
echo Dados[0];
print_r(Dados);
