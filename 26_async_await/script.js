// PROMESAS CON ASYNC-AWAIT PERMITE SOLUCIONAR EL PROBLEMA DE LA PIRAMIDE DE LA PERDICION
// EJECUTAR node script.js
let promesa1 = new Promise((response, reject) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Esta info es importante',
        };
        response(resp);
        reject('Fallo 1');
    }, 3000);
});

let promesa2 = new Promise((response, reject) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Esta info es importante pero suele demorar mucho',
        };
        response(resp);
        reject('Fallo 2');
    }, 5000);
});

let promesa3 = new Promise((response, reject) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Información rápida',
        };
        response(resp);
        reject('Fallo 3');
    }, 2500);
});

async function ejecutarPromesas() { // Ya no hace falta armar la estructura anidada sino que se define una función del tipo async
    let respuestaProm1 = await promesa1; // El await indica que se debe esperar el response de la promesa antes de proseguir la ejecución
    console.log(respuestaProm1);
    let respuestaProm2 = await promesa2;
    console.log(respuestaProm2);
    let respuestaProm3 = await promesa3;
    console.log(respuestaProm3);
}

ejecutarPromesas() // Llamamos a la función