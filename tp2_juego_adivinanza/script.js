// Aca el juego selecciona un numero al alazar para que el jugador adivine
let numero0a100 = Math.random() * 100; // del 0 al 100
let numero0a99 = Math.floor(numero0a100); // del 0 al 99 porque redondea hacia abajo siempre
let numeroAzar = numero0a99 + 1; // del 1 al 100

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0

// Esta accion se va a ejecutar cuando toquemos el boton Comprobar
function chequearResultado() {
    intentos++;
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value); // El parseInt es necesario porque los input de HTML siempre devuelven texto
    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) { // Si se cumple cualquiera de las condiciones se ejecuta el if
        mensaje.textContent = 'Por favor introduce un número válido entre 1 y 100'; // Modifica el contenido del parrafo
        mensaje.style.color = 'black'; // CSS inyectado desde HTML
        return; // Termina de ejecutar la funcion
    }
    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = '¡Felicitaciones! ¡Has adivinado el número!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true; // Para que no se pueda cambiar
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = '¡Más alto! El número es mayor al que dijiste';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = '¡Más bajo! El número es menor al que dijiste';
        mensaje.style.color = 'blue';
    }
}