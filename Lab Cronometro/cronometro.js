let timer;

function empezar() {
  timer = setInterval(contar, 1);
}
let mostrarMilisegundos = 0;
let mostrarSegundos = 0;
let mostrarMinutos = 0;
let mostrarHoras = 0;
//
let milisegundos = document.getElementById("milisegundos");
let segundos = document.getElementById("segundos");
let minutos = document.getElementById("minutos");
let horas = document.getElementById("horas");
milisegundos.innerHTML = "0000";
segundos.innerHTML = "00";
minutos.innerHTML = "00";
horas.innerHTML = "00";
//
function contar() {
  milisegundos.innerHTML = mostrarMilisegundos;
  mostrarMilisegundos++;
  //
  if (mostrarMilisegundos == 1000) {
    mostrarSegundos++;
    segundos.innerHTML = mostrarSegundos;
    mostrarMilisegundos = 0;
    ///
    if (mostrarSegundos == 60) {
      mostrarMinutos++;
      minutos.innerHTML = mostrarMinutos;
      mostrarSegundos = 0;
      ///
      if (mostrarMinutos == 60) {
        mostrarHoras++;
        horas.innerHTML = mostrarHoras;
        mostrarHoras = 0;
      }
    }
  }
}
function pausar() {
  clearInterval(timer);
}

function limpiar() {
  clearInterval(timer);
  milisegundos.innerHTML = "0000";
  segundos.innerHTML = "00";
  minutos.innerHTML = "00";
  horas.innerHTML = "00";
  mostrarMilisegundos = 0;
  mostrarSegundos = 0;
  mostrarMinutos = 0;
  mostrarHoras = 0;
}
