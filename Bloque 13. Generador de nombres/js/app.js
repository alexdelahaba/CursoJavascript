document
  .querySelector('#generar-nombre')
  .addEventListener('submit', cargarNombres);

function cargarNombres(evt) {
  evt.preventDefault();

  const origenNombre = document.querySelector('#origen').options[
    document.querySelector('#origen').selectedIndex
  ].value;

  const generoNombre = document.querySelector('#genero').options[
    document.querySelector('#genero').selectedIndex
  ].value;

  const cantidad = document.querySelector('#numero').value;

  let url = '';

  url += 'http://uinames.com/api?';

  if (cantidad && generoNombre && origenNombre) {
    url += `region=${origenNombre}&gender=${generoNombre}&amount=${cantidad}`;
  }

  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const nombres = JSON.parse(this.responseText);

      const htmlNombres = `<h2>Nombres generados</h2>`;
      htmlNombres += '<ul class="lista>';

      nombres.forEach(function (nombre) {
        htmlNombres += `
  <li>${nombre}</li>
  `;
      });
      htmlNombres += '</ul>';
    }

    document.querySelector('#resultado').innerHTML = htmlNombres;
  };

  xhr.send();
}
