// En Firefox presionar CTRL+SHIFT+I para ver la Consola

// Con var se puede declarar una variable y no asignarle ningún valor, por lo que quedaría indefinida
var nombreDeLaVariable1
console.log(nombreDeLaVariable1)
// Con let se puede declarar una variable y no asignarle ningún valor, por lo que quedaría indefinida
let nombreDeLaVariable2
console.log(nombreDeLaVariable2)
// Con const estamos obligados a declarar y asignarle un valor a una variable en la misma sentencia 
const nombreDeLaVariable3 = 'Curso de Javascript'
console.log(nombreDeLaVariable3)

// A las variables declaradas con var se les puede reasignar el valor
nombreDeLaVariable1 = 'Juan'
console.log(nombreDeLaVariable1)
nombreDeLaVariable1 = 'Manuel'
console.log(nombreDeLaVariable1)
nombreDeLaVariable1 = 'Pedro'
console.log(nombreDeLaVariable1)

// A las variables declaradas con let se les puede reasignar el valor
nombreDeLaVariable2 = 'Ana'
console.log(nombreDeLaVariable2)
nombreDeLaVariable2 = 'Maria'
console.log(nombreDeLaVariable2)
nombreDeLaVariable2 = 'Lucia'
console.log(nombreDeLaVariable2)

// A las variables declaradas con var se las puede redeclarar, lo que nos puede llevar a cometer errores
var nombreDeLaVariable1 = 42
console.log(nombreDeLaVariable1)

// Conclusión: utilizar const siempre que se pueda y sino let en caso de que haya que reasignar el valor, nunca utilizar var

// Declaración multiple
let x, y, z
console.log(x, y, z)
// Se puede pero no es obligatorio terminar las sentencias con ;
x = 5;
y = 2
// Asignación del valor en función del valor de otras variables
z = x + y
console.log(x, y, z)

let p = 5
// Esto esta prohibido porque las variables pueden llegar a quedar enganchadas a la misma posición de memoria
let q = p

let u, v, w
// Uso del ; para poder ingresar varias sentencias dentro de una misma línea
u = 3; v = 4; w = u + v;
console.log(u, v, z)

// Uso del ENTER para que una sentencia pueda ocupar mas de una línea
let variableConUnNombreExtremadamenteLargo =
    'Jose'
console.log(variableConUnNombreExtremadamenteLargo)