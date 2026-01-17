var fecha = new Date();
var hora = fecha.getHours();
var minuto = fecha.getMinutes();
var segundo = fecha.getSeconds();

var eHora = document.getElementById('pHora');
var eMinuto = document.getElementById('pMinuto');
var eSegundo = document.getElementById('pSegundo');

var tarde = 0;
if (hora>12) {
  hora = hora - 12
  tarde = 1
}

horat = hora.toString();
segundot = segundo.toString();

eHora.textContent = horat.padStart(2,'0');
eMinuto.textContent = minuto;

if (tarde = 1) {
  eSegundo.textContent = `${segundot.padStart(2,'0')} pm`
} else {
  eSegundo.textContent = segundot.padStart(2,'0')
}

function horaEnVivo() {
   segundo++;
   if (segundo > 59) {
     minuto++;
     segundo = 0
   }
   if (minuto > 59) {
     hora++;
     minuto = 0;
   }

  horat = hora.toString();
  segundot = segundo.toString();

  eHora.textContent = horat.padStart(2,'0');
  eMinuto.textContent = minuto


  if (tarde = 1) {
    eSegundo.textContent = `${segundot.padStart(2,'0')} pm`
  } else {
    eSegundo.textContent = segundo
  }
}

var actualiza = setInterval(horaEnVivo, 1000)
