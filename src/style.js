var boton = document.getElementById("botonmenu");
// var menu = document.addEventListener('click', addClassQS);
var menu = boton.addEventListener('click', addClassID)

// querySelector recibe:
//  .clase para las clases
//  etiqueta para etiquetas
//  #ID para los ids

function addClassQS() {
    let clase = document.querySelector('nav');
    clase.classList.add('is-active');
}

function addClassID() {
    let clase = document.getElementById("menub");

    if (clase.classList.contains('is-active')) {
        clase.classList.remove('is-active')
      } else {
        clase.classList.add('is-active')
      }
}