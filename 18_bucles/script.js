// BUCLES (FOR-WHILE-DO WHILE)
// EJECUTAR node script.js

// FOR PARA RECORRER UN ARRAY
let tecnologias = ['HTML', 'CSS', 'JAVSCRIPT', 'REACT', 'ANGULAR'];
for (let index = 0; index < tecnologias.length; index++) { // Seleccionar For Loop para que se cree la estructura
    console.log(tecnologias[index]);
}

let texto = ''; // Forma de imprimir los elementos en una sola linea
for (let index = 0; index < tecnologias.length; index++) {
    texto += tecnologias[index];
    if (index < tecnologias.length - 1) {
        texto += ', ';
    }
}
console.log(texto);

// FOR OF O FOR MENOS VERBORRAGICO PARA RECORRER UN ARRAY
for (tecnologia of tecnologias) {
    console.log(tecnologia);
}

// FOR IN PARA RECORRER OBJETOS
const alumno = {
    name: 'Ricardo',
    edad: 25,
    tecnologias: ['HTML', 'CSS'],
}

for (key in alumno) {
    console.log(alumno[key]);
}

// FOR EACH PARA RECORRER UN ARRAY
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numeros.forEach(numero => { // Seleccionar For-Each Loop using
    console.log(numero);
});

// WHILE SIRVE COMO BUCLE LOGICO NO ES PARA RECORRER ALGO
let edad = 0;
while (edad < 18) {
    console.log(`Tienes ${edad} años y aún eres menor de edad`);
    edad++; // OJO PORQUE SI NO LO PONEMOS ENTRAMOS A UN BUCLE INFINITO Y SE TRABA EL NAVEGADOR O EL VISUAL STUDIO CODE
}
console.log(`Tienes ${edad} años y ya eres mayor de edad`);

// DO WHILE PRIMERO EJECUTA y DESPUES COMPRUEBA LA CONDICION
// ES DECIR ES AL REVES DEL WHILE QUE PRIMERO COMPRUEBA Y DESPUES EJECUTA
edad = 0;
do {
    console.log(`Tienes ${edad} años y aún eres menor de edad`);
    edad++;
} while (edad < 18);
console.log(`Tienes ${edad} años y ya eres mayor de edad`);

// BREAK ROMPE LOS BUCLES
edad = 0;
while (edad < 30) {
    console.log(edad);
    edad++;
    if (edad == 25) break;
}
console.log(`Saliste del bucle porque tenes ${edad} años`);