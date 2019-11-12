var teclas = {
  RIGHT: 39,
  UP: 38,
  LEFT: 37,
  DOWN: 40
};

document.addEventListener("keyup", dibujarConElTeclado);

//Otros eventos: 
//keyup y keydown 
var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
var colorcito = "red";

dibujarlinea(colorcito, x-1, y-1, x+1, y+1, papel);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarConElTeclado(evento)
{
  var movimiento = 15;
  switch (evento.keyCode) {
    case teclas.LEFT:
        dibujarlinea("colorcito", x, y, x - movimiento, y, papel);
        x = x - movimiento;
      break;
    case teclas.UP:
        dibujarlinea("colorcito", x, y, x, y - movimiento, papel);
        y = y - movimiento;
      break;
    case teclas.RIGHT:
        dibujarlinea("colorcito", x, y, x + movimiento, y, papel);
        x = x + movimiento;
      break;
    case teclas.DOWN:
        dibujarlinea("colorcito", x, y, x, y + movimiento, papel);
        y = y + movimiento;
      break;
    default:
        console.log("otra tecla");
    break;
  }

}
