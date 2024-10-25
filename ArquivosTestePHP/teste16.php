<?php 
//As constantes mágicas em PHP são palavras-chave especiais que fornecem informações sobre o contexto em que estão sendo utilizadas. Elas são extremamente úteis para depuração, geração de logs e outras tarefas que exigem conhecimento sobre o estado atual da aplicação.

//__CLASS__ retorna o nome da classe atual

class ClasseTeste{
  public function Func(){
    echo __class__;
  }
}
$Objeto=new ClasseTeste;
$Objeto->Func();

//__DIR__ retorna o diretorio atual do arquivo

echo "<br>" . __dir__;

//__file__ retorna o caminho completo do arquivo atual

echo "<br>" . __file__;

//__function__ retorna o nome da funcao atual

function Funcao(){
  echo "<br>" . __function__;
}
Funcao();

//__line__ retorna a linha que esta atualmente o codigo __line__
echo "<br>" . __line__;

//__method__ Retorna o nome do método atual dentro de uma classe.

class MyClass {
  public function Metodo() {
      echo "<br>" . __METHOD__; // 
  }
}

$ObjetoMyclass=new MyClass;
$ObjetoMyclass->Metodo();