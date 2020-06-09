//constructores
function Seguro(marca, anio, tipo) {
  this.marca = marca;
  this.anio = anio;
  this.tipo = tipo;
}

const objetosMarcas = [
  { nombre: "", coeficiente: 0 },
  { nombre: "Americano", coeficiente: 1.15 },
  { nombre: "Asiatico", coeficiente: 1.05 },
  { nombre: "Europeo", coeficiente: 1.35 },
];

function Interfaz() {}
function mostrarError(mensaje, tipo) {
  const div = document.createElement("div");
  if (tipo === "error") {
    div.classList = "error";
  } else {
    div.classList = "correcto";
  }

  div.innerHTML = `${mensaje}`;
  formulario.insertBefore(div, document.querySelector(".form-group"));

  setTimeout(() => {
    div.style.display = "none";
  }, 3000);
}

const formulario = document.querySelector("#cotizar-seguro");
formulario.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const marca = document.querySelector("#marca");
  const marcaSeleccionada = marca.options[marca.selectedIndex].value;

  const anio = document.querySelector("#anio");
  const anioSeleccionado = anio.options[anio.selectedIndex].value;

  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  const interfaz = new Interfaz();

  if (marcaSeleccionada === "" || anioSeleccionado === "" || tipo === "") {
    mostrarError("Faltan datos", "error");
  } else {
    const resultadosAnterior = document.querySelector("#resultado div");
    if (resultadosAnterior !== null) {
      resultadosAnterior.remove();
    }

    const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
    const cantidad = cotizarSeguro(seguro);
    seguro.marca = objetosMarcas[Number(marcaSeleccionada)].nombre;
    mostrarResultado(seguro, cantidad);
  }
});

const max = new Date().getFullYear(),
  min = max - 20;

const selectAnios = document.querySelector("#anio");

for (var i = max; i >= min; i--) {
  var option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  selectAnios.appendChild(option);
}

function cotizarSeguro(seguro) {
  const base = 2000;
  var cantidad;

  cantidad = objetosMarcas[Number(seguro.marca)].coeficiente * base;
  seguro.marca = objetosMarcas[Number(seguro.marca)].nombre;

  var costeAnio = max - seguro.anio;

  cantidad = cantidad * (1 - 0.03 * costeAnio);

  if (seguro.tipo === "basico") {
    cantidad = cantidad * 1.25;
  } else {
    cantidad = cantidad * 1.75;
  }
  return cantidad;
}

function mostrarResultado(seguro, cantidad) {
  const resultado = document.querySelector("#resultado");

  const div = document.createElement("div");
  div.innerHTML = `
<p>Tu resumen:</p>
<p>Marca: ${seguro.marca},</p>
<p>Año: ${seguro.anio},</p>
<p>Tipo: ${seguro.tipo},</p>
<p>TOTAL = ${cantidad}€</p>
`;

  const spinner = document.querySelector("#cargando img");
  spinner.style.display = "block";

  setTimeout(() => {
    resultado.appendChild(div);
    spinner.style.display = "none";
  }, 3000);
}
