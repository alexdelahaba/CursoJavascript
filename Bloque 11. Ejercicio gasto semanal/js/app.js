//Variables
const presupuestoUsuario = prompt("¿Cual es el presupuesto del que dispones?");
const formulario = document.querySelector("#agregar-gasto");
var cantidadPresupuesto;

//clases e interfaces
class Presupuesto {
  constructor(presupuestoSemanal) {
    this.presupuestoSemanal = Number(presupuestoSemanal);
    this.restante = Number(presupuestoSemanal);
  }

  presupuestoRestante(cantidad = 0) {
    return (this.restante -= Number(cantidad));
  }
}

//event listener

document.addEventListener("DOMContentLoaded", () => {
  if (presupuestoUsuario === null || presupuestoUsuario === "") {
    window.location.reload();
  } else {
    cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
    insertarPresupuesto(cantidadPresupuesto.presupuestoRestante());
  }
});

formulario.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const nombreGasto = document.querySelector("#gasto").value;
  const cantidadGasto = document.querySelector("#cantidad").value;

  if (checkCampos(nombreGasto) && checkCampos(cantidadGasto)) {
    agregarGastoLista(nombreGasto, cantidadGasto);
  } else {
    alert("Por favor, revisa los datos introducidos");
    formulario.reset();
  }
});

//fucniones

function insertarPresupuesto(cantidadPresupuesto) {
  const presupuestoSpan = document.querySelector("span#total");
  const restanteSpan = document.querySelector("span#restante");

  presupuestoSpan.innerHTML = cantidadPresupuesto;
  restanteSpan.innerHTML = cantidadPresupuesto;
}

function checkCampos(campo) {
  if (campo) {
    return true;
  } else {
    return false;
  }
}

function agregarGastoLista(nombreGasto, cantidadGasto) {
  const gastosListado = document.querySelector("#gastos ul");

  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `
    ${nombreGasto}
    <span class="badge badge-primary badge-pill">${cantidadGasto}€</span>
    `;
  gastosListado.appendChild(li);
  actualizarGasto(cantidadGasto);
}

function actualizarGasto(cantidadARestar) {
  const restante = document.querySelector("#restante");
  const presupuestoTotal = document.querySelector("#total");
  restante.innerHTML -= Number(cantidadARestar);

  if (restante.innerHTML < presupuestoTotal.innerHTML / 2) {
    document.querySelector(".restante").classList.remove("alert-success");
    document.querySelector(".restante").classList.add("alert-warning");
  } else {
    if (
      document.querySelector(".restante").classList.contains("alert-warning")
    ) {
      document.querySelector(".restante").classList.remove("alert-warning");
      document.querySelector(".restante").classList.add("alert-success");
    }
  }
  if (restante.innerHTML < presupuestoTotal.innerHTML / 4) {
    document
      .querySelector(".restante")
      .classList.remove("alert-success", "alert-warning");
    document.querySelector(".restante").classList.add("alert-danger");
  }
}
