// En las siguientes líneas se declara un Array y a continuación se le agregan elementos
// Al declararlo, no es obligatorio declarar la cantidad de elementos que va a almacenar
// Los elementos están ordenados a través de un índice que comienza en 0
// El valor de los elementos puede ser de cualquiera de los tipos de datos que vimos
let array = new Array(6)

array[0] = "HTML"
array[1] = "CS"
array[2] = "JS"

console.log(array)
console.log(array[4])

array[3] = 48

array[4] = {
    nombre: 'Pedro',
    apellido: 'González'
}
console.log(array)

// En la siguiente línea se declara un Array y se le agregan elementos en una misma sentencia
array[5] = [1, 2, 3, 4, 5, 6]
console.log(array)

// En la siguiente línea se obtiene el tamaño de un Array a partir de su propiedad length como si fuese un string
console.log(array.length)

// El método sort reordena los elementos de un Array en función de sus valores
let arrayDeEnteros = [9, 5, 2, 7, 1]
arrayDeEnteros.sort()
console.log(arrayDeEnteros)

let arrayDeStrings = ['Juan', 'Ricardo', 'Benjamin', 'Bruno', 'Manuel']
arrayDeStrings.sort()
console.log(arrayDeStrings)

// En la siguiente línea se accede al último elemento de un Array
console.log(arrayDeStrings[arrayDeStrings.length - 1])

// En las siguientes líneas se inyecta código HTML desde JS
// Descomentar el código y probarlo con el Live Server
// let actividades = ['Levantarse', 'Comer', 'Estudiar', 'Dormir']
// let codigoHTML = ''
// for (let index = 0; index < actividades.length; index++) {
//     codigoHTML += '<li>' + actividades[index] + '</li>'
// }
// document.getElementById('listaOrdenada').innerHTML = codigoHTML

// En la siguiente línea se agrega un elemento al final de un Array
arrayDeStrings[arrayDeStrings.length] = 'Pedro'

// En la siguiente línea se agrega un elemento a un Array y como consecuencia se inyectan elementos con el valor undefined de forma implícita
arrayDeStrings[10] = 'Gustavo'
console.log(arrayDeStrings)
console.log(arrayDeStrings[9])

// El método filter se queda con todos los elementos de un Array que cumplen con la condición dada por una función de callback
let frutas = ['Manzana', 'Naranja', 'Manzana', 'Manzana']
let resultado = frutas.filter(x => x == 'Manzana')
console.log(resultado)

let empleados = [
    { nombre: 'Pedro', apellido: 'González' },
    { nombre: 'Maria', apellido: 'González' },
    { nombre: 'Lucia', apellido: 'González' },
    { nombre: 'Ricardo', apellido: 'Pérez' },
    { nombre: 'Lucas', apellido: 'Castellano' },
    { nombre: 'Fernanda', apellido: 'Rodríguez' },
]
resultado = empleados.filter(x => x.apellido == 'González')
for (let index = 0; index < resultado.length; index++) {
    console.log(resultado[index].nombre)
}

// El método map recorre cada uno de los elementos de un Array y ejecuta una función de callback sobre ellos
frutas = ['Manzana', 'Manzana', 'Manzana', 'Manzana']
resultado = frutas.map(x => {
    if (x == 'Manzana') return 'Naranja'
})
console.log(resultado)

// El método fill reemplaza los elementos de un Array a partir de cierto índice
frutas = ['Manzana', 'Manzana', 'Manzana', 'Manzana']
resultado = frutas.fill('Naranja', 1)
console.log(resultado)

// El método find devuelve el primer elemento de un Array que cumple con la condición dada por una función de callback
frutas = ['Manzana', 'Naranja', 'Naranja', 'Manzana']
let elemento = frutas.find(x => x == 'Naranja')
console.log(elemento)

// El método findIndex devuelve el índice del primer elemento de un Array que cumple con la condición dada por una función de callback
frutas = ['Manzana', 'Naranja', 'Manzana', 'Manzana']
let indice = frutas.findIndex(x => x == 'Naranja')
console.log(indice)
console.log(frutas[indice])

// El método some devuelve true si al menos un elemento en un Array cumple con la condición dada por una función de callback
frutas = ['Manzana', 'Manzana', 'Naranja', 'Naranja']
let booleano = frutas.some(x => x == 'Naranja')
console.log(booleano)

// El método every devuelve true si hay todos los elementos en un Array cumplen con la condición dada por una función de callback
frutas = ['Naranja', 'Manzana', 'Manzana', 'Manzana']
booleano = frutas.every(x => x == 'Naranja')
console.log(booleano)

// El método pop devuelve el último elemento de un Array y lo elimina del mismo
frutas = ['Manzana', 'Naranja', 'Limon', 'Pera']
elemento = frutas.pop()
console.log(elemento)
console.log(frutas)

// El método shift devuelve el primer elemento de un Array y lo elimina del mismo
frutas = ['Manzana', 'Naranja', 'Limon', 'Pera']
elemento = frutas.shift()
console.log(elemento)
console.log(frutas)

// El método push agrega un nuevo elemento al final de un Array
frutas = ['Manzana', 'Naranja', 'Limon', 'Pera']
frutas.push('Ciruela')
console.log(frutas)

// El método shift agrega un nuevo elemento al inicio de un Array
frutas = ['Manzana', 'Naranja', 'Limon', 'Pera']
frutas.unshift('Ciruela')
console.log(frutas)

// El método splice elimina un número de elementos de un Array a partir de un índice y puede insertar otros como relleno
frutas = ['Manzana', 'Naranja', 'Limon', 'Pera']
frutas.splice(2, 1, 'Ciruela')
console.log(frutas)

frutas = ['Manzana', 'Naranja', 'Limon', 'Pera']
frutas.splice(2, 1, 'Ciruela', 'Kiwi')
console.log(frutas)

frutas = ['Manzana', 'Naranja', 'Limon', 'Pera']
frutas.splice(2, 2, 'Ciruela', 'Kiwi')
console.log(frutas)

// El método slice recorta parte de un Array como si fuese un string
frutas = ['Manzana', 'Naranja', 'Limon', 'Pera', 'Ciruela', 'Kiwi']
resultado = frutas.slice(2, 4)
console.log(resultado)

// El método join genera un string a partir de concatenar cada elemento de un Array e intercalando otro string de unión
frutas = ['Manzana', 'Naranja', 'Limon', 'Pera', 'Ciruela', 'Kiwi']
console.log(frutas.join(' - '))

// El método concat concatena dos Arrays como si fuesen dos strings
frutas = ['Manzana', 'Naranja', 'Limon', 'Pera', 'Ciruela', 'Kiwi']
let verduras = ['Lechuga', 'Zapallo', 'Cebolla', 'Papa']
console.log(frutas.concat(verduras))

// En las siguientes líneas se soluciona un problema que tiene el método sort al reordenar números mayores a 9
arrayDeEnteros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(arrayDeEnteros.sort())
console.log(arrayDeEnteros.sort((x, y) => x - y))

// En la siguiente línea se utiliza el método sort para reordenar números de forma descendente
console.log(arrayDeEnteros.sort((x, y) => y - x))