<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

<title>CORREO ENVIADO</title>

<style type="text/css">

</style>

</head>

<body>
	  
		<?php if(isset($_POST[enviar]))
			{
				
			$ip = $_SERVER['REMOTE_ADDR'];				
			$fecha= date("h:i:s a - d/m/Y");
				
			//recibo los datos
			$cuerpo = "Formulario enviado\n";
			$cuerpo = "IP: ". $ip;
			$cuerpo = "Fecha: ". $fecha;
			$cuerpo .= "Nombre: " . $_POST["nombre"] . "\n";
			$cuerpo .= "Email: " . $_POST["email"] . "\n";
			$cuerpo .= "Telefono: " . $_POST["telefono"] . "\n";
			$cuerpo .= "Ciudad: " . $_POST["ciudad"] . "\n";
			$cuerpo .= "Productos: " . $_POST["productos"] . "\n";
			$cuerpo .= "Comentario:\n" . $_POST["coment"] . "\n";
			$cabecera= $_POST["email"];
			mail("info@cristinaamano.com","CLIENTE WEB",$cuerpo,"From:$cabecera");
			echo "Su formulario fue enviado de manera satisfactoria. Muchas gracias";
			}
			else
			echo "Debe rellenar todos los datos del Formulario";
		?>
      
</body>
</html>
