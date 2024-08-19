// Esto agregar el caracter del boton que pulsemos a la pantalla
function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}

// Borra la pantalla
function borrar() {
    document.getElementById('pantalla').value = '';
}

// Calcula la expresion ingresada en la pantalla
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla); // Funcion de JS que que interpreta un String como un codigo a ejecutar
    document.getElementById('pantalla').value = resultado;
}