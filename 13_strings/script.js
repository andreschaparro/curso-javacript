// La siguiente línea coloca un carácter ' dentro de un string utilizando la barra de escape
console.log('Let\'s do it')

// La siguiente línea coloca un carácter \ dentro de un string
console.log('El carácter con el que se escapa es \\')

// La siguiente línea coloca un salto de línea y una tabulación dentro de un string
let textoMultilinea = 'Esto está arriba\n\tEsto está abajo y desplazado'
console.log(textoMultilinea)

// Las siguientes líneas muestran como obtener el tamaño de un string a partir de su propiedad length
let texto1 = 'Murciélago'
console.log(texto1, 'tiene', texto1.length, 'caracteres')

let texto2 = 'Murciélago '
console.log(texto2, 'tiene', texto2.length, 'caracteres')

let texto3 = 'Murciélago \n'
console.log(texto3, 'tiene', texto3.length, 'caracteres')

// El método slice de un string recorta parte del mismo
let original = "Educacion"
// El primer carácter dentro de un string tiene el índice 0
let recortePositivo = original.slice(4, 7)
console.log(recortePositivo)
// El último carácter dentro de un string tiene el índice -1
let recorteNegativo = original.slice(-5, -2)
console.log(recorteNegativo)

// El método replace de un string reemplaza parte del mismo
let frase = 'La educación es muy importante en Argentina'
let fraseModificada = frase.replace('Argentina', 'el mundo')
console.log(fraseModificada)

// El método toUpperCase de un string convierte todos los caracteres a mayúsculas
console.log(frase.toUpperCase())

// El método toUpperCase de un string convierte todos los caracteres a minúsculas
console.log(frase.toLowerCase())

// Las siguientes líneas muestran como concatenar strings con el operador aritmético de la suma o con el método concat
let parte1 = 'La educación es muy importante en '
let parte2 = 'Estados Unidos'
let parte3 = 'España'

frase = parte1 + parte2
console.log(frase)
frase = parte1.concat(parte3)
console.log(frase)

// El método trim elimina los caracteres en blanco tanto al principio como al final de un string
frase = '    La educación es muy importante en Italia      '
console.log(frase.trim())

// El método trimStart elimina los caracteres en blanco al principio de un string
console.log(frase.trimStart())

// El método trimEnd elimina los caracteres en blanco al final de un string
console.log(frase.trimEnd())

// El método charAt muestra el carácter que se encuentra en un determinado índice
let abecedario = "abcdefghijklmñopqrstuvwxyz"
console.log(abecedario.charAt(5))

// La siguiente línea manipula el string como si fuese un Array para generar el mismo resultado que al utilizar el método charAt
console.log(abecedario[5])

// El método split separa en varias partes un string y las almacena en un Array
const mensajeRecibido = 'Este texto te lo mando el backend. Este texto es importante. Dividí el texto'
// En la siguiente línea se utiliza un carácter como separador
console.log(mensajeRecibido.split('.'))
// En la siguiente línea se utiliza un string como separador
console.log(mensajeRecibido.split('. '))
// En la siguiente línea cada parte va a contener solo un carácter
console.log(mensajeRecibido.split(''))