// Crear objetos (guardan pares "clave: valor" que representan atributos de algo de la realidad)

const auto1 = {
    marca: 'FIAT',
    modelo: 'UNO',
    peso: 1000,
    color: 'Rojo'
}

const auto2 = {
    marca: 'RENAULT',
    modelo: '12',
    peso: 1100,
    color: 'MARRON'
}

console.log('Auto 1', auto1);
console.log('Auto 2', auto2);

// Consultar cuanto vale un atributo de un objeto

console.log('El color del auto1 es', auto1.color); // con .atributo
console.log('La marca del auto 2 es', auto2['marca']); // con ['atributo']

// Modificar un atributo de un objeto (AUNQUE EL OBJETO SEA UN CONST)

auto1.marca = 'BWM';
auto1.modelo = 'X5';

console.log('Auto 1', auto1);

// Crear un objeto con una propiedad del tipo Array (lista)

const vendedor1 = {
    nombre: 'Pedro',
    empresa: 'Auto S.A.',
    habilidadesBlandas: ['Carisma', 'Puntualidad']
}
console.log(vendedor1);
console.log(vendedor1.habilidadesBlandas[0]); // imprime 'Carisma' el primer elemento del Array habilidadesBlandas

// Crear un objeto con una funcion dentro

const vendedor2 = {
    nombre: 'Ricardo',
    apellido: 'Gonzalez',
    empresa: 'Auto S.A.',
    habilidadesBlandas: ['Carisma', 'Puntualidad'],
    vender: function () {
        console.log('Ricardo a vendido un auto');
    }
}
vendedor2.vender();

// Crear un objeto con una funcion dentro que emplea datos del mismo internamente y retorna un valor

const vendedor3 = {
    nombre: 'Lucas',
    apellido: 'Rogriguez',
    empresa: 'Auto S.A.',
    habilidadesBlandas: ['Carisma', 'Puntualidad'],
    vender: function () {
        return 'Lucas a vendido un auto';
    },
    nombreCompleto: function () {
        // this hace referencia a algo que esta fuera del scope de function
        // y lo que esta inmediatamente afuera es el objeto
        return this.nombre + " " + this.apellido;
    }
}
console.log(vendedor3.vender());
console.log(vendedor3.nombreCompleto());