// CALLBACKS
// EJECUTAR node script.js

// FUNCION DE CALLBACK
function mostrarConsola(num) {
    console.log(num);
}

// FUNCION QUE RECIBE DOS NUMEROS Y UNA FUNCION QUE SE EJECUTARA LUEGO QUE ESTA FINALICE
function calcular(num1, num2, callback) {
    let suma = num1 + num2;
    callback(suma);
}

// CUANDO PASAMOS UNA FUNCION COMO PARAMETRO DECIMOS QUE ESTAMOS TRABAJANDO CON CALLBACKS
calcular(1, 2, mostrarConsola);