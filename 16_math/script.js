// La propiedad PI del objeto Math devuelve el número PI
console.log(Math.PI)
// La propiedad E del objeto Math devuelve el número de Euler
console.log(Math.E)
// La propiedad SQRT2 del objeto Math devuelve la raíz cuadrada de 2
console.log(Math.SQRT2)
// La propiedad SQRT1_2 del objeto Math devuelve la raíz cuadrada de 1/2
console.log(Math.SQRT1_2)
// La propiedad LN2 del objeto Math devuelve el logaritmo natural de 2
console.log(Math.LN2)
// La propiedad LN10 del objeto Math devuelve el logaritmo natural de 10
console.log(Math.LN10)
// La propiedad LOG2E del objeto Math devuelve el logaritmo de E en base 2
console.log(Math.LOG2E)
// La propiedad LOG10E del objeto Math devuelve el logaritmo de E en base 10
console.log(Math.LOG10E)

// El método round del objeto Math redondea un número decimal al valor entero mas cercano o hacia arriba si es equidistante
let numero = 2.2
let redondeo = Math.round(numero)
console.log(redondeo)

numero = 2.8
redondeo = Math.round(numero)
console.log(redondeo)

numero = 2.5
redondeo = Math.round(numero)
console.log(redondeo)

// El método ceil del objeto Math redondea un número decimal siempre hacia arriba
numero = 2.1
redondeo = Math.ceil(numero)
console.log(redondeo)

// El método floor del objeto Math redondea un número decimal siempre hacia abajo
numero = 2.9
redondeo = Math.floor(numero)
console.log(redondeo)

// El método trunc del objeto Math nos devuelve la parte entera de un número decimal
numero = 2.5
redondeo = Math.trunc(numero)
console.log(redondeo)

// El método random del objeto Math devuelve un número decimal aleatorio entre 0 y 1
console.log(Math.random())

// En las siguientes líneas se genera un número entero aleatorio entre 0 y 100
numero = Math.random() * 100
redondeo = Math.round(numero)
console.log(redondeo)