const lenguajes = ["java", "c++", "javascript", "groovy", "sql"];

//for
for (var i = 0; i < lenguajes.length; i++) {
  console.log(lenguajes[i]);
}
console.log("#################################################");
//for each
lenguajes.forEach((element) => {
  console.log(element);
});
console.log("#################################################");
//map para recorrer un array
const carrito = [
  { id: 1, producto: "fresas" },
  { id: 2, producto: "manzanas" },
  { id: 3, producto: "kiwi" },
  { id: 4, producto: "melocoton" },
];

const nombres = carrito.map((item) => {
  console.log(item.producto);
  return item.producto;
});
console.log(nombres);

console.log("#################################################");
//for in
var automovil = {
  modelo: "cañonero",
  motor: "6 ejes",
  anio: "1950",
  marca: "Ford",
};
for (let item in automovil) {
  console.log(item);
}

console.log("#################################################");
//for of
for (let item of carrito) {
  console.log(item);
}

console.log("#################################################");
const ciudades = ["Madrid", "Paris", "Praga", "Budapest"];
const ordenes = new Set([123, 213, 122, 322]);
const datos = new Map();
datos.set("nombre", "Juan");
datos.set("profesion", "developer");

//Entries iterador

for (let item of ciudades.entries()) {
  console.log(item);
}

console.log("#################################################");

for (let item of ordenes.entries()) {
  console.log(item);
}

console.log("#################################################");

for (let item of datos.entries()) {
  console.log(item);
}
