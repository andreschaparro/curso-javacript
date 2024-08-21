// SETS ES UN CONJUNTO UNICO DE ELEMENTOS ES DECIR QUE NO TIENE ELEMENTOS REPETIDOS Y SE SUELEN USAR PARA LIMPIAR ARRAYS
// EJECUTAR node script.js
let array = ['Pedro', 'Ricardo', 'María', 'Pedro', 'Ricardo', 'Ricardo']
let conjunto = new Set(array);
console.log(conjunto);

// Agregar un elemento
conjunto.add('Luciana');
console.log(conjunto);

// Borrar un elemento
conjunto.delete('Pedro');
console.log(conjunto);

// Consultar si existe un elemento
let pregunta = conjunto.has('Ricardo');
console.log(pregunta);

// Consulta cuantos elementos tiene
console.log(conjunto.size);

// Volver a tener un array
let nuevoArray = [...conjunto];
console.log(nuevoArray);

// MAP ES UN CONJUNTO DE PARES CLAVE-VALOR PERO QUE NO SON OBJETOS
let mapa = new Map([
    ['Computadores', 10],
    ['Tablets', 5],
    ['Celulares', 15],
]);
console.log(mapa);

// Agregar un par clave-valor
mapa.set('Teclados', 20);
console.log(mapa);

// Consulta cuantos pares clave-valor
console.log(mapa.size);

// Borrar un par clave-valor
mapa.delete('Computadoras');
console.log(mapa);

// Consultar si existe un par clave-valor
console.log(mapa.has('Monitores'));