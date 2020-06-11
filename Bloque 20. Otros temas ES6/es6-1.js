//############################################//#endregion
console.log('####################### Maps #######################');

let cliente = new Map();

cliente.set('nombre', 'Juan');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 5215);

console.log(cliente);
console.log(cliente.get('nombre'));

//METODOS PARA UN MAP
console.log(cliente.size);
console.log(cliente.has('tipo'));

setTimeout(() => {
  cliente.delete('nombre');
  console.log(cliente);
  console.log(cliente.has('nombre'));
}, 2000);

setTimeout(() => {
  cliente.clear();
  console.log(cliente);
}, 4000);

//############################################//#endregion
console.log('####################### Más maps #######################');

const paciente = new Map([
  ['nombre', 'paciente'],
  ['habitacion', 'No definido'],
]);

setTimeout(() => {
  paciente.set('nombre', 'Fernando');
  paciente.set('habitacion', 400);
  console.log(2, paciente);
}, 2000);

console.log(paciente);

paciente.forEach((dato, index) => {
  console.log(index + ' - ' + dato);
});
