// Un objeto contiene propiedades
// Cada propiedad es un conjunto clave-valor
// El valor puede ser de cualquiera de los tipos de datos que vimos o incluso una función
const auto1 = {
    marca: 'Fiat',
    modelo: 'Uno',
    peso: 895,
    color: 'Blanco'
}

let auto2 = {
    marca: 'Renault',
    modelo: '12',
    peso: 850,
    color: 'Rojo'
}

console.log('auto1', auto1)
console.log('auto2', auto2)

// En las siguientes líneas se muestra como obtener el valor de una propiedad
console.log('El color del auto1 es', auto1.color)
console.log('El peso del auto2 es', auto2['peso'])

// En las siguientes líneas se muestra como se puede modificar el valor de una propiedad
// No importa si el objeto se declaró como const o let
auto1.color = 'Gris'
auto2.peso = 900

console.log('auto1', auto1)
console.log('El color del auto1 es', auto1.color)

console.log('auto2', auto2)
console.log('El peso del auto2 es', auto2['peso'])

// En las siguientes líneas se crea un objeto donde el valor de una propiedad es un Array
let vendedor1 = {
    nombre: 'Pedro',
    apellido: 'González',
    empresa: 'Autos S.A.',
    habilidadesBlandas: ['Carisma', 'Puntualidad']
}

console.log(vendedor1)
// En la siguiente línea se muestra como acceder al primer elemento del Array
console.log(vendedor1.habilidadesBlandas[0])

// En las siguientes líneas se crea un objeto donde el valor de una propiedad es una función que no retorna nada
let vendedor2 = {
    nombre: 'Ricardo',
    apellido: 'González',
    empresa: 'Autos S.A.',
    habilidadesBlandas: ['Trabajo en equipo', 'Gestión del tiempo'],
    vender: function () {
        console.log('Ricardo ha vendido un auto')
    }
}

console.log(vendedor2)
// En la siguiente línea se muestra como llamar a la función a través de su clave
vendedor2.vender()

// En las siguientes líneas se crea un objeto donde el valor de una propiedad es una función que retorna un valor
const vendedor3 = {
    nombre: 'Ana',
    apellido: 'González',
    empresa: 'Autos S.A.',
    habilidadesBlandas: ['Liderazgo', 'Resolución de confligtos'],
    vender: function () {
        // La palabra reservada this hace referencia a lo que está fuera de su scope (las llaves de la función), por lo que nos permitirá acceder a las propiedades del objeto
        console.log(this.nombre, 'ha vendido un auto')
    },
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido
    }
}

console.log(vendedor3)
vendedor3.vender()
console.log(vendedor3.nombreCompleto())