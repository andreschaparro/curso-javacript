let ahora = new Date()
console.log(ahora)

// En la siguiente línea se crea una fecha a partir de un string con el formato ISO 'AAAA-MM-DD'
let fecha = new Date('2021-05-01')
console.log(fecha)

// El método getFullYear nos devuelve el año en el que estamos
console.log(ahora.getFullYear())

// El método getMonth nos devuelve el mes en el que estamos -1
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
console.log(meses[ahora.getMonth()])

// El método getDate nos devuelve el día en el que estamos
console.log(ahora.getDate())

let numeroDeMes = ahora.getMonth() + 1
let fechaEnFormatoLatino = ahora.getDate() + '/' + numeroDeMes + '/' + ahora.getFullYear()
console.log(fechaEnFormatoLatino)

// El método setFullYear nos permite modificar el año
ahora.setFullYear('2025')

// El método setMonth nos permite modificar el mes considerando que enero es 0
ahora.setMonth(5 - 1)

// El método setDate nos permite modificar el día
ahora.setDate(25)

let fechaEnFormatoTexto = ahora.getDate() + ' de ' + meses[ahora.getMonth()] + ' de ' + ahora.getFullYear()
console.log(fechaEnFormatoTexto)