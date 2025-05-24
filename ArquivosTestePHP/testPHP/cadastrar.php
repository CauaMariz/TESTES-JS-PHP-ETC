<?php

session_start();

require 'conexao.php';

$nameUser = trim($_POST['nomeUser']);
$idadeUser = trim($_POST['idadeUser']);

if (empty($nameUser) || empty($idadeUser)) {
  echo "Digite todos os campos!";
  echo "<script>location.href = 'index.php' </script>";
} else {


  $sql = $conexao->prepare('INSERT INTO alunos (nome,idade) VALUES (?,?)');

  if ($sql) {

    $sql->bind_param("si", $nameUser, $idadeUser);

    if ($sql->execute()) {
      echo "Cadastro concluido com sucesso!";
    } else {
      echo "Erro ao inserir dados!";
      echo "<script>location.href = 'index.php' </script>";
    }
  } else {
    echo "Erro no cadastro!";
    echo "<script>location.href = 'index.php' </script>";
  }
}
