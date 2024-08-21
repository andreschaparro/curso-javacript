// STRINGS

// Colocar una ' dentro de '' por escape (sin utilizado a otro tipo de comillas)
let string1 = 'Let\'s do it'
console.log(string1)

// Colocar una \ dentro de un string por escape
let string2 = 'El simbolo con el que se escapa es \\'
console.log(string2)

// Colocar un salto de linea y una tabulacion dentro de un string
let string3 = 'Esto esta arriba\n\tEsto esta abajo'
console.log(string3)

// Longitud de un string
let string4 = 'Murciélago'
console.log(string4, 'tiene', string4.length, 'caracteres')
let string5 = 'Murciélago '
console.log(string5, 'tiene', string5.length, 'caracteres')
let string6 = 'Murciélago\n'
console.log(string6, 'tiene', string6.length, 'caracteres') // \n cuenta como un caracter

// Quedarnos con parte de un string
let texto = "Educacion"
let resultado = texto.slice(4, 7)
// .slice(START, END)
// Incluye a al caracter START y no incluye a END
// Se cuenta como caracter 0 a la primera letra, igual que con los Arrays
console.log(resultado) // muestra aci
let resultado1 = texto.slice(-5, -2)
// Si START y END son negativos se cuenta del ultimo caracter hacia atras
console.log(resultado1) // muestra aci

// Reemplazar parte de un string
const original = 'La educación es muy importante en Argentina'
const reemplazo = original.replace('Argentina', 'el mundo')
console.log(reemplazo)

// Pasar todos los caracteres de un string a mayusculas
console.log(reemplazo.toUpperCase())

// Pasar todos los caracteres de un string a minusculas
console.log(reemplazo.toLowerCase())

// Concatenar strings
const parte1 = 'La educación es muy importante en '
const parte2 = 'Argentina'
const parte3 = 'el mundo'
const conca1 = parte1 + parte2
const conca2 = parte1.concat(parte3)
console.log(conca1)
console.log(conca2)

// Eliminar espacios de mas la principio y final de un string
const parte4 = '    La educación es muy importante en Argentina      '
const limpio1 = parte4.trim().toLocaleUpperCase() // modificaciones en cascada
console.log(limpio1)

// Eliminar espacios de mas unicamente al inicio de un string
const limpio2 = parte4.trimStart()
console.log(limpio2)

// Eliminar espacios de mas unicamente al final de un string
const limpio3 = parte4.trimEnd()
console.log(limpio3)

// Obtener el caracter que esta en una determinada posicion de un string
const limpio4 = parte4.trim()
console.log(limpio4.charAt(5))
console.log(limpio4[5])

// Particionar un string utilizando un separador
const recibido = 'Este texto te lo mando el backend. Este texto es importante. Dividi el texto'
console.log(recibido.split('.')) // el separador es un caracter
console.log(recibido.split('. ')) // el separador es otro string
console.log(recibido.split('')) // separa letra por letra
// En todos los casos el resultado es un Array de strings

// Hacer el TP1: Calculadora