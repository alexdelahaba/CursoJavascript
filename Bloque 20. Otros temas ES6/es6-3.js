//############################################//#endregion
console.log(
  '####################### Expresiones regulares #######################'
);

var valor, expresionRegular;
//ejemplo 1
expresionRegular = /[0123456789]/;
valor = 1963;
console.log(1, expresionRegular.test(valor));
valor = 'HOLA ';
console.log(2, expresionRegular.test(valor));

//reglas =>
// \d para numeros
// - es -

//ejemplo =>

var ejemplo1 = '21-10-2018';
// cifra cifra guion cifra cifra guion cifra cifra cifra cifra
var expresionRegular1 = /\d\d-\d\d-\d\d\d\d/;
console.log(3, expresionRegular1.test(ejemplo1));

let exprReg = /\d\d:\d\d/;
let ejemplo = '10:58';

console.log(4, exprReg.test(ejemplo));

ejemplo = '20:30:50';
console.log(5, exprReg.test(ejemplo));

ejemplo = 'hola';
console.log(6, exprReg.test(ejemplo));

exprReg = /\d+/;
ejemplo = 16486465131465465;
console.log(7, exprReg.test(ejemplo));

//Negar la expreison
exprReg = /[^0-9]/;
ejemplo = '1234';
console.log(8, exprReg.test(ejemplo));
ejemplo = 'hola';
console.log(9, exprReg.test(ejemplo));

//{1,2}
exprReg = /\d{2}-\d{1,2}/;
ejemplo = '12-12';
console.log(10, exprReg.test(ejemplo));
ejemplo = '2-12';
console.log(11, exprReg.test(ejemplo));

//letras o numeros

//w significa solo numeros y letras
exprReg = /\w+/;
ejemplo = '12hdfj12';
console.log(12, exprReg.test(ejemplo));

ejemplo = ' ';
console.log(13, exprReg.test(ejemplo));

//solo mayus
exprReg = /([A-Z])\w+/;
ejemplo = '12hdfj12';
console.log(14, exprReg.test(ejemplo));

ejemplo = 'ASAS';
console.log(15, exprReg.test(ejemplo));

//solo minus
exprReg = /([a-z])\w+/;
ejemplo = 'asasasa';
console.log(16, exprReg.test(ejemplo));

ejemplo = 'ASAS';
console.log(17, exprReg.test(ejemplo));
