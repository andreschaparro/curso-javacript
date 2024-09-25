/*
Comentario multilínea

Reglas para los nombres de las variables:

1. Pueden iniciar con los caracteres $, minúscula, mayúscula, y _
2. No pueden iniciar con un número, pero sí usarlos en el resto del nombre
3. No pueden tener caracteres especiales excepto $ y _
*/

let $variable = '$variable'
let variable = 'variable'
let Variable = 'Variable'
let _variable = '_variable'
console.log($variable)
console.log(variable)
console.log(Variable)
console.log(_variable)

// JS es case sensitive
let nombreVariable = 'Pedro'
let nombrevariable
console.log(nombreVariable)
console.log(nombrevariable)