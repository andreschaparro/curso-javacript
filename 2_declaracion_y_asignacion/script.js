// COMANDOS UTILES DE VISUAL STUDIO CODE:
// Usar alt+shift+f para formatear el documento
// Usar ctrl+] para comentar

var nombreDeLaVariable // se permite Undefined con var
let nombreDeVariable // se permite Undefined con let
const nombreVariable = 'Curso de Javascript' // asignacion obligatoria con const

// con var se puede reasignar
nombreDeLaVariable = 'Juan'
nombreDeLaVariable = 'Manuel'
nombreDeLaVariable = 'Pedro'

// con let se puede reasignar
nombreDeVariable = 'Ana'
nombreDeVariable = 'Maria'
nombreDeVariable = 'Lucia'

// con var se puede redeclarar...

var nombreDeLaVariable = 'Ricardo'

// CONCLUSION: USAR SIEMPRE CONST Y SOLO LET CUANDO SEA NECESARIO. NUNCA USAR VAR.

let x, y, z // declaracion multiple
x = 5; // poner siempre ; al final aunque no sea obligatorio
y = 2;
z = x + y; // asignacion en funcion de otras variables

let p = 5
let q = p // PROHIBIDO PORQUE LAS VARIABLES QUEDAN "ENGANCHADAS" APUNTANDO AL MISMO LUGAR EN LA MEMORIA

const variableConUnNombreExtremadamenteLargo =
    'Jose';