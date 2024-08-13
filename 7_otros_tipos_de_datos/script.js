// BOOLEANO
let verdadero = true
let falso = false

// UNDEFINED
let a // valor sin asignar

// NULL
let b = null // ausencia de valor

// OBJETO
let objeto = {
    clave: 'valor'
}

// ARRAY O LISTAS
let array = [1, 2, 3, 4, 5, 6]
let cursos = ['HTML', 'CSS', 'JS']

// DATE
const date = new Date('2024-08-13')
console.log(date)

// ERROR POR MIX DE NUMEROS y STRINGS
let var1 = 5
let var2 = '5'
let var3 = var1 + var2
console.log(var3) // Convierte 5 a '5' (CASTEO), lo concatena (OPERADOR +) con el otro '5', y muestra '55'

// SOLUCION PARSEO A INT
var3 = var1 + parseInt(var2)
console.log(var3) // muestra el entero 10

// PARSEO A FLOAT
let var4 = 5.9
let var5 = '5.5'
let var6 = var4 + parseFloat(var5)
console.log(var6)

// ERROR POR REDONDEO HACIA ABAJO
var6 = var4 + parseInt(var5)
console.log(var6)