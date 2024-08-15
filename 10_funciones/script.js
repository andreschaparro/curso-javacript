// Ejemplo funcion suma

function suma(x, y) {
    return x + y;
}

const a = 5;
const b = 6;
const respuesta = suma(a, b);
console.log(`La respuesta de ${a} + ${b} es igual a`, respuesta);

// Ejemplo conversor de Fahrenheit a Celcius

const temperatura = 58;
// let temperatura // VA A GENERAR UN NaN PORQUE temperatura ES UNDEFINED

function transformarACelcius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

const celcius = transformarACelcius(temperatura)
// const celcius = transformarACelcius // IMPRIME LA FUNCION EN LA CONSOLA
// const celcius = transformarACelcius() // IMPRIME NaN (NOT A NUMBER) PORQUE ESTAMOS HACIENDO UNDEFINED - 32

console.log(`La temperatura en grados Celcius es de`, parseInt(celcius));

// EJEMPLO QUE GENERA UN ERROR PORQUE EN VEZ DE UNA SUMA HACE UNA CONCATENACION
function sumarUnaDocena(numero) {
    return numero + 12;
}

const res = sumarUnaDocena('10');
console.log(res);
console.log(parseInt(sumarUnaDocena('10'))); // FUNCIONES EN CASCADA, parseInt es UNA FUNCION DE JS

// Funcion de flecha o Arrow function
// Los 3 casos hacen lo mismo pero escribiendo menos

// let sumarDecena = (numero) => {
//     return numero + 12;
// }

// let sumarDecena = numero => {
//     return numero + 12;
// }

let sumarDecena = numero => numero + 12;

console.log(sumarDecena(5))

// Funcion de flecha sin parametros que no retorna nada

let mostrarMensaje = () => console.log("Soy una funcion");

mostrarMensaje();

// Funcion de flecha con mas de un parametro que no retorna nada

let sumar = (x, y) => {
    console.log(x + y);
}

sumar(1, 2);