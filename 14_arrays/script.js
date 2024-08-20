// ARRAYS TAMBIEN CONOCIDOS COMO LISTAS O ARREGLOS
// EJECUTAR node script.js

// Forma 1 de crearlos e inicializarlos
const array1 = new Array(6); // Array de 6 elementos
array1[0] = "Curso de HTML"; // Se cuenta desde el 0 la posicion de cada elemento
array1[1] = "Curso de CS";
array1[2] = "Curso de JS";

console.log(array1); // Va a mostrar los 3 elementos anteriores separados por coma y 3 elementos vacios
console.log(array1[4]); // Los elementos vacios van a ser undefined

array1[3] = 46; // No hay problema en mezclar tipos de datos dentro de un array
console.log(array1);

array1[4] = { nombre: 'Pedro' }; // Objeto dentro de un array
console.log(array1);

array1[5] = [1, 2, 3, 4, 5, 6]; // Array anidado
console.log(array1);

console.log(array1.length); // Longitud del array con la propiedad .length

// Forma 2 de crearlos e inicializarlos
const array2 = [9, 5, 2, 7, 1];
console.log(array2.sort()); // Muestra el Array ordenado con el metodo .sort()

const array3 = ['Juan', 'Ricardo', 'Benjamin', 'Bruno', 'Manuel'];
console.log(array3.sort()); // Tambien funcion el metodo .sort()

console.log(array3[array3.length - 1]); // Forma de acceder al utlimo elemento de un Array

// EJECUTAR EL LIVE SERVER PARA VER COMO SE INYECTA HTML DESDE JS
// const array4 = ['Levantarse', 'Comer', 'Estudiar', 'Dormir'];
// let texto = '';
// for (let index = 0; index < array4.length; index++) { // Bucle for para recorrer el Array elemento por elemento
//     texto += '<li>' + array4[index] + '</li>'; // Se agregar un elemento li por cada elemento del Array
// }
// document.getElementById('seleccionable').innerHTML = texto;

const array5 = ['HTML', 'CSS', 'JS'];
array5[array5.length] = 'REACT'; // Forma de agregar un elemento al final del Array
array5[8] = 'SQL'; // Rellena con undefined hasta la posicion que le indicamos
console.log(array5);

// METODO FILTER
const array6 = ['Manzana', 'Naranja', 'Manzana', 'Manzana'];
const resultado1 = array6.filter(x => x == 'Manzana'); // Debe recibir una callback (funcion de flecha) que sirva para quedarnos con algunos elementos del Array
console.log(resultado1);

const array7 = [
    { nombre: 'Pedro', Apellido: 'Gonzalez' },
    { nombre: 'Maria', Apellido: 'Gonzalez' },
    { nombre: 'Lucia', Apellido: 'Gonzalez' },
    { nombre: 'Ricardo', Apellido: 'Perez' },
    { nombre: 'Lucas', Apellido: 'Ramirez' },
    { nombre: 'Fernanda', Apellido: 'Argento' },
];
const resultado2 = array7.filter(x => x.Apellido == 'Gonzalez'); // Si los elementos son objetos podemos filtrarlos por el valor de un atributo
for (let index = 0; index < resultado2.length; index++) { // Se muestra un atributo de los elementos filtrados
    const element = resultado2[index];
    console.log(element.nombre);
}

// METODO MAP
const array8 = ['Manzana', 'Manzana', 'Manzana', 'Manzana'];
const resultado3 = array8.map(x => { // Debe recibir una callback (funcion de flecha) que sirva para seleccionar algunos elementos del Array y cambiar sus valores
    if (x == 'Manzana') return 'Naranja';
});
console.log(resultado3);

// METODO FILL
const array9 = ['Manzana', 'Manzana', 'Manzana', 'Manzana'];
const resultado4 = array9.fill('Naranja', 1); // Sustituye los elementos del Array a partir de un cierto indice
console.log(resultado4);

// METODO FIND
const array10 = ['Manzana', 'Naranja', 'Naranja', 'Manzana'];
const resultado5 = array10.find(x => x == 'Naranja'); // Debe recibir una callback (funcion de flecha) que sirva para quedarnos con la primera aparicion de un elemento del Array
console.log(resultado5);

const resultado6 = array7.find(x => x.Apellido == 'Gonzalez');
console.log(resultado6.nombre);

// METODO FINDINDEX
const array11 = ['Manzana', 'Naranja', 'Manzana', 'Manzana'];
const resultado7 = array11.findIndex(x => x == 'Naranja'); // Debe recibir una callback (funcion de flecha) que sirva para quedarnos con el indice de la primera aparicion de un elemento del Array
console.log(resultado7);

// METODO SOME
const array12 = ['Manzana', 'Manzana', 'Naranja', 'Naranja'];
const resultado8 = array12.some(x => x == 'Naranja'); // Debe recibir una callback (funcion de flecha) que sirva para saber si se encontro al menos con un elemento en el Array y en ese caso devolver true
console.log(resultado8);

// METODO EVERY
const array13 = ['Naranja', 'Manzana', 'Manzana', 'Manzana'];
const resultado9 = array13.every(x => x == 'Naranja'); // Debe recibir una callback (funcion de flecha) que sirva para saber si se encontro al menos con un elemento diferente al indicado en el Array y en ese caso devolver false
console.log(resultado9);

// METODO POP
const array14 = ['Manzana', 'Naranja', 'Limon', 'Pera'];
const resultado10 = array14.pop(); // Nos devuelve el elemento final del Array y lo retira del mismo
console.log(resultado10);
console.log(array14);

// METODO SHIFT
const array15 = ['Manzana', 'Naranja', 'Limon', 'Pera'];
const resultado11 = array15.shift(); // Nos devuelve el elemento inicial del Array y lo retira del mismo
console.log(resultado11);
console.log(array15);

// METODO PUSH
const array16 = ['Manzana', 'Naranja', 'Limon', 'Pera'];
array16.push('Ciruela'); // Agrega un elemento al final del Array
console.log(array16);

// METODO UNSHIFT
const array17 = ['Manzana', 'Naranja', 'Limon', 'Pera'];
array17.unshift('Ciruela'); // Agrega un elemento al inicio del Array
console.log(array17);

// METODO SLICE