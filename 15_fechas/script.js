// FECHAS o DATE
// EJECUTAR node script.js

// FECHA DE AHORA
const ahora = new Date();
console.log(ahora);

// CREAR FECHA A PARTIR DE UNA STRING
const fecha = new Date('2021-05-01'); // Formato del String: AAAA-MM-DD (ISO)
console.log(fecha);

// OTROS FORMATOS DE STRING PARA FECHAS
// SHORT 03/15/2020 OJO 03 es el MES!!!
// LONG Mar 25 2020

// METODOS GET
console.log(ahora.getFullYear()); // Nos devuelve el año en el que estamos
console.log(ahora.getMonth()); // Nos devuelve el mes en el que estamos -1 porque es el indice de un Array, es decir, Agosto se corresponderia al indice 7
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(meses[ahora.getMonth()]); // Conversion de numero de mes al nombre del mismo

console.log(ahora.getDate()); // Nos devuelve el dia en el que estamos

let mes = ahora.getMonth() + 1;
let resultado = ahora.getDate() + '/' + mes + '/' + ahora.getFullYear();
console.log(resultado);

// METODOS SET
ahora.setFullYear('2029'); // Nos permite modificar el año
ahora.setMonth(8 - 1); // Nos permite modificar el mes (no olvidarse de restar 1 porque se pasa el indice de un vector)
ahora.setDate(10); // Nos permite modificar el dia
resultado = ahora.getDate() + ' de ' + meses[ahora.getMonth()] + ' de ' + ahora.getFullYear();
console.log(resultado);