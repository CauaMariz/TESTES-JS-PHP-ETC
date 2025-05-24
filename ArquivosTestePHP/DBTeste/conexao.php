<?php 

$local = 'localhost';
$nome = "root";
$senha = "";
$banco = "sessaologin";

$conexao = new mysqli($local,$nome,$senha,$banco);

if($conexao->error){
  echo "ERRO DE CONEXAO";
}