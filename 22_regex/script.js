// El método search busca la primera aparición de un string dentro de otro utilizando una expresión regular
let texto = 'Este curso es de Javascript'
let posicion = texto.search(/Javascript/)
console.log(posicion)

// El método search es case sensitive
posicion = texto.search(/javascript/)
console.log(posicion)

// El modificador i permite utilizar el método search sin case sensitive
posicion = texto.search(/javascript/i)
console.log(posicion)

// Otros modificadores:
// g: busca todas las apariciones
// m: busca en más de una línea

// El método test busca si existe un string dentro de otro utilizando una expresión regular
let patron = /javascript/
let match = patron.test(texto)
console.log(match)

patron = /javascript/i
match = patron.test(texto)
console.log(match)

// El método exec busca un string dentro de otro utilizando una expresión regular y devuelve un Array con información del resultado
patron = /javascript/
let array = patron.exec(texto)
console.log(array)

patron = /javascript/i
array = patron.exec(texto)
console.log(array)

// En las siguientes líneas se busca si un string contiene un número entre 0 y 9
texto = 'Número de curso: 3'
patron = /[0-9]/
match = patron.test(texto)
console.log(match)

patron = /\d/
match = patron.test(texto)
console.log(match)

// En las siguientes líneas se busca comprobar si un string es un correo electrónico
patron = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

match = patron.test('alguien')
console.log(match)

match = patron.test('alguien@1.1')
console.log(match)

match = patron.test('alguien@gmail')
console.log(match)

match = patron.test('alguien@gmail.com')
console.log(match)

// Buscar patrones en internet