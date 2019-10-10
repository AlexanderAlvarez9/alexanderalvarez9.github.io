var Jhon = {
  nombre: "Jhon",
  apellido: "Alvarez",
  edad: 28
}

var Dario = {
  nombre: "Sofy",
  apellido: "Linda",
  edad: 7
}

/*
function mostrarNombreMayuscula({nombre}) {
  console.log(nombre.toUpperCase());
}
*/

function mostrarNombreMayuscula(persona) {
  //var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase());
}

function saludo(persona) {
  var {nombre, edad} = persona;
  console.log(`Hola, mi nombre es ${nombre}, mi edad es ${edad}`)
}

function cumple(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  };
}


/*
mostrarNombreMayuscula(Jhon);
mostrarNombreMayuscula(Dario);
mostrarNombreMayuscula({nombre: "pepe"});
*/

saludo(Jhon);
saludo(Dario);
