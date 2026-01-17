document.addEventListener("mousedown", clickactivado);
document.addEventListener("mouseup", clickSuelto);
document.addEventListener("mousemove", dibujarMouse);

var rstboton = document.getElementById('btn').addEventListener('click', deleteDraw);

//Otros eventos: 
//mousedown, keyup y keydown 
//click, dblclick.

var cuadro = document.getElementById("maublero");
var papel = cuadro.getContext("2d");
const borderColor = "black";
const pointColor = "green";
const ancho = 1;

var presionado = false;

function clickactivado()
{
  presionado = true;
}

function clickSuelto() {
  presionado = false;
}

function dibujarMouse(detalle)
{
  if (presionado == true) {
    console.log(detalle)
    var x = detalle.layerX;
    var y = detalle.layerX;
    dibujarPunto(pointColor, detalle.layerX, detalle.layerY, papel);
  }
}

function dibujarPunto(color, xi, yi, lienzo)
{
  lienzo.beginPath(); //arrancar un trazo con javascript
  lienzo.strokeStyle = color;
  lienzo.lineWidth = ancho;
  lienzo.moveTo(xi, yi); //$1 x $2 y  - desde
  lienzo.lineTo(xi + 1, yi + 1); //traza un linea lineTO -  hasta
  lienzo.stroke();
  lienzo.closePath();
}

//Border
for (let i = 0; i <= 300; i++) {
  dibujarPunto(borderColor, 0 , i, papel);
  dibujarPunto(borderColor, 299 , i, papel);
  dibujarPunto(borderColor, i , 0, papel);
  dibujarPunto(borderColor, i , 299, papel);
}


function deleteDraw(detalle) {
  papel.clearRect(0, 0, cuadro.width, cuadro.height);
}