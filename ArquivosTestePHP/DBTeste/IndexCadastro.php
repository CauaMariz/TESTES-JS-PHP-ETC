<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    button,label{
      display: block;
    }
  </style>
</head>
<body>
  
  <form action="PhpConfigCadastro.php" method="post">

    <label for="nomeUser">Digite seu nome</label>
    <input type="text" placeholder="Seu nome: " name="nomeUser" id="nomeUser" required>

    <label for="senhaUser">Digite sua senha</label>
    <input type="password" placeholder="Sua senha: " name="senhaUser"  id="senhaUser"  required>

    <button type="submit">Enviar</button>
  </form>

</body>
</html>