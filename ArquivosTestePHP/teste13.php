<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>teste13</title>
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: #dedede;
    }
    section{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30vh;
      margin-left: 1vw;
    }
    input {
      display: block;
      border-radius: 6px;
      padding: 6px;
      border: 1px solid grey;
      margin-bottom: 1%;
    }

    input[type="submit"] {
      cursor: pointer;
    }

    form>p {
      background-color: grey;
      color: white;
      font-size: 18px;
      padding: 10px;
      border-radius: 10px;
    }
  </style>
</head>

<body>

  <?php
  $Nome = $_GET["Nome"] ?? "";
  $Senha = $_GET["Senha"] ?? "";


  function nome_e_senha($Nome, $Senha)
  {
    return ($Nome == "" ? "" : "O seu nome é: <b>$Nome</b>") . ($Senha == "" ? "" : ". A sua senha é: <b>$Senha</b>");
  }
  ?>

  <section>
    <form action="<?= $_SERVER["PHP_SELF"] ?>" method="get">
      <input type="text" placeholder="Informe seu nome" name="Nome" minlength="1" maxlength="20" pattern="[A-Za-zÀ-ÖØ-öø-ÿ ]+" title="O nome deve conter apenas letras." required>
      <input type="password" placeholder="Digite sua senha" name="Senha" minlength="8" maxlength="20" required>
      <input type="submit" value="Enviar">
      <p><?= nome_e_senha($Nome, $Senha) ?></p>
    </form>
  </section>

</body>

</html>