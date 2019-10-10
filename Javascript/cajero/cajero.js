class Billete
{
  constructor(v, c)
  {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;
    this.imagen.src = imagenes[this.valor];
  }
}

var caja = [];

var imagenes = [];
imagenes[50] = "50.png";
imagenes[20] = "20.png";
imagenes[10] = "10.png";

var e = [];
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 10));
caja.push(new Billete(10, 10));

var dinero = 0;
var papeles;
var div;

var resultado = document.getElementById("resultado");
var valor = document.getElementById("valor_dinero");
var boton = document.getElementById("boton_dinero");
boton.addEventListener("click", calculoCajero);


function calculoCajero()
  {
    dinero = parseInt(valor.value);
    for (var b of caja)
    {
      if (dinero > 0)
      {
        div = Math.floor(dinero/b.valor);
        if (div > b.cantidad)
        {
          papeles = b.cantidad;
        }
        else
        {
          papeles = div;
        }
         e.push(new Billete(b.valor, papeles));
         dinero = dinero - (b.valor * papeles);
         b.cantidad = b.cantidad - papeles;
         console.log(caja);
      }
    }
    if (dinero > 0)
    {
        resultado.innerHTML = "Soy un cajero pobre :/";
    }
    else
    {
      for (bi of e)
      {
        if (bi.cantidad > 0)
          {
          resultado.innerHTML += bi.cantidad + " Billetes de " + "<img src=" + bi.imagen.src + " /><hr />";
          }
        }
      }
    }
