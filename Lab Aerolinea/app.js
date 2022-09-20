function precioPasaje() {
  let pasajeros = Number(document.getElementById("pasajeros").value);
  let ciudad = document.getElementById("lista").value;
  let pesoMaleta = Number(document.getElementById("maletas").value);
  let tipoSilla = document.getElementById("silla").value;
  let totalSilla = 0;
  let base = 0;
  let pesoAdicional = 0;
  let totalPago;
  //Base para las ciudades
  if (ciudad == "Bogota") {
    base = 250000 * pasajeros;
  }
  if (ciudad == "Medellin") {
    base = 300000 * pasajeros;
  }
  if (ciudad == "Cali") {
    base = 220000 * pasajeros;
  }
  if (ciudad == "Cartagena") {
    base = 150000 * pasajeros;
  }
  if (ciudad == "SantaMarta") {
    base = 200000 * pasajeros;
  }
  //Peso adicional
  if (pesoMaleta > 50) {
    pesoAdicional = (pesoMaleta - 50) * 15000;
  }
  // Tipo de silla
  if (tipoSilla == "Normal") {
    totalSilla = 0 * pasajeros;
  }
  if (tipoSilla == "Ejecutiva") {
    totalSilla = 20000 * pasajeros;
  }
  if (tipoSilla == "VIP") {
    totalSilla = 40000 * pasajeros;
  }
  totalPago = base + pesoAdicional + totalSilla;
  let factura = document.getElementById("factura");

  factura.innerHTML =
    "FACTURA DE VIAJE" +
    "<br>" +
    " " +
    "<br>" +
    "Ciudad de destino: " +
    ciudad +
    "<br>" +
    "Personas que viajan: " +
    pasajeros +
    "<br>" +
    "Peso de las maletas: " +
    pesoMaleta +
    "<br>" +
    "Tipo de sillas: " +
    tipoSilla +
    "<br>" +
    "Precio del viaje: " +
    base +
    "<br>" +
    "Precio adicional por maletas: " +
    pesoAdicional +
    "<br>" +
    "Precio de las sillas: " +
    totalSilla +
    "<br>" +
    "El total a pagar por el vuelo es: " +
    totalPago;
}
