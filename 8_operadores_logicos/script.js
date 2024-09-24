// Operador lógico de igualdad de valor
let x = 5, y = 5
let z = x == y
console.log(z)

y = '5'
z = x == y
// La siguiente línea muestra true cuando debería mostrar false porque 5 no es igual a '5'
console.log(z)

// Operador lógico de igualdad de valor y tipo que soluciona el problema anterior
z = x === y
console.log(z)

// Operador lógico de valor distinto
y = 9
z = x != y
console.log(z)

// Operador lógico de negación
console.log(!z)

// Operador lógico de mayor
z = x > y
console.log(z)

// Operador lógico de menor
z = x < y
console.log(z)

// Operador lógico de mayor o igual
z = x >= y
console.log(z)

// Operador lógico de menor o igual
z = x <= y
console.log(z)

// Operador AND
// Todas las condiciones deben ser verdaderas para que el resultado sea verdadero
let a = 5
let b = 9
let c = 5
let d = a < b && b > c
console.log(d)

// Operador OR
// Basta con que una condición sea verdadera para que el resultado sea verdadero
d = a < b || b == c
console.log(d)