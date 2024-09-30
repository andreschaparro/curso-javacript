function mostrarConsola(num) {
    console.log(num)
}

function calcular(num1, num2, callback) {
    let suma = num1 + num2
    callback(suma)
}

// Cuando pasamos una función como parámetro a la misma se la llama función de callback
calcular(1, 2, mostrarConsola)