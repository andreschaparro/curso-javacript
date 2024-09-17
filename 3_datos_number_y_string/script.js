// Variable que guarda un valor entero
let variableNumero = 10
console.log(variableNumero)
// Variable que guarda un valor flotante
let variableDecimal = 10.10
console.log(variableDecimal)

// Variable que guarda un string (cadena de caracteres) donde la asignación se hace por comillas dobles
let variableTexto1 = "Texto"
console.log(variableTexto1)
// Variable que guarda un string (cadena de caracteres) donde la asignación se hace por comillas simples
// Se prefiere esta forma sobre la anterior porque en HTML se suele utilizar comillas dobles
let variableTexto2 = 'Texto'
console.log(variableTexto2)
// Variable que guarda un string (cadena de caracteres) donde la asignación se hace por backticks
// Esta forma tiene como ventaja que permite incrustar el valor de otras variables en el string
// Esto se conoce como template literals
let variableTexto3 = `Esta es una variable distinta ${variableNumero}`
console.log(variableTexto3)