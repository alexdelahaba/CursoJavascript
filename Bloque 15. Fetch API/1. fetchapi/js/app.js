document.querySelector('#txtBtn').addEventListener('click', cargarTxt);
//primer then es para establecer una "conexion" con el archivo y el segundo es para devolvr los datos
function cargarTxt() {
  fetch('datos.txt')
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector('#resultado').innerHTML = data;
    })
    .catch(function () {
      console.log('Se ha producido un error');
    });
}

//########################################################################
document.querySelector('#jsonBtn').addEventListener('click', cargarJSON);

function cargarJSON() {
  fetch('empleados.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (resp) {
      var html = '';
      resp.forEach(function (dato) {
        html += `
          <li>${dato.nombre}<->${dato.puesto} </li>
          `;
      });
      document.querySelector('#resultado').innerHTML = html;
    })
    .catch(function () {
      console.log('Se ha producido un error');
    });
}

//########################################################################

document.querySelector('#apiBTN').addEventListener('click', cargarDatosAPI);

function cargarDatosAPI() {
  fetch('https://picsum.photos/list')
    .then(function (res) {
      return res.json();
    })
    .then(function (resp) {
      console.log(resp);
      var html = '';
      resp.forEach(function (dato) {
        html += `
          <li>${dato.author} <a target="_blank" href="${dato.post_url}">Ver</a></li>
          `;
      });
      document.querySelector('#resultado').innerHTML = html;
    })
    .catch(function () {
      console.log('Se ha producido un error');
    });
}
