// Booleanos o lógicos
let var1 = true
let var2 = false
console.log(var1)
console.log(var2)

// Variable a la que no se le asignó un valor o undefined
let var3
console.log(var3)

// Ausencia de valor o null, que no es lo mismo que undefined
let var4 = null
console.log(var4)

// Objeto
let var5 = {
    //Pares clave: valor
    nombre: 'Pedro',
    apellido: 'Ramos',
    edad: 45
}
console.log(var5)

// Array (arreglos) o lista de valores
let var6 = [1, 2, 3, 4, 5, 6]
let var7 = ['HTML', 'CSS', 'JS']
console.log(var6)
console.log(var7)

// Fecha
const var8 = new Date('2024-08-13')
console.log(var8)

// Mezcla de números y strings
let var9 = 5
let var10 = '5'
// La siguiente línea convierte 5 a '5' (parseo implícito)
// Luego el operador + concatena los dos strings y termina por mostrar '55'
let var11 = var9 + var10
console.log(var11)

// La siguiente línea convierte '5' a 5 utilizando la función parseInt (parseo explícito)
// Luego el operador + suma los dos números y termina por mostrar 10
var11 = var9 + parseInt(var10)
console.log(var11)

// La siguiente línea convierte '5.5' a 5.5 utilizando la función parseFloat (parseo explícito)
// Luego el operador + suma los dos números y termina por mostrar 11.4
let var12 = 5.9
let var13 = '5.5'
let var14 = var12 + parseFloat(var13)
console.log(var14)

// La siguiente línea convierte '5.5' a 5 utilizando la función parseInt (parseo explícito)
// Luego el operador + suma los dos números y termina por mostrar 10.9
// Por lo que que estamos cometiendo un error por redondeo
var14 = var12 + parseInt(var13)
console.log(var14)