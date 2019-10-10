

var Pipe = {
  nombre: "Pipe",
  edad: 24,
  apellido: "Alvarez",
  altura: 1.70
}

var Sofy = {
  nombre: "Sofy",
  edad: 7,
  apellido: "Alvarez",
  altura: 1.20
}

var Mini = {
  nombre: "Mini",
  edad: 3,
  apellido: "Alvarez",
  altura: 0.20
}

var Yudis = {
  nombre: "Yudis",
  edad: 30,
  apellido: "Paquemina",
  altura: 1.50
}

var Jhon = {
  nombre: "Jhon",
  edad: 29,
  apellido: "Alvarez",
  altura: 1.74
}

const esAlta = persona => persona.altura > 1.6
const esBaja = persona => persona.altura < 1.6

var personas = [Pipe, Sofy, Mini, Yudis, Jhon]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas);
console.log(personasBajas);
