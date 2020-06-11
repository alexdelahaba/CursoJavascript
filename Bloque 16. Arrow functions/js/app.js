//Explicacion arrow functions
// var aprendiendo;

// aprendiendo = () => {
//   console.log('aprendiendo');
// };

// aprendiendo();

// var aprendiendo2;
// aprendiendo2 = () => console.log('aprendiendo simplificado');
// aprendiendo2();

// var aprendiendo3;
// aprendiendo3 = (texto) =>
//   console.log('aprendiendo simplificado ' + texto + '.');
// aprendiendo3('con parámetros de entrada');

// const productos = ['disco', 'camiseta', 'guitarra', 'oro'];

// const letrasProductos = productos.map((producto) => {
//   return producto.length;
// });
// console.log(letrasProductos);

// const letrasProductosSimplificado = productos.map(
//   (producto) => producto.length
// );
// console.log(letrasProductosSimplificado);

// productos.forEach((producto) => console.log(producto));

console.log('Proyecto con arrow functions');

document.querySelector('#txtBtn').addEventListener('click', cargarTxt);
//primer then es para establecer una "conexion" con el archivo y el segundo es para devolvr los datos
function cargarTxt() {
  fetch('datos.txt')
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      document.querySelector('#resultado').innerHTML = data;
    })
    .catch(() => console.log('Se ha producido un error'));
}

//########################################################################
document.querySelector('#jsonBtn').addEventListener('click', cargarJSON);

function cargarJSON() {
  fetch('empleados.json')
    .then((res) => res.json())
    .then((resp) => {
      var html = '';
      resp.forEach(function (dato) {
        html += `
          <li>${dato.nombre}<->${dato.puesto} </li>
          `;
      });
      document.querySelector('#resultado').innerHTML = html;
    })
    .catch(() => console.log('Se ha producido un error'));
}

//########################################################################

document.querySelector('#apiBTN').addEventListener('click', cargarDatosAPI);

function cargarDatosAPI() {
  fetch('https://picsum.photos/list')
    .then((res) => res.json())
    .then((resp) => {
      console.log(resp);
      var html = '';
      resp.forEach(function (dato) {
        html += `
          <li>${dato.author} <a target="_blank" href="${dato.post_url}">Ver</a></li>
          `;
      });
      document.querySelector('#resultado').innerHTML = html;
    })
    .catch(() => console.log('Se ha producido un error'));
}
