var Jhon = {
  nombre: "Jhon",
  apellido: "Alvarez",
  edad: 29,
  peso: 73
}

console.log(`Al Inicio del año ${Jhon.nombre} pesaba ${Jhon.peso} kg`);

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentoDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random()
    if (random < 0.25) {
     aumentoDePeso(Jhon)
    } else if (random < 0.5) {
      adelgazar(Jhon)
    }
}

console.log(`Al fin del año ${Jhon.nombre} pesaba ${Jhon.peso.toFixed(1)} kg ${random.toFixed(2)}`);
