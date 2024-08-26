// REGEX O EXPRESIONES REGULARES
// EJECUTAR node script.js
// CASO: UNA PALABRA DENTRO DE UN TEXTO
let texto = 'Este curso es de Javascript';
let busqueda = texto.search('Javascript');
console.log(busqueda); // Devuelve la posición a partir de la cual aparece la palabra

busqueda = texto.search(/Javascript/);
console.log(busqueda); // Devuelve la posición a partir de la cual aparece la palabra

busqueda = texto.search(/javascript/);
console.log(busqueda); // En este caso no lo encuentra porque es case sensitive

busqueda = texto.search(/javascript/i); // El modificador i es para ignorar el case sensitive
console.log(busqueda);

// Modificadores
// i: ignorar case sensitive
// g: buscar en todo el texto (no se detiene en el primer match)
// m: busqueda multi-linea

// Metodo test() para saber si hay un match
let pattern = /javascript/i;
let resultado = pattern.test(texto);
console.log(resultado); // Devuelve true

pattern = /javascript/;
resultado = pattern.test(texto);
console.log(resultado); // Devuelve false

// Metodo exec() que nos devuelve un Array con más información
pattern = /javascript/i;
resultado = pattern.exec(texto);
console.log(resultado);

// CASO: NUMERO DENTRO DE UN TEXTO
texto = 'Numero de curso: 3';
pattern = /[0-9]/;
resultado = pattern.test(texto);
console.log(resultado); // Devuelve true

texto = 'Numero de curso:';
pattern = /\d/; // es lo mismo que [0-9]
resultado = pattern.test(texto);
console.log(resultado); // Devuelve false

// CASO: CORREOS ELECTRONICOS
pattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
console.log(pattern.test('chaparroandres87@1.1')); // Devuelve false
console.log(pattern.test('chaparroandres87@1.com')); // Devuelve false
console.log(pattern.test('chaparroandres87')); // Devuelve false
console.log(pattern.test('chaparroandres87@gmail')); // Devuelve false
console.log(pattern.test('chaparroandres87@gmail.com')); // Devuelve true