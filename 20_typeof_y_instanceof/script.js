// TYPEOF
// EJECUTAR node script.js

let a = typeof "Andrés";
console.log(a); // es un string

let b = typeof 3.14;
console.log(b); // es un number

let c = typeof NaN;
console.log(c); // es un number

let d = typeof true;
console.log(d); // es un boolean

let e = typeof ['Ricardo', 'Pedro', 'María'];
console.log(e); // OJO da object porque el Array es un tipo de objecto de JS 

let f = typeof { curso: 'JAVASCRIPT' };
console.log(f); // da object

let g = typeof new Date();
console.log(g); // OJO da object y en general todo lo que se pueda crear con el metodo new es un tipo de objecto de JS

let h = typeof function saludar() { console.log('Hola Mundo') };
console.log(h); // da function

let i = typeof algo;
console.log(i); // da undefined porque JS supone que algo es una variable

let j = typeof null;
console.log(j); // OJO da object por el null es un tipo de objecto de JS

// INSTANCEOF PERMITE DIFERENCIAR ENTRE LOS TIPOS DE OBJETO DE JS

let k = [1, 2, 3, 4, 5];
console.log(k instanceof Array);

let l = new Date();
console.log(l instanceof Date);

let m = new Set();
console.log(m instanceof Set);

let n = new Map();
console.log(n instanceof Map);

// let o = null;
// console.log(o instanceof null); // esto no se puede hacer porque null no tiene instancia es algo vacio