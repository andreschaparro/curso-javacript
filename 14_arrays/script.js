// ARRAYS TAMBIEN CONOCIDOS COMO LISTAS O ARREGLOS
// EJECUTAR node script.js

// Forma 1 de crearlos e inicializarlos
// SIEMPRE USAR let con Arrays
let array = new Array(6); // Array de 6 elementos
array[0] = "Curso de HTML"; // Se cuenta desde el 0 la posicion de cada elemento
array[1] = "Curso de CS";
array[2] = "Curso de JS";

console.log(array); // Va a mostrar los 3 elementos anteriores separados por coma y 3 elementos vacios
console.log(array[4]); // Los elementos vacios van a ser undefined

array[3] = 46; // No hay problema en mezclar tipos de datos dentro de un array
console.log(array);

array[4] = { nombre: 'Pedro' }; // Objeto dentro de un array
console.log(array);

array[5] = [1, 2, 3, 4, 5, 6]; // Array anidado
console.log(array);

console.log(array.length); // Longitud del array con la propiedad .length

// Forma 2 de crearlos e inicializarlos
array = [9, 5, 2, 7, 1]; // Se saco el let para que no de error

array = ['Juan', 'Ricardo', 'Benjamin', 'Bruno', 'Manuel'];
console.log(array.sort()); // Tambien funcion el metodo .sort()

console.log(array[array.length - 1]); // Forma de acceder al utlimo elemento de un Array

// EJECUTAR EL LIVE SERVER PARA VER COMO SE INYECTA HTML DESDE JS
// let array = ['Levantarse', 'Comer', 'Estudiar', 'Dormir'];
// let texto = '';
// for (let index = 0; index < array.length; index++) { // Bucle for para recorrer el Array elemento por elemento
//     texto += '<li>' + array[index] + '</li>'; // Se agregar un elemento li por cada elemento del Array
// }
// document.getElementById('seleccionable').innerHTML = texto;

array = ['HTML', 'CSS', 'JS'];
array[array.length] = 'REACT'; // Forma de agregar un elemento al final del Array
array[8] = 'SQL'; // Rellena con undefined hasta la posicion que le indicamos
console.log(array);

// METODO FILTER
array = ['Manzana', 'Naranja', 'Manzana', 'Manzana'];
let resultado = array.filter(x => x == 'Manzana'); // Debe recibir una callback (funcion de flecha) que sirva para quedarnos con algunos elementos del Array
console.log(resultado);

array = [
    { nombre: 'Pedro', Apellido: 'Gonzalez' },
    { nombre: 'Maria', Apellido: 'Gonzalez' },
    { nombre: 'Lucia', Apellido: 'Gonzalez' },
    { nombre: 'Ricardo', Apellido: 'Perez' },
    { nombre: 'Lucas', Apellido: 'Ramirez' },
    { nombre: 'Fernanda', Apellido: 'Argento' },
];
resultado = array.filter(x => x.Apellido == 'Gonzalez'); // Si los elementos son objetos podemos filtrarlos por el valor de un atributo
for (let index = 0; index < resultado.length; index++) { // Se muestra un atributo de los elementos filtrados
    let element = resultado[index];
    console.log(element.nombre);
}

// METODO MAP
array = ['Manzana', 'Manzana', 'Manzana', 'Manzana'];
resultado = array.map(x => { // Debe recibir una callback (funcion de flecha) que sirva para seleccionar algunos elementos del Array y cambiar sus valores
    if (x == 'Manzana') return 'Naranja';
});
console.log(resultado);

// METODO FILL
array = ['Manzana', 'Manzana', 'Manzana', 'Manzana'];
resultado = array.fill('Naranja', 1); // Sustituye los elementos del Array a partir de un cierto indice
console.log(resultado);

// METODO FIND
array = ['Manzana', 'Naranja', 'Naranja', 'Manzana'];
resultado = array.find(x => x == 'Naranja'); // Debe recibir una callback (funcion de flecha) que sirva para quedarnos con la primera aparicion de un elemento del Array
console.log(resultado);

array = [
    { nombre: 'Pedro', Apellido: 'Gonzalez' },
    { nombre: 'Maria', Apellido: 'Gonzalez' },
    { nombre: 'Lucia', Apellido: 'Gonzalez' },
    { nombre: 'Ricardo', Apellido: 'Perez' },
    { nombre: 'Lucas', Apellido: 'Ramirez' },
    { nombre: 'Fernanda', Apellido: 'Argento' },
];
resultado = array.find(x => x.Apellido == 'Gonzalez');
console.log(resultado.nombre);

// METODO FINDINDEX
array = ['Manzana', 'Naranja', 'Manzana', 'Manzana'];
resultado = array.findIndex(x => x == 'Naranja'); // Debe recibir una callback (funcion de flecha) que sirva para quedarnos con el indice de la primera aparicion de un elemento del Array
console.log(resultado);

// METODO SOME
array = ['Manzana', 'Manzana', 'Naranja', 'Naranja'];
resultado = array.some(x => x == 'Naranja'); // Debe recibir una callback (funcion de flecha) que sirva para saber si se encontro al menos con un elemento en el Array y en ese caso devolver true
console.log(resultado);

// METODO EVERY
array= ['Naranja', 'Manzana', 'Manzana', 'Manzana'];
resultado = array.every(x => x == 'Naranja'); // Debe recibir una callback (funcion de flecha) que sirva para saber si se encontro al menos con un elemento diferente al indicado en el Array y en ese caso devolver false
console.log(resultado);

// METODO POP
array = ['Manzana', 'Naranja', 'Limon', 'Pera'];
resultado = array.pop(); // Nos devuelve el elemento final del Array y lo retira del mismo
console.log(resultado);
console.log(array);

// METODO SHIFT
array = ['Manzana', 'Naranja', 'Limon', 'Pera'];
resultado = array.shift(); // Nos devuelve el elemento inicial del Array y lo retira del mismo
console.log(resultado);
console.log(array);

// METODO PUSH
array = ['Manzana', 'Naranja', 'Limon', 'Pera'];
array.push('Ciruela'); // Agrega un elemento al final del Array
console.log(array);

// METODO UNSHIFT
array = ['Manzana', 'Naranja', 'Limon', 'Pera'];
array.unshift('Ciruela'); // Agrega un elemento al inicio del Array
console.log(array);

// METODO SPLICE
array = ['Manzana', 'Naranja', 'Limon', 'Pera'];
array.splice(2, 1, 'Ciruela'); // A partir de una posicion corta un determinado numero de elementos del Array y luego inserta nuevos desde la misma posicion
console.log(array);

array = ['Manzana', 'Naranja', 'Limon', 'Pera'];
array.splice(2, 2, 'Ciruela');
console.log(array);

array = ['Manzana', 'Naranja', 'Limon', 'Pera'];
array.splice(2, 0, 'Ciruela', 'Ananá'); // A partir de una posicion inserta elementos en el Array
console.log(array);

// METODO SLICE
array = ['Manzana', 'Naranja', 'Limon', 'Pera', 'Ciruela', 'Kiwi'];
resultado = array.slice(2, 4); // Nos devuelve una parte del Array que va desde una posicion de inicio hasta una final
console.log(resultado);

// METODO JOIN
array = ['Manzana', 'Naranja', 'Limon', 'Pera', 'Ciruela', 'Kiwi'];
console.log(array.join(' - ')); // Devuelve un String que surge de la union de cada uno de los elementos del Array y un texto

// METODO CONCAT
let frutas = ['Manzana', 'Naranja', 'Limon', 'Pera', 'Ciruela', 'Kiwi'];
let verduras = ['Lechuga', 'Zapallo', 'Cebolla', 'Papa'];
console.log(frutas.concat(verduras)); // Devuelve un Array que surge de la concatenacion de otros dos

// METODO SORT
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(numeros.sort()); // PROBLEMA ORDENANDO NUMEROS 1, 10, 11, 12, 13, 14, 15, 2 ...
console.log(numeros.sort((x, y) => x - y)); // SOLUCION UTILIZANDO UNA FUNCION FLECHA QUE SOLO SE NECESITA CON NUMEROS, CON TEXTOS NO EXISTE ESTE PROBLEMA
console.log(numeros.sort((x, y) => y - x)); // SOLUCION ORDEN DESCENDENTE

let autos = [
    { marca: 'FIAT', año: 2020 },
    { marca: 'BMW', año: 2019 },
    { marca: 'RENAULT', año: 2021 },
    { marca: 'FORD', año: 2023 },
];
console.log(autos.sort((x, y) => x.año - y.año)); // Ordenamiento de un Array de Objetos utilizando del valor de un atributo numericos
