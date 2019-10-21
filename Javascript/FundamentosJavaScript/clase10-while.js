var Jhon = {
  nombre: "Jhon",
  apellido: "Alvarez",
  edad: 29,
  peso: 73
}

console.log(`Al Inicio del año ${Jhon.nombre} pesaba ${Jhon.peso} kg`);

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentoDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = Jhon.peso - 3

var dias = 0

while (Jhon.peso > META) {
  // debugger
  if (comeMucho()) {
    aumentoDePeso(Jhon)
  }
  if (realizaDeporte()) {
    adelgazar(Jhon)
  }
  dias += 1
}

console.log(`Al fin del año ${Jhon.nombre} pesaba ${Jhon.peso.toFixed(1)} kg Pasaron ${dias} hasta que bajo de peso`);
