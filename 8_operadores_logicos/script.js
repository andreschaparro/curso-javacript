let x = 5, y = 5

let z = x == y; // OPERADOR ES IGUAL EN VALOR?
console.log(z) // muestra true

y = '5'
z = x == y;
console.log(z) // EL PROBLEMA ES QUE MUESTRA true CUANDO '5' ES UN STRING Y 5 ES UN ENTERO

// SOLUCION
z = x === y; // OPERADOR ES IGUAL EN VALOR Y TIPO?
console.log(z) // muestra false

y = 5
z = x != y; // OPERADOR SON DISTINTOS?
console.log(z) // muestra false

z = x > y // OPERADOR ES MAYOR?
console.log(z) // muestra false

z = x < y // OPERADOR ES MENOR?
console.log(z) // muestra false

z = x <= y // OPERADOR ES MENOR O IGUAL?
console.log(z) // muestra true

z = x >= y // OPERADOR ES MAYOR O IGUAL?
console.log(z) // muestra true

let a = 5
let b = 9
let c = 5
let d = a < b && b > c // OPERADOR AND
console.log(d) // muestra true porque ambas condiciones son true

d = a < b || b == c // OPERADOR OR
console.log(d) // muestra true porque basta con que una condicion sea true

console.log(!d) // OPERADOR NOT