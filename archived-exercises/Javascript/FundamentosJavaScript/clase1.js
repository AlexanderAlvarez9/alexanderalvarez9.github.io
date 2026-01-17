var nombre = "Jhony", apellido = "Alvarez"
var edad = 28

var nombreMayusculas = nombre.toUpperCase();
var apellidoMinisculas = apellido.toLowerCase();
var primeraLetra = nombre.charAt(0);
var cantidadLetras = nombre.length;

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`
var str = nombre.substr(nombre.length-1)



console.log("hola " + nombreMayusculas +" "+ apellidoMinisculas)
console.log("Tengo " + edad);

console.log(nombreCompleto);
