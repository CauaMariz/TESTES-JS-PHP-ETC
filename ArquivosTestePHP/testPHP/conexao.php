<?php 

$local = 'localhost';
$user = 'root';
$senha = '';
$banco = 'aluno';

$conexao = new mysqli($local,$user,$senha,$banco);

if ($conexao->connect_error){
  echo "Erro de conexao" . $conexao->error;
}
