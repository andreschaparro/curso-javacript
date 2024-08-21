// CONDICIONALES (IF-ELSE-ELSE IF-SWITCH)
// EJECUTAR node script.js

// ¿PUEDE ENTRAR ESTE CHICO AL BOLICHE?
let edadChico = 19;

if (edadChico >= 18) { // condicion
    console.log('Puedes ingresar al boliche'); // se ejecuta si se cumple la condicion
} else {
    console.log('No puedes ingresar al boliche'); // se ejecuta si no se cumple la condicion
}

// ¿PUEDE ENTRAR ESTA PERSONA AL BOLICHE?
let edadPersona = 15;

if (edadPersona >= 18 && edadPersona < 60) { // 2 condiciones con el operador AND
    console.log('Puedes ingresar al boliche');
} else if (edadPersona < 18) { // otra condicion
    console.log('No puedes ingresar al boliche porque eres menor de edad');
} else { // else general
    console.log('No puedes ingresar al boliche porque eres mayor y no se recomienda');
}

// SWITCH
let estiloDeMusica = 'Punk';
switch (estiloDeMusica) { // Elegir Switch Statement para que arme la estructura
    case 'Punk': // Una opcion posible
        console.log('Te recomiendo los Ramones');
    // break; // Omitir un break hace que se ejecute todo lo que sigue hasta que encuentre uno
    case 'Hard Rock':
        console.log('Te recomiendo los Gun N Roses');
        break;
    case 'Metal':
        console.log('Te recomiendo los Pantera');
        break;
    case 'Rock and Roll':
        console.log('Te recomiendo los Rolling Stones');
        break;
    case 'Pop':
        console.log('Te recomiendo Michael Jackson');
        break;
    default: // Si no coincide con ninguna opcion estra aca
        console.log('No conozco esta música pero te recomiendo escuchar Mozart');
        break;
}

// IF ANIDADOS CON ELSE INDEPENDIENTE

let edad = 18;
let nacionalidad = 'Argentino';
let tienePasaporte = true;

if (edad >= 18) {
    console.log('Tienes edad para viajar, aprobado trámite 1');
    if (nacionalidad == 'Argentino') {
        console.log('La documentación esta correcta, aprobado trámite 2');
        if (tienePasaporte) { // No hace falta igualar a true
            console.log('Tiene pasaporte, aprobado trámite 3');
        } else {
            console.log('No puedes viajar porque el pasaporte es obligatorio');
        }
    } else {
        console.log('Debes presentar la documentación de tu país de origen para poder viajar');
    }
} else {
    console.log('Debes ser mayor de edad para viajar al exterior');
}

// Hacer el TP2: Juego Adivinanza