var Jhon = {
  nombre: "Jhon",
  apellido: "Alvarez",
  edad: 29,
  ingeniero: false,
  loco: true,
  cantante: false,
  dj: false,
  drone: true
}

var Juan = {
  nombre: "Juan",
  edad: 8
}

function imprimirProfesion(persona) {
  console.log(`${persona.nombre} es: `);

  if (persona.edad >= 18) {
    console.log("Es mayor de edad");
  } else {
    console.log("No es mayor de edad");
  }

  if (persona.ingeniero) {
    console.log("ingeniero");
  } else {
    console.log("No es ingeniero");
  }

  if (persona.loco) {
    console.log("Un Loco");
  } else {
    console.log("No esta loco");
  }

  if (persona.drone) {
    console.log("Piloto de drone");
  } else {
    console.log("No es Piloto de drone");
  }
}

const MAYORIA_DE_EDAD = 18

// const esMayorDeEdad = function (persona) {
//  return persona.edad >= MAYORIA_DE_EDAD
// }

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = ({ edad }) => edad < MAYORIA_DE_EDAD

function imprimirMayoriaDeEdad(persona) {
  if (persona.edad>18) {
    console.log(`${persona.nombre} es mayor De Edad`);
  } else {
    console.log(`${persona.nombre} es menor De Edad`);
  }
}

imprimirMayoriaDeEdad(Jhon)
imprimirMayoriaDeEdad(Juan)

function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log("Acceso Denegado")
  }
}

function MenorDeEdad(persona) {
  if (esMenorDeEdad(persona)) {
    console.log("Es Menor de Edad");
  }

}
