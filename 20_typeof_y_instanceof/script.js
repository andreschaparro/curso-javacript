let string = typeof "Andrés"
console.log(string)

let decimal = typeof 3.14
console.log(decimal)

// NaN es del tipo númerico
let nan = typeof NaN
console.log(nan)

let booleano = typeof true
console.log(booleano)

// En general, todo lo que se pueda declarar con la palabra new va a ser un objeto
// Un Array es del tipo objeto
let array = typeof ['Ricardo', 'Pedro', 'María']
console.log(array)

let objeto = typeof { curso: 'JAVASCRIPT', proyectos: 5 }
console.log(objeto)

// Una fecha es del tipo objeto
let fecha = typeof new Date()
console.log(fecha)

// Un Set es del tipo objeto
let set = typeof new Set()
console.log(set)

// Un Map es del tipo objeto
let map = typeof new Map()
console.log(map)

// null es un caso especial y es del tipo objeto
let nulo = typeof null
console.log(nulo)

function saludar() {
    console.log('Hola Mundo')
}

let funcion = typeof saludar
console.log(funcion)

// Por defecto JS supone que Texto es una variable, y como no está definida, va a mostrar que su tipo es undefined
let algo = typeof Texto
console.log(algo)

// Con instanceof podemos diferenciar los diferentes tipos de objetos, excepto null
console.log(array instanceof Array)
console.log(objeto instanceof Object)
console.log(fecha instanceof Date)
console.log(set instanceof Set)
console.log(map instanceof Map)