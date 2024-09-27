
// Sitio web de ayuda: https://www.w3schools.com/jsref/jsref_type_conversion.asp

// String a Number
let entero = parseInt('7.1')
console.log(entero)
console.log(typeof entero)

let decimal = parseFloat('1.21')
console.log(decimal)
console.log(typeof decimal)

let nan = parseFloat('Pedro')
console.log(nan)
console.log(typeof nan)

decimal = Number('3.14')
console.log(decimal)
console.log(typeof decimal)

cero = Number('')
console.log(cero)
console.log(typeof cero)

decimal = + '10.1'
console.log(decimal)
console.log(typeof decimal)

// Number a String
decimal = 3.51
let string = decimal.toString()
console.log(string)
console.log(typeof string)

string = String(101)
console.log(string)
console.log(typeof string)

// Date a Number
let ahora = new Date()
let msDesde1del1de1970UTC = Number(ahora)
console.log(msDesde1del1de1970UTC)
console.log(typeof msDesde1del1de1970UTC)

// Date a String
string = String(ahora)
console.log(string)
console.log(typeof string)

string = ahora.toString()
console.log(string)
console.log(typeof string)

// Number a Boolean
let falso = Boolean(0)
console.log(falso)
console.log(typeof falso)

let verdadero = Boolean(1)
console.log(verdadero)
console.log(typeof verdadero)

verdadero = Boolean(47)
console.log(verdadero)
console.log(typeof verdadero)

// Boolean a String
string = String(true)
console.log(string)
console.log(typeof string)

string = false.toString()
console.log(string)
console.log(typeof string)