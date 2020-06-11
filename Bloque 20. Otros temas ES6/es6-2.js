//############################################//#endregion
console.log('####################### Iteradores #######################');

function crearIterador(carrito) {
  var i = 0;
  return {
    siguiente: () => {
      var fin = i >= carrito.length;
      var valor = !fin ? carrito[i++] : undefined;
      return {
        fin: fin,
        valor: valor,
      };
    },
  };
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());

//############################################//#endregion
console.log('####################### Generadores #######################');

function* crearGenerador() {
  yield 1;
  yield 'hola';
  yield 3 + 3;
  yield true;
}

const iterador = crearGenerador();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);

function* nuevoGenerador(carrito) {
  for (var item of carrito) {
    yield item;
  }
}

let iteradorNuevo = nuevoGenerador(carrito);

console.log(iteradorNuevo.next().value);
console.log(iteradorNuevo.next().value);
console.log(iteradorNuevo.next().value);
console.log(iteradorNuevo.next().value);
console.log(iteradorNuevo.next().value);
