let edad = 19

// Escribir if y seleccionar If-Else Statement
if (edad >= 18) {
    console.log('Puedes ingresar al boliche')
} else {
    edad.log('No puedes ingresar al boliche')
}

edad = 15

if (edad >= 18 && edad < 60) {
    console.log('Puedes ingresar al boliche')
} else if (edad < 18) {
    console.log('No puedes ingresar al boliche porque eres menor de edad')
} else {
    console.log('No puedes ingresar al boliche porque eres mayor y no se recomienda')
}

let estiloDeMusica = 'Punk'

// Escribir switch y seleccionar Switch Statement
switch (estiloDeMusica) {
    case 'Punk':
        console.log('Te recomiendo los Ramones')
    case 'Hard Rock':
        console.log('Te recomiendo los Gun N Roses')
        break
    case 'Metal':
        console.log('Te recomiendo los Pantera')
        break
    case 'Rock and Roll':
        console.log('Te recomiendo los Rolling Stones')
        break
    case 'Pop':
        console.log('Te recomiendo Michael Jackson')
        break
    default:
        console.log('No conozco esta música pero te recomiendo escuchar Mozart')
        break
}

edad = 18
let nacionalidad = 'Argentino'
let tienePasaporte = true

if (edad >= 18) {
    console.log('Tienes edad para viajar, aprobado trámite 1')
    if (nacionalidad == 'Argentino') {
        console.log('La documentación esta correcta, aprobado trámite 2')
        if (tienePasaporte) {
            console.log('Tiene pasaporte, aprobado trámite 3')
        } else {
            console.log('No puedes viajar porque el pasaporte es obligatorio')
        }
    } else {
        console.log('Debes presentar la documentación de tu país de origen para poder viajar')
    }
} else {
    console.log('Debes ser mayor de edad para viajar al exterior')
}