// Función que retorna un valor
function suma(x, y) {
    return x + y
}

let a = 5
let b = 6
let respuesta = suma(a, b)
console.log(`La suma de ${a} + ${b} es igual a`, respuesta)

// Función que no retorna nada
function mostrarSuma(x, y) {
    console.log(`La suma de ${x} + ${y} es igual a`, x + y)
}

mostrarSuma(a, b)

// En la siguiente línea los parámetros que le estamos pasando a la función son undefined, lo que da como resultado un NaN que significa not a number
mostrarSuma()

// Cuando se utiliza el operador aritmético de la suma debe prevenirse que se produzca un parseo implícito empleando un parseo explícito por fuera de la función
function agregarDosKgDeBananas(x) {
    return x + 2
}

let kgDeBananas = '1'
let totalKgBananas = agregarDosKgDeBananas(kgDeBananas)
console.log(`Se van a comprar ${totalKgBananas} kg de bananas`)

totalKgBananas = agregarDosKgDeBananas(parseInt(kgDeBananas))
console.log(`Se van a comprar ${totalKgBananas} kg de bananas`)

// Función de flecha o Arrow Function
// Las 3 funciones hacen lo mismo que la definida anteriormente pero cada vez de forma menos verbosa
let agregarDosKgDeBananasVersionFlecha1 = (x) => {
    return x + 2
}

let agregarDosKgDeBananasVersionFlecha2 = x => {
    return x + 2
}

let agregarDosKgDeBananasVersionFlecha3 = x => x + 2

totalKgBananas = agregarDosKgDeBananasVersionFlecha1(parseInt(kgDeBananas))
console.log(`Se van a comprar ${totalKgBananas} kg de bananas`)

totalKgBananas = agregarDosKgDeBananasVersionFlecha2(parseInt(kgDeBananas))
console.log(`Se van a comprar ${totalKgBananas} kg de bananas`)

totalKgBananas = agregarDosKgDeBananasVersionFlecha3(parseInt(kgDeBananas))
console.log(`Se van a comprar ${totalKgBananas} kg de bananas`)

// Función de flecha o Arrow Function sin parámetros
let mostrarMensaje = () => console.log("Soy una función de flecha sin parámetros")

mostrarMensaje()

// Función de flecha o Arrow Function que recibe más de un parámetro
let mostrarSumaVersionFlecha = (x, y) => {
    console.log(`La suma de ${x} + ${y} es igual a`, x + y)
}

mostrarSumaVersionFlecha(a, b)