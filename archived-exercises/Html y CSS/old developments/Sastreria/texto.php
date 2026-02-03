<?

$variable1=$_POST["nombre"];
$variable2=$_POST["email"];
$variable3=$_POST["celular"];
$variable4=$_POST["texto"];

$ip = $_SERVER['REMOTE_ADDR'];
$fecha= date("h:i:s a - d/m/Y");
$guardar=fopen("texto.txt",a);


fwrite($guardar,
"-Fecha: ".$fecha."
-NOMBRE: ".$variable1."
-EMAIL: ".$variable2."
-CELULAR ".$variable3."
-SOLICITUD: ".$variable4."
-IP: ".$ip."

");

fclose($guardar);
header ("Location: http://sastreriars.xtrweb.com/inicio.html");
?>