// MANEJO DE ERRORES CON TRY-CATCH-FINALLY
// EJECUTAR node script.js

try {
    // PONEMOS EL CODIGO QUE PUEDE FALLAR, POR EJEMPLO, EL LLAMADO A UN BACKEND A TRAVES DE UNA API
    console.log('Llamando al backend');
} catch {
    // TOMAMOS EL ERROR Y HACEMOS ALGO QUE NOS PAREZCA CORRECTO
    console.log('Algo falló');
} finally {
    // SE EJECUTA SIEMPRE POR MAS QUE FALLE O NO
    console.log('Se ejecuta siempre');
}

// FORMA DE FORZAR UN FALLO CON throw()
// Esto se usa cuando el backend devuelve un mensaje de error
try {
    console.log('Llamando al backend');
    throw ('Este cliente no esta apto para la compra');
} catch (error) { // EN error VA A APARECER EL MENSAJE QUE PUSIMOS EN EL throw
    console.log('Algo falló', error);
} finally {
    console.log('Se ejecuta siempre');
}

// FORMA DE DEMORAR UNA EJECUCION CON setTimeout()
try {
    console.log('Llamando al backend');
    setTimeout(() => {
        console.log('El backend nos responde:');
        console.log('Este cliente es apto para la compra');
    }, 1000); // tiempo de demora en milisegundos
} catch (error) {
    console.log('Algo falló', error);
} finally {
    console.log('Se ejecuta siempre'); // ESTO SE VA A EJECUTAR ANTES DE LO QUE ESTA EN EL try POR CULPA DEL setTimeout PORQUE JS ES SINCRONO
}

// EL SIGUIENTE CODIGO EXPLOTA PORQUE EL catch ES SINCRONO Y SE EJECUTA ANTES DE QUE LLEGUE EL throw
try {
    console.log('Llamando al backend');
    setTimeout(() => {
        console.log('El backend nos responde:');
        throw ('Este cliente no esta apto para la compra');
    }, 1000);
} catch (error) {
    console.log('Algo falló', error);
} finally {
    console.log('Se ejecuta siempre');
}