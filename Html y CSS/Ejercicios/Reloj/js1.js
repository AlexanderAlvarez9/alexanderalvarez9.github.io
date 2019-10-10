


function horaEnVivo() {
  var tarde = 0
  var fecha = new Date();
  var dia = fecha.getDate();
  var hora = fecha.getHours();
  var minuto = fecha.getMinutes();
  var segundo = fecha.getSeconds();

  if (hora>12) {
  hora = hora - 12
  tarde = 1
  }
  var eHora = document.getElementById('pHora');
  var eMinuto = document.getElementById('pMinuto');
  var eSegundo = document.getElementById('pSegundo');

  eHora.textContent = hora
  eMinuto.textContent = minuto

  if (tarde = 1) {
    eSegundo.textContent = `${segundo} PM`
  } else {
    eSegundo.textContent = segundo
  }
}

var actualiza = setInterval(horaEnVivo, 1000)
