var arrayPruebas = [1, 2, 3, 4, 5, 6];

//meter al final
arrayPruebas.push(7);
console.log(1, arrayPruebas);
//meter al principio
arrayPruebas.unshift(9);
console.log(2, arrayPruebas);
//eliminar ultimo elemento de un array
arrayPruebas.pop();
console.log(3, arrayPruebas);
//eliminar el primer elemento
arrayPruebas.shift();
console.log(4, arrayPruebas);
//eliminar el elemento
//siendo 3 el elemento a eliminar y 1 el numero de elementos a eliminar
arrayPruebas.splice(3, 1);
console.log(5, arrayPruebas);
//cambiar orden del array
arrayPruebas.reverse();
console.log(6, arrayPruebas);

//unir dos arrays
var array1 = [99, 52, 74];
var array2 = [34, 23, 9];
var arrayCompleto = array1.concat(array2);
console.log(7, arrayCompleto);

//ordenar array de numeros
arrayCompleto.sort(function (a, b) {
  return a - b;
});
console.log(8, arrayCompleto);
//orden inverso
arrayCompleto.sort(function (a, b) {
  return b - a;
});
console.log(9, arrayCompleto);
//ordenar strings
const frutas = ["kiwis", "fresas", "naranjas", "tomate"];
console.log(frutas);
frutas.sort();
console.log(frutas);
