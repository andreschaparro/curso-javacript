// Ejecutar con Live Server
import { barcelona, roma, paris, londres } from "./ciudades.js"; // Esto se llama desestructurar porque voy a disponer de los objetos del otro archivo de forma individual

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a'); // Guardamos todos los elementos <a></a> del HTML
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

// console.log(enlaces);

// Agregar un evento onclick para cada enlace
enlaces.forEach(function (enlace) { // Con el metodo forEach() barro los enlaces
    enlace.addEventListener('click', function () {  // De este modo se agrega un evento onclick con su funcion asociada desde JS
        // Se desmarca cualquier enlace que fuese seleccionado previamente
        enlaces.forEach(function (enlace) { // bucle interno
            enlace.classList.remove('active');
        });
        // Se marca el enlace seleccionado
        this.classList.add('active');
        // Se trae la información del elemento seleccionado
        let contenido = obtenerContenido(this.textContent);
        // Se muestra la información del elemento seleccionado
        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;
    });
});

// Función para traer la información correcta desde ciudades.js
function obtenerContenido(enlace) {
    // A partir del String que esta en el archivo HTML se obtiene el objeto correspondiente
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres,
    }
    return contenido[enlace];
};