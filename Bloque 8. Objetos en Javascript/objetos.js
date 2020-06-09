//Object literal
//MUY IMPORTANTE EL THIS.SALARIO, YA QUE HACE PERMITE HACER REFERENCIA AL SALARIO DEL OBJETO
const cliente = {
  nombre: "Juan",
  salario: 200,
  tipoCliente: function () {
    var tipo;
    if (this.salario > 1000 && this.salario <= 5000) {
      tipo = "Gold";
    } else if (this.salario > 5000) {
      tipo = "Platino";
    } else {
      tipo = "Normal";
    }
    return tipo;
  },
};
console.log(cliente.tipoCliente());

//####################################################################################################################

//Forma clásica de crear objetos
function nuevoCliente(nombre, salario) {
  this.nombre = nombre;
  this.salario = salario;
  this.tipoCliente = function () {
    var tipo;
    if (this.salario > 1000 && this.salario <= 5000) {
      tipo = "Gold";
    } else if (this.salario > 5000) {
      tipo = "Platino";
    } else {
      tipo = "Normal";
    }
    return tipo;
  };
}

const cliente2 = new nuevoCliente("Pedro", 3000);

console.log(cliente2);
console.log(cliente2.tipoCliente());

//####################################################################################################################
//Otros constructures

const nombrePersona = "Juanito";
const nombrePersona2 = new String("Pedro");

console.log(123, typeof nombrePersona);
console.log(456, typeof nombrePersona2);
//siempre que se use el new se crea un objeto.

//####################################################################################################################

//Object.create()

const clientePepe = Object.create(cliente);
clientePepe.nombre = "Pepe";
clientePepe.salario = 2500;
console.log(clientePepe);
console.log(clientePepe.tipoCliente());
