const formulario = document.querySelector('#formulario');
const ui = new Interfaz();
const cotizador = new API(
  '592e72bc303d2c82b04f47e5acf7884bb65e5c5568389a0cd3a816b5c029ae1e'
);

formulario.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const monedaSelect = document.querySelector('#moneda');
  const monedaSeleccionada =
    monedaSelect.options[monedaSelect.selectedIndex].value;

  const criptoSelect = document.querySelector('#criptomoneda');
  const criptoSeleccionada =
    criptoSelect.options[criptoSelect.selectedIndex].value;

  if (criptoSeleccionada !== '' && monedaSeleccionada !== '') {
    cotizador
      .obtenerValores(monedaSeleccionada, criptoSeleccionada)
      .then((data) => {
        ui.mostrarResultado(
          data.resultado.RAW,
          monedaSeleccionada,
          criptoSeleccionada
        );
      });
  } else {
    ui.mostrarMensaje(
      'Los dos campos son obligatorios',
      'alert bg-danger text-center'
    );
  }
});
