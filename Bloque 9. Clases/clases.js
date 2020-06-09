class Cliente {
  constructor(nombre, apellido, saldo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.saldo = saldo;
  }

  imprimirSaldo() {
    return `Hola, ${this.nombre}, tu saldo es de: ${this.saldo}`;
  }

  retirarSaldo(cantidad) {
    return (this.saldo -= cantidad);
  }

  static bienvenido() {
    return "Bienvenida a nuestro banco";
  }
}

const Maria = new Cliente("Maria", "Pérez", 10000);
console.log(Maria);
console.log(Maria.imprimirSaldo());
Maria.retirarSaldo(111);
console.log(Maria.imprimirSaldo());
//Nótese que con static no hace falta tener una instancia
console.log(Cliente.bienvenido());

//###########################################################################

//Herencia con clases de javascript

class Empresa extends Cliente {
  constructor(nombre, apellido, saldo, telefono, tipo) {
    //apunta al constructor padre
    super(nombre, apellido, saldo);

    this.telefono = telefono;
    this.tipo = tipo;
  }
}

const empresa1 = new Empresa("Empresa1", "", 10000, 957845212, "Constructora");

console.log(empresa1);

console.log(empresa1.imprimirSaldo());
