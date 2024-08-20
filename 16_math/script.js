// OBJETO MATH
// EJECUTAR node script.js

// CONSTANTES
console.log(Math.PI);       // Devuelve PI
console.log(Math.E);        // Devuelve el número de Euler
console.log(Math.SQRT2);    // Devuelve la raíz cuadrada de 2
console.log(Math.SQRT1_2);  // Devuelve la raíz cuadrada de 1/2
console.log(Math.LN2);      // Devuelve el logaritmo natural de 2
console.log(Math.LN10);     // Devuelve el logaritmo natural de 10
console.log(Math.LOG2E);    // Devuelve el logaritmo de E en base 2
console.log(Math.LOG10E);   // Devuelve el logaritmo de E en base 10

// REDONDEO CON ROUND
let numero = 2.2;
let redondeo = Math.round(numero); // Redondea al entero mas cercano o hacia arriba si es equidistante
console.log(redondeo);

numero = 2.8;
redondeo = Math.round(numero);
console.log(redondeo);

numero = 2.5;
redondeo = Math.round(numero);
console.log(redondeo);

// REDONDEO CON CEIL
numero = 2.1;
redondeo = Math.ceil(numero); // Redondea siempre hacia arriba
console.log(redondeo);

// REDONDEO CON FLOOR
numero = 2.9;
redondeo = Math.floor(numero); // Redondea siempre hacia abajo
console.log(redondeo);

// REDONDEO CON TRUNC
numero = 2.5;
redondeo = Math.trunc(numero); // Trunca la parte entera
console.log(redondeo);

// NUMEROS ALEATORIOS
console.log(Math.random()); // Da un numero al azar entre 0 y 1

numero = Math.random() * 100; // Numero aleatorio entre 0 y 100
redondeo = Math.round(numero);
console.log(redondeo);