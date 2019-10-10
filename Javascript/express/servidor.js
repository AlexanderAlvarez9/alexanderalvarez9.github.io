var express = require("express");
var aplic = express();

aplic.get("/", inicio);
aplic.get("/sub", sub);

function inicio(peticion, resultado)
{
  resultado.send("Este es el home");
}

function sub(peticion, resultado)
{
  resultado.send("Este es el sub");
}

aplic.listen(8989);
