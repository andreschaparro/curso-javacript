// En la siguiente línea se van a eliminar los elementos repetidos de un Array utilizando un Set
let conjunto = new Set(['Pedro', 'Ricardo', 'María', 'Pedro', 'Ricardo', 'Ricardo'])
console.log(conjunto)

// El método add agrega un elemento a un Set
conjunto.add('Luciana')
console.log(conjunto)

// El método delete elimina un elemento a un Set
conjunto.delete('Pedro')
console.log(conjunto)

// El método has informa si existe un elemento dentro de un Set
let pregunta = conjunto.has('Ricardo')
console.log(pregunta)

// La propiedad size devuelve el número de elementos que tiene un Set
console.log(conjunto.size)

// En la siguiente línea se convierte un Set en un Array
let nuevoArray = [...conjunto]
console.log(nuevoArray)

// Un map almacena pares clave-valor donde cada clave debe ser única y pueden ser números o strings
// Los maps únicamente se utilizan cuando los objetos no nos sirven
let mapa = new Map([
    ['Computadoras', 10],
    ['Tablets', 5],
    ['Celulares', 15],
])
console.log(mapa)

// El método set agrega un par clave-valor al Map
mapa.set('Teclados', 20)
console.log(mapa)

// El método delete elimina un par clave-valor al Map
mapa.delete('Computadoras')
console.log(mapa)

// El método has informa si existe un par clave-valor dentro de un Map a partir de la clave
console.log(mapa.has('Monitores'))

// La propiedad size devuelve el número de pares clave-valor que tiene el Map
console.log(mapa.size)