function hawaiana() {
  var canHawa = Number(document.getElementById("hawaiana").value);
  if (canHawa < 0) {
    canHawa = 0;
  }
  let pagoHawa = canHawa * 35000;
  let total = [pagoHawa, canHawa];
  return total;
}

function jamon() {
  var canJamon = Number(document.getElementById("jamon").value);
  if (canJamon < 0) {
    canJamon = 0;
  }
  pagoJam = canJamon * 25000;
  let total = [pagoJam, canJamon];
  return total;
}

function peperoni() {
  var canPepe = Number(document.getElementById("peperoni").value);
  if (canPepe < 0) {
    canPepe = 0;
  }
  pagoPepe = canPepe * 40000;
  let total = [pagoPepe, canPepe];
  return total;
}

function maiz() {
  var canMaiz = Number(document.getElementById("maiz").value);
  if (canMaiz < 0) {
    canMaiz = 0;
  }
  pagoMaiz = canMaiz * 45000;
  let total = [pagoMaiz, canMaiz];
  return total;
}

function estofada() {
  var canEstofada = Number(document.getElementById("estofada").value);
  if (canEstofada < 0) {
    canEstofada = 0;
  }
  pagoEstofa = canEstofada * 50000;
  let total = [pagoEstofa, canEstofada];
  return total;
}

function coca() {
  var canCoca = Number(document.getElementById("coca").value);
  if (canCoca < 0) {
    canCoca = 0;
  }
  pagoCoca = canCoca * 5000;
  let total = [pagoCoca, canCoca];
  return total;
}

function manzana() {
  var canManzana = Number(document.getElementById("manzana").value);
  if (canManzana < 0) {
    canManzana = 0;
  }
  pagoManzana = canManzana * 4500;
  let total = [pagoManzana, canManzana];
  return total;
}

function hit() {
  var canHit = Number(document.getElementById("hit").value);
  if (canHit < 0) {
    canHit = 0;
  }
  pagoHit = canHit * 4000;
  let total = [pagoHit, canHit];
  return total;
}

function agua() {
  var canAgua = Number(document.getElementById("agua").value);
  if (canAgua < 0) {
    canAgua = 0;
  }
  if (canAgua < 0) {
    canAgua = 0;
  }
  pagoAgua = canAgua * 3500;
  let total = [pagoAgua, canAgua];
  return total;
}

function alitas() {
  var canAlitas = Number(document.getElementById("alitas").value);
  if (canAlitas < 0) {
    canAlitas = 0;
  }
  pagoAlitas = canAlitas * 10000;
  let total = [pagoAlitas, canAlitas];
  return total;
}

function canela() {
  var canCanela = Number(document.getElementById("canela").value);
  if (canCanela < 0) {
    canCanela = 0;
  }
  pagoCanela = canCanela * 5000;
  let total = [pagoCanela, canCanela];
  return total;
}

function palitos() {
  var canPalitos = Number(document.getElementById("palitos").value);
  if (canPalitos < 0) {
    canPalitos = 0;
  }
  pagoPalitos = canPalitos * 7000;
  let total = [pagoPalitos, canPalitos];
  return total;
}

function panes() {
  var canPanes = Number(document.getElementById("panes").value);
  if (canPanes < 0) {
    canPanes = 0;
  }
  pagoPanes = canPanes * 5000;
  let total = [pagoPanes, canPanes];
  return total;
}

function galletas() {
  var canGalletas = Number(document.getElementById("galletas").value);
  if (canGalletas < 0) {
    canGalletas = 0;
  }
  pagoGalletas = canGalletas * 5000;
  let total = [pagoGalletas, canGalletas];
  return total;
}

function total() {
  let totalPagar =
    hawaiana()[0] +
    jamon()[0] +
    peperoni()[0] +
    maiz()[0] +
    estofada()[0] +
    coca()[0] +
    manzana()[0] +
    hit()[0] +
    agua()[0] +
    alitas()[0] +
    canela()[0] +
    palitos()[0] +
    panes()[0] +
    galletas()[0] +
    1500;

  let factura = document.getElementById("factura");

  let direccion = document.getElementById("direccion").value;

  factura.innerHTML =
    `
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Pizza Hawaiana</td>
            <td>` +
    hawaiana()[1] +
    `</td>
            <td>` +
    hawaiana()[0] +
    `</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Pizza de Jamon y Queso</td>
            <td>` +
    jamon()[1] +
    `</td>
            <td>` +
    jamon()[0] +
    `</td>
          </tr>
          <tr>
          <th scope="row">3</th>
          <td>Pizza de Peperoni</td>
          <td>` +
    peperoni()[1] +
    `</td>
          <td>` +
    peperoni()[0] +
    `</td>
        </tr>
  
        <tr>
        <th scope="row">4</th>
        <td>Pizza de Maiz y Tocineta</td>
        <td>` +
    maiz()[1] +
    `</td>
        <td>` +
    maiz()[0] +
    `</td>
      </tr>
  
      <tr>
          <th scope="row">5</th>
          <td>Pizza Super Estofada</td>
          <td>` +
    estofada()[1] +
    `</td>
          <td>` +
    estofada()[0] +
    `</td>
        </tr>
  
        <tr>
        <th scope="row">6</th>
        <td>Coca-Cola</td>
        <td>` +
    coca()[1] +
    `</td>
        <td>` +
    coca()[0] +
    `</td>
      </tr>
  
      <tr>
      <th scope="row">7</th>
      <td>Manzana</td>
      <td>` +
    manzana()[1] +
    `</td>
      <td>` +
    manzana()[0] +
    `</td>
    </tr>
  
    <tr>
    <th scope="row">8</th>
    <td>Jugo Hit</td>
    <td>` +
    hit()[1] +
    `</td>
    <td>` +
    hit()[0] +
    `</td>
  </tr>
  
  <tr>
  <th scope="row">9</th>
  <td>Agua H2O</td>
  <td>` +
    agua()[1] +
    `</td>
  <td>` +
    agua()[0] +
    `</td>
  </tr>
  
  <tr>
  <th scope="row">10</th>
  <td>ALITAS BBQ X5</td>
  <td>` +
    alitas()[1] +
    `</td>
  <td>` +
    alitas()[0] +
    `</td>
  </tr>
  
  <tr>
  <th scope="row">11</th>
  <td>ROLLOS DE CANELA X5</td>
  <td>` +
    canela()[1] +
    `</td>
  <td>` +
    canela()[0] +
    `</td>
  </tr>
  
  <tr>
  <th scope="row">12</th>
  <td>PALITOS DE QUESO X5</td>
  <td>` +
    palitos()[1] +
    `</td>
  <td>` +
    palitos()[0] +
    `</td>
  </tr>
  
  <tr>
  <th scope="row">13</th>
  <td>PANES DE AJO X10</td>
  <td>` +
    panes()[1] +
    `</td>
  <td>` +
    panes()[0] +
    `</td>
  </tr>
  
  <tr>
  <th scope="row">14</th>
  <td>GALLETAS DE CHOCOLATE x5</td>
  <td>` +
    galletas()[1] +
    `</td>
  <td>` +
    galletas()[0] +
    `</td>
  </tr>
  
        </tbody>
      </table>
    `;

  let totalResult = document.getElementById("total");

  if (totalPagar == 1500) {
    totalResult.innerHTML = `      <br>
<div style="justify-content: center; align-items: center; font-size: 60px">Total a Pagar Mas Envio: <br> $0 </div>`;
  } else {
    totalResult.innerHTML =
      `      <br>
<div style="justify-content: center; align-items: center; font-size: 60px">Total a Pagar Mas Envio: <br> $` +
      totalPagar +
      `<br> El domicilio será enviado a la dirección: <br> ` +
      direccion +
      `</div>`;
  }
}
