//Promises

//Primero se gestionan el resolve y el reject y luego se llama con el promesa.then()
//dentro del then() se genera una function cuyo valor del mensaje será lo que manda el resolve en la linea 7
const esperando = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('Se ha ejectuado');
  }, 5000);
});

esperando.then(function (mensaje) {
  console.log(mensaje);
});

const aplicarDescuento = new Promise(function (resolve, reject) {
  //simulando un error
  const descuento = false;

  if (descuento) {
    resolve('Descuento aplicado correctamente');
  } else {
    reject('Descuento not found');
  }
});

aplicarDescuento
  .then(function (mensaje) {
    console.log(mensaje);
  })
  .catch(function (error) {
    console.log(error);
  });
