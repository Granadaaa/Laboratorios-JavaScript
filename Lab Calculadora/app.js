function escribirCero() {
  let resultado = document.getElementById("resultado");
  resultado.value += 0;
  return resultado;
}

function punto() {
  let resultado = document.getElementById("resultado");
  resultado.value += ".";
  return resultado;
}

function escribirUno() {
  let resultado = document.getElementById("resultado");
  resultado.value += 1;
  return resultado;
}
function escribirDos() {
  let resultado = document.getElementById("resultado");
  resultado.value += 2;
  return resultado;
}
function escribirTres() {
  let resultado = document.getElementById("resultado");
  resultado.value += 3;
  return resultado;
}
function escribirCuatro() {
  let resultado = document.getElementById("resultado");
  resultado.value += 4;
  return resultado;
}
function escribirCinco() {
  let resultado = document.getElementById("resultado");
  resultado.value += 5;
  return resultado;
}
function escribirSeis() {
  let resultado = document.getElementById("resultado");
  resultado.value += 6;
  return resultado;
}
function escribirSiete() {
  let resultado = document.getElementById("resultado");
  resultado.value += 7;
  return resultado;
}
function escribirOcho() {
  let resultado = document.getElementById("resultado");
  resultado.value += 8;
  return resultado;
}
function escribirNueve() {
  let resultado = document.getElementById("resultado");
  resultado.value += 9;
  return resultado;
}
function escribirMas() {
  let resultado = document.getElementById("resultado");
  resultado.value += "+";
  return resultado;
}
function escribirMenos() {
  let resultado = document.getElementById("resultado");
  resultado.value += "-";
  return resultado;
}
function escribirMultiplicacion() {
  let resultado = document.getElementById("resultado");
  resultado.value += "*";
  return resultado;
}
function escribirDivision() {
  let resultado = document.getElementById("resultado");
  resultado.value += "/";
  return resultado;
}
function escribirRaizCubica() {
  let resultado = document.getElementById("resultado");
  resultado.value = Math.cbrt(resultado.value);
  return resultado;
}
function escribirRaiz() {
  let resultado = document.getElementById("resultado");
  resultado.value = Math.sqrt(resultado.value);
  return resultado;
}
function escribirPotencia2() {
  let resultado = document.getElementById("resultado");
  resultado.value = Math.pow(resultado.value, 2);
  return resultado;
}
function escribirPotencia3() {
  let resultado = document.getElementById("resultado");
  resultado.value = Math.pow(resultado.value, 3);
  return resultado;
}
function escribirPI() {
  let resultado = document.getElementById("resultado");
  resultado.value = Math.PI;
  return resultado;
}

function borrar() {
  let resultado = document.getElementById("resultado");
  resultado.value = "";
  return resultado;
}
function resultado() {
  let resultado = document.getElementById("resultado");
  resultado.value = eval(resultado.value);
  return resultado;
}

function euler() {
  let resultado = document.getElementById("resultado");
  resultado.value = Math.E;
  return resultado;
}

function porcentaje() {
  let resultado = document.getElementById("resultado");
  resultado.value = resultado.value / 100;
  return resultado;
}
