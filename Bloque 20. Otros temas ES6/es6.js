console.log('#######################OBJETOS#######################');
//Primer ejempplo
var cliente = {
  nombre: 'Pepe',
  tipo: 'Premium',
};
console.log(cliente);

({ nombre, tipo } = cliente);

console.log(cliente);

//segudno ejemplo

const clienteBanco = {
  tipo: 'Premium',
  nombre: 'Antonio',
  datos: {
    ubicacion: {
      ciudad: 'Cordoba',
      pais: 'España',
    },
    cuenta: {
      desde: '10-12-2015',
      saldo: 4000,
    },
  },
};

let {
  datos: { ubicacion },
} = clienteBanco;
console.log(ubicacion);

let {
  datos: { cuenta },
} = clienteBanco;

console.log(cuenta.saldo);
console.log(clienteBanco.datos.cuenta.saldo);
//############################################//#endregion
console.log('#######################ARRAY#######################');

const ciudades = ['Paris', 'Praga', 'Madrid', 'Barcelona'];

const [primera, segunda] = ciudades;
console.log(primera, segunda);

const [, , , ultima] = ciudades;

console.log(ultima);

//############################################//#endregion
console.log('#######################Symbol#######################');
const simbolo = Symbol();
console.log(typeof simbolo);

//############################################//#endregion
console.log('#######################Sets#######################');
//No admite duplicados!!!
var carrito = new Set();
carrito.add('Camisa');
carrito.add('Pijama');
carrito.add('Corbata');
carrito.add('Corbata');
carrito.add('Corbata');
carrito.add('Corbata');

console.log(carrito);
console.log(carrito.size);
console.log(carrito.has('Camisa'));
console.log(carrito.has('Pantalon'));
carrito.forEach((numero, index) => {
  //en un set llave y valor son iguales (por eso no puede ser repetidos)
  console.log(index + '-' + numero);
});

const arrayCarrito = [...carrito];
console.log('arrayCarrito', arrayCarrito);

let numeros = new Set([1, 5, 4, 5, 6, 9, 9, 9, 9, 5, 5, 5, 8, 8, 8]);
console.log(numeros);
console.log(numeros.size);
console.log(numeros.has(6));
setTimeout(() => {
  numeros.add(99);
  console.log(numeros.has(99));
}, 2000);

setTimeout(() => {
  numeros.clear();
  console.log(numeros);
}, 4000);

numeros.forEach((numero, index) => {
  //en un set llave y valor son iguales (por eso no puede ser repetidos)
  console.log(index + '-' + numero);
});
