document.addEventListener("click", dibujarMouse);

// console.log(click);

//Otros eventos: 
//mousedown, keyup y keydown 
//click, dblclick, mouseup, mousedown.

var cuadro = document.getElementById("maublero");
var papel = cuadro.getContext("2d");


function dibujarMouse(detalle)
{
  console.log(detalle)
  var x = detalle.layerX;
  var y = detalle.layerX;

  dibujarPunto("red", detalle.layerX, detalle.layerY, papel);
}

function dibujarPunto(color, xi, yi, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 1;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xi + 1, yi + 1);
  lienzo.stroke();
  lienzo.closePath();
}
