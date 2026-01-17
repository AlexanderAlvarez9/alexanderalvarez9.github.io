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

  if (persona.cantante) {
    console.log("cantante");
  } else {
    console.log("No es cantante");
  }

  if (persona.dj) {
    console.log("dj");
  } else {
    console.log("No es dj");
  }

  if (persona.drone) {
    console.log("Piloto de drone");
  } else {
    console.log("No es Piloto de drone");
  }
}

imprimirProfesion(Jhon)
