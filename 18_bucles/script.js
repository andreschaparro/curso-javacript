let tecnologias = ['HTML', 'CSS', 'JAVSCRIPT', 'REACT', 'TYPESCRIPT']

// Escribir for y seleccionar For Loop
for (let index = 0; index < tecnologias.length; index++) {
    console.log(tecnologias[index])
}

// En las siguientes líneas se muestra una versión menos verbosa del bucle for
// Escribir for y seleccionar For-Of Loop
for (const element of tecnologias) {
    console.log(element)
}

// En las siguientes líneas se muestra como recorrer un objeto
let alumno = {
    name: 'Ricardo',
    edad: 25,
    tecnologias: ['HTML', 'CSS'],
}

// Escribir for y seleccionar For-In Loop
for (const key in alumno) {
    console.log(key, alumno[key])
}

// En las siguientes líneas se muestra una versión alternativa del bucle for que utiliza un función de flecha
let numeros = [1, 2, 3, 4, 5]

// Escribir for y seleccionar foreach =>
numeros.forEach(element => {
    console.log(element)
})

let edad = 0

// Escribir while y seleccionar While Statement =>
while (edad < 5) {
    console.log(`Tienes ${edad} años`)
    edad++
}
console.log(`Ya tienes ${edad} años`)

edad = 0

// Escribir do y seleccionar Do-While Statement =>
do {
    console.log(`Tienes ${edad} años`)
    edad++
} while (edad < 5)
console.log(`Ya tienes ${edad} años`)

edad = 0
while (edad < 10) {
    console.log(`Tienes ${edad} años`)
    edad++
    // La sentencia break rompe la ejecución de cualquier bucle
    if (edad == 5) break
}
console.log(`Saliste del bucle porque ya tienes ${edad} años`)