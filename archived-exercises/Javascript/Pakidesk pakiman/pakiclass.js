class Pakiman
{
  constructor(n, v, a, t)
  {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.tipo = t;

    this.imagen.src = imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
//    document.write("<p>");
    document.write("<br /><strong>" + this.nombre + "</strong>");
    document.write("<br />Vida: " + this.vida + "<br />");
    document.write("Ataque: " + this.ataque + "<hr />");
  //  document.write("</p>");
  }
}
