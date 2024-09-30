// En las siguientes líneas se muestra el manejo de errores
try {
    console.log('Llamando al backend')
    console.log('El backend nos responde: salió todo bien')
} catch {
    console.log('Algo falló')
} finally {
    console.log('Se ejecuta siempre')
}

// En las siguientes líneas se fuerza a que se produzca un error
try {
    console.log('Llamando al backend')
    throw ('El backend nos responde: mensaje de error')
} catch {
    console.log('Algo falló')
} finally {
    console.log('Se ejecuta siempre')
}

// En las siguientes líneas se utiliza setTimeout para simular la demora en las respuestas del backend con el objetivo de mostrar el comportamiento síncrono de JS
try {
    console.log('Llamando al backend')
    setTimeout(() => {
        console.log('El backend nos responde: salió todo bien')
    }, 1000)
} catch (error) {
    console.log('Algo falló')
} finally {
    console.log('Se ejecuta siempre')
}

try {
    console.log('Llamando al backend')
    setTimeout(() => {
        throw ('El backend nos responde: mensaje de error')
    }, 2000);
} catch (error) {
    console.log('Algo falló', error)
} finally {
    console.log('Se ejecuta siempre')
}

// Conclusión: no utilizar try, catch y finally con código asíncrono porque los finally se van a ejecutar antes de finalizar los try