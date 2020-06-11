const autos = [
  {
    marca: 'BMW',
    modelo: 'Serie 3',
    year: 2012,
    precio: 30000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'Audi',
    modelo: 'A4',
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: 'Negro',
    transmision: 'automatico',
  },
  {
    marca: 'Ford',
    modelo: 'Mustang',
    year: 2015,
    precio: 20000,
    puertas: 2,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'Audi',
    modelo: 'A6',
    year: 2010,
    precio: 35000,
    puertas: 4,
    color: 'Negro',
    transmision: 'automatico',
  },
  {
    marca: 'BMW',
    modelo: 'Serie 5',
    year: 2016,
    precio: 70000,
    puertas: 4,
    color: 'Rojo',
    transmision: 'automatico',
  },
  {
    marca: 'Mercedes Benz',
    modelo: 'Clase C',
    year: 2015,
    precio: 25000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'Chevrolet',
    modelo: 'Camaro',
    year: 2018,
    precio: 60000,
    puertas: 2,
    color: 'Rojo',
    transmision: 'manual',
  },
  {
    marca: 'Ford',
    modelo: 'Mustang',
    year: 2019,
    precio: 80000,
    puertas: 2,
    color: 'Rojo',
    transmision: 'manual',
  },
  {
    marca: 'Dodge',
    modelo: 'Challenger',
    year: 2017,
    precio: 40000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'Audi',
    modelo: 'A3',
    year: 2017,
    precio: 55000,
    puertas: 2,
    color: 'Negro',
    transmision: 'manual',
  },
  {
    marca: 'Dodge',
    modelo: 'Challenger',
    year: 2012,
    precio: 25000,
    puertas: 2,
    color: 'Rojo',
    transmision: 'manual',
  },
  {
    marca: 'Mercedes Benz',
    modelo: 'Clase C',
    year: 2018,
    precio: 45000,
    puertas: 4,
    color: 'Azul',
    transmision: 'automatico',
  },
  {
    marca: 'BMW',
    modelo: 'Serie 5',
    year: 2019,
    precio: 90000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'Ford',
    modelo: 'Mustang',
    year: 2017,
    precio: 60000,
    puertas: 2,
    color: 'Negro',
    transmision: 'manual',
  },
  {
    marca: 'Dodge',
    modelo: 'Challenger',
    year: 2015,
    precio: 35000,
    puertas: 2,
    color: 'Azul',
    transmision: 'automatico',
  },
  {
    marca: 'BMW',
    modelo: 'Serie 3',
    year: 2018,
    precio: 50000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'BMW',
    modelo: 'Serie 5',
    year: 2017,
    precio: 80000,
    puertas: 4,
    color: 'Negro',
    transmision: 'automatico',
  },
  {
    marca: 'Mercedes Benz',
    modelo: 'Clase C',
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'Audi',
    modelo: 'A4',
    year: 2016,
    precio: 30000,
    puertas: 4,
    color: 'Azul',
    transmision: 'automatico',
  },
];

// console.log(autos);

// forEach
var coloresCoches = [];
autos.forEach((auto) => {
  //   console.log(auto.modelo);
  coloresCoches.push(auto.color);
});
// console.log(coloresCoches);
let ctdRojos = 0;
coloresCoches.forEach((valor) => {
  if (valor == 'Rojo') {
    ctdRojos++;
  }
});
// console.log(ctdRojos);

//#########################################################
// map
//IMPORTANTE: map cumple las mismas funciones que el forEach pero lo que devuelve es un nuevo array
let arrayDelMap = autos.map((auto) => {
  return auto;
});
// console.log(arrayDelMap);

let arrayDelMap2 = autos.map((auto) => {
  if (auto.marca == 'BMW') {
    return auto;
  }
});
// console.log(arrayDelMap2);

//#########################################################
// filter

let resultadoFilter = autos.filter((auto) => {
  return auto.marca === 'BMW';
});

// console.log(resultadoFilter);

resultadoFilter = autos.filter((auto) => {
  return auto.marca !== 'BMW';
});

// console.log(resultadoFilter);

resultadoFilter = autos.filter((auto) => {
  return auto.precio > 50000;
});

// console.log(resultadoFilter);

resultadoFilter = autos.filter((auto) => {
  return auto.precio > 50000 && auto.marca !== 'BMW';
});

// console.log(resultadoFilter);

//#########################################################
// find
//la principal diferencia con el filter es que el find lo que hace es devolver el primer valor que encuentra que cumple la condicion
let resultadoFind = autos.find((auto) => auto.modelo === 'Mustang');
// console.log(resultadoFind);

//#########################################################
// reduce
let resultadoReduce = autos.reduce((total, auto) => total + auto.precio, 0);
console.log(resultadoReduce);

const numeros = [1, 2, 3, 4, 5];

let resultadoReduce2 = numeros.reduce((total, numero) => total + numero * 2, 0);
console.log(resultadoReduce2);
//#########################################################
// some

let resultadoSome = autos.some((auto) => auto.marca === 'BMW');
console.log(resultadoSome);

resultadoSome = autos.some((auto) => auto.marca === 'Seat');
console.log(resultadoSome);
