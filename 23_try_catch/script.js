// En las siguientes líneas se muestra como manejar errores
try {
    console.log('Llamando al backend 1')
    console.log('Salió todo bien 1')
} catch {
    console.log('Algo falló 1')
} finally {
    console.log('Se ejecuta siempre 1')
}

// En las siguientes líneas se fuerza a que se produzca un error
try {
    console.log('Llamando al backend 2')
    throw ('Error 2')
} catch {
    console.log('Algo falló 2')
} finally {
    console.log('Se ejecuta siempre 2')
}

// En las siguientes líneas se utiliza setTimeout para simular la demora en la respuesta de un backend con el objetivo de mostrar el comportamiento síncrono de JS
try {
    console.log('Llamando al backend 3')
    setTimeout(() => {
        console.log('Salió todo bien 3')
    }, 1000)
} catch (error) {
    console.log('Algo falló 3')
} finally {
    console.log('Se ejecuta siempre 3')
}

try {
    console.log('Llamando al backend 4')
    setTimeout(() => {
        throw ('Error 4')
    }, 2000);
} catch (error) {
    console.log('Algo falló 4', error)
} finally {
    console.log('Se ejecuta siempre 4')
}

// Conclusión: no utilizar try, catch y finally con código asíncrono porque el finally se va a ejecutar antes de que se resuelva el try