

var Pipe = {
  nombre: "Pipe",
  edad: 24,
  apellido: "Alvarez",
  altura: 1.70,
  libros: 5
}

var Sofy = {
  nombre: "Sofy",
  edad: 7,
  apellido: "Alvarez",
  altura: 1.20,
  libros: 50
}

var Mini = {
  nombre: "Mini",
  edad: 3,
  apellido: "Alvarez",
  altura: 0.20,
  libros: 1
}

var Yudis = {
  nombre: "Yudis",
  edad: 30,
  apellido: "Paquemina",
  altura: 1.50,
  libros: 20
}

var Jhon = {
  nombre: "Jhon",
  edad: 29,
  apellido: "Alvarez",
  altura: 1.74,
  libros: 4
}

const esAlta = persona => persona.altura > 1.6
const esBaja = persona => persona.altura < 1.6

var personas = [Pipe, Sofy, Mini, Yudis, Jhon]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

const pasarAltura = persona => ({
        ...persona,
      altura : persona.altura * 100
    }
)

var personasCms = personas.map(pasarAltura)

// console.log(personasAltas);
// console.log(personasBajas);
// console.log(personasCms);


// var acum = 0
// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].libros
//   console.log(acum);
// }

const sumaLibros = (acum, persona) => acum + persona.libros

var totalLibros = personas.reduce(sumaLibros, 0)

console.log(`El total de libros es: ${totalLibros}`);
