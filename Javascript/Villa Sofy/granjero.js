var vp = document.getElementById("tablero");
document.addEventListener("keyup", dibujarCerdo);
console.log(teclas);

var papel = vp.getContext("2d");
var cantidad = aleatorio(1, 5);
var teclas = {
  RIGHT: 39,
  UP: 38,
  LEFT: 37,
  DOWN: 40
};

var xcerdo = 150;
var ycerdo = 150;

var fondo = {
  url: "tile.png",
  cargaOK: false
};
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};
var pollo = {
  url: "pollo.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollo);


  function dibujarCerdo(evento)
  {
    console.log(evento);

    var movimiento = 30;
    switch (evento.keyCode) {
      case teclas.LEFT:
          dibujar();
          papel.drawImage(cerdo.imagen, xcerdo - (movimiento+30), ycerdo)
          xcerdo = xcerdo - (movimiento+30);
        break;
      case teclas.UP:
          dibujar();
          papel.drawImage(cerdo.imagen, xcerdo, ycerdo - movimiento)
          ycerdo = ycerdo - movimiento;
        break;
      case teclas.RIGHT:
          dibujar();
          papel.drawImage(cerdo.imagen, xcerdo + (movimiento+30), ycerdo)
          xcerdo = xcerdo + (movimiento+30);
        break;
      case teclas.DOWN:
          dibujar();
          papel.drawImage(cerdo.imagen, xcerdo, ycerdo + movimiento)
          ycerdo = ycerdo + movimiento;
        break;
      default:
          console.log("otra tecla");
      break;
    }
}



  function dibujar(evento)
  {
    if(fondo.cargaOK)
    {
      papel.drawImage(fondo.imagen, 0, 0)
    }
    if(vaca.cargaOK)
    {
      console.log(cantidad);
      for (var v=0; v < cantidad; v++) {
        var x = aleatorio(0, 5);
        var y = aleatorio(0, 5);
        papel.drawImage(vaca.imagen, x * 80, y * 80)
        }
    }
    if(cerdo.cargaOK)
    {
        var x = aleatorio(0, 5);
        var y = aleatorio(0, 5);
        console.log(x + " " + y);
        //papel.drawImage(cerdo.imagen, x * 80, y * 80)
    }
    if(pollo.cargaOK)
    {
      for (var v=0; v < cantidad; v++) {
        var x = aleatorio(0, 4);
        var y = aleatorio(0, 4);
        papel.drawImage(pollo.imagen, x * 80, y * 80)
      }
    }
  }

  function aleatorio(min, max)
  {
    var r;
    r = Math.floor(Math.random()*(max-min+1))+min;
    return r;
  }

  function cargarCerdo()
  {
    cerdo.cargaOK = true;
    dibujar();
  }

  function cargarPollo()
  {
    pollo.cargaOK = true;
    dibujar();
  }

  function cargarFondo()
  {
    fondo.cargaOK = true;
    dibujar();
  }

  function cargarVaca()
  {
    vaca.cargaOK = true;
    dibujar();
  }
