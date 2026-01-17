var contador = 0

const llueve = () => Math.random() < 0.5

do {
  contador += 1
} while (!llueve());

if (contador == 1) {
console.log(`Fui a ver si Llovia ${contador} vez`);
} else {
    console.log(`Fui a ver si Llovia ${contador} veces`);
}

console.log(llueve);
