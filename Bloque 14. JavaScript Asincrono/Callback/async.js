//Callbacks en forEach

const ciudades = ['Paris', 'Praga', 'Estambul', 'Londres'];

//Inline callback
ciudades.forEach(function (ciudad) {
  console.log(ciudad);
});

console.log('########################################################');

//Con funcion definida
function callbackCiudad(ciudad) {
  console.log(ciudad);
}
ciudades.forEach(callbackCiudad);

console.log('########################################################');

//ciudades se imprimen a los dos segundos
function mostrarCiudadesEnHTML() {
  setTimeout(function () {
    let html = '';
    ciudades.forEach(function (ciudad) {
      html += `<p>${ciudad}</p>`;
    });
    document.querySelector('#app').innerHTML = html;
  }, 2000);
}
mostrarCiudadesEnHTML();

//se añade un pais nuevo a los 3 segundos
function nuevaCiudad(pais, callback) {
  setTimeout(function () {
    ciudades.push(pais);
    callback();
  }, 3000);
}

//el segudno parametro es simplemente una funcion que se va a ejecutar cuando se ejecute la funcion ueva ciudad
nuevaCiudad('Roma', mostrarCiudadesEnHTML);
nuevaCiudad('New York', mostrarCiudadesEnHTML);
