var d = document.getElementById("dibujito");
var ancho = d.width;
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton_lineas");
boton.addEventListener("click", dibujoPorClick);

var lienzo = d.getContext("2d");

//console.log(lienzo);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var xi, yi, xf, yi;
  var xni, ynf;
  var colorcito = "red";
  var espacio = ancho / lineas;

  for (l = 0; l < lineas; l++)
  {
    xi = espacio * l;
    xf = espacio * (l + 1);
    yi = espacio * l;
    yf = espacio * (l + 1);
    xni = 300 - xi;
    ynf = espacio * (l + 1);
    dibujarlinea(colorcito, xi, 0, 300, yf);
    dibujarlinea(colorcito, 0, yi, xf, 300);
    dibujarlinea(colorcito, xni, 0, 0, ynf);
    dibujarlinea(colorcito, 300, xf, xni-10, 300);
  //  console.log(xi + "-" + xf + "-" + yi + "-" + yf + "-" + xni + "-" + ynf);
  }

  dibujarlinea("colorcito", 1,1,1,300)
  dibujarlinea("colorcito", 1,300,300,300)
  dibujarlinea("colorcito", 1,1,300,1)
  dibujarlinea("colorcito", 300,1,300,300)
}
