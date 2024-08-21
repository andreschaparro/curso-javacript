// CONVERSION DE UNIDADES PARA CUANDO ACCEDEMOS A UN BACKEND PUBLICO O NO PODEMOS MODIFICAR NUESTRO BACKEND
// EJECUTAR node script.js

// STRING A NUMBER (FLOAT)
let a = Number('3.14');
console.log(a);
console.log(typeof a);

a = Number(''); // Crea un 0
console.log(a);
console.log(typeof a);

a = parseFloat('1.21');
console.log(a);
console.log(typeof a);

// STRING A NUMBER (INT)
let b = parseInt('7.1');
console.log(b);
console.log(typeof b);

// STRING A NUMBER CASO NAN
let c = parseFloat('Pedro');
console.log(c);
console.log(typeof c);

// STRING A NUMBER (CUALQUIER TIPO)
let d = + '10.1';
console.log(d);
console.log(typeof d);

// NUMBER A STRING
let e = String(1);
console.log(e);
console.log(typeof e);

e = 5.1;
let f = e.toString();
console.log(f);
console.log(typeof f);

// f = 4.toString(); // Esto da error

// DATE A NUMBER
let g = new Date();
let h = Number(g);
console.log(h); // Muestra los ms que pasaron desde la medianoche del 1 de enero de 1970 UTC
console.log(typeof h);

// DATE A STRING
let i = String(g);
console.log(i);
console.log(typeof i);
// console.log(g.toString()); // Hace lo mismo que lo anterior
// console.log(typeof g.toString());

// NUMBER A BOOLEAN
let j = Boolean(0);
console.log(j);
console.log(typeof j);

let k = Boolean(1);
console.log(k);
console.log(typeof k);

let l = Boolean(47); // todo valor distinto de 0 es true
console.log(l);
console.log(typeof l);

// BOOLEAN A STRING
let m = String(true);
console.log(m);
console.log(typeof m);

let n = false.toString();
console.log(n);
console.log(typeof n);

// Sitio web de ayuda: https://www.w3schools.com/jsref/jsref_type_conversion.asp

// Hacer el TP3: Venta de viajes