<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <?php 
    $email=$_REQUEST["email"] ?? "";
    $senha=$_REQUEST["senha"] ?? "";

    if ($senha != 8 ){
      echo "teset";
    }

    if ($email=='' or $senha==''){

    }
    else{
      echo "Email: $email. Senha: $senha ";
    }

  ?>

  <form action="<?=$_SERVER["PHP_SELF"] ?>" method="get">

  <input type="email" placeholder="Email" name="email">
  <input type="password" placeholder="Senha" name="senha">
  <input type="submit" value="Enviar">
  </form>

</body>
</html>