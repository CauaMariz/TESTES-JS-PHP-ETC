<?php
session_start();
require 'conexao.php';
function verificaDadosUser($nome, $conexao): bool
{
  $sql = $conexao->prepare("SELECT * FROM usuarios WHERE nome = ?");
  $sql->bind_param("s", $nome);
  $sql->execute();
  $result = $sql->get_result();

  if ($result->num_rows >= 1) {
    return true;
  } else {
    return false;
  }
}

function insertDadosUser($nome, $senha, $conexao): bool
{
  $sql = $conexao->prepare("INSERT INTO usuarios (nome,senha) VALUES(?,?)");
  $sql->bind_param("ss", $nome, $senha);
  $sql->execute();

  if ($sql->affected_rows > 0) {
    return true;
  } else {
    return false;
  }
}

if (empty($_POST['nomeUser']) || empty($_POST['senhaUser'])) {
  echo "<script>alert('  Voce precisa digitar seu nome e senha!')</script>";
  echo "<script>location.href='IndexCadastro.php'</script>";
} else {
  $nomeUser =  $_POST['nomeUser'];
  $senhaUser =  $_POST['senhaUser'];


  if (verificaDadosUser($nomeUser, $conexao) == true) {
    echo "Ja existe um usuario com um destes dados";
  } else {
    if (insertDadosUser($nomeUser, $senhaUser, $conexao) == true) {
      echo "Usuario cadastrado com sucesso! <br>";
      $newNomeUser = $_SESSION["nome"] = $nomeUser;
      $newSenhaUser = $_SESSION["senha"] = $senhaUser;

      echo "Bem vindo $newNomeUser! <br>";
      echo "<a href = 'logout.php'>Fazer logout</a>";
    }
  }
}
