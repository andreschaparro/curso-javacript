// PROMESAS PARA MANEJO DE EVENTOS ASINCRONICOS
// SE USA CUANDO CONSUMIMOS DATOS DE UN BACKEND A TRAVES DE UNA API, APARECEN DEMORAS PARA RECIBIRLOS, Y NECESITAMOS MANTENER UN CIERTO ORDEN DE EJECUCION PARA PROCESARLOS
// EJECUTAR node script.js
// SINTAXIS
let promesa1 = new Promise((response, reject) => { // La promise es un objeto de JS
    let res = 'Esta es la respuesta del servicio'; // Esto puede ser cualquier cosa porque es lo que devuelve el backend
    // response(res); // Comentar esta linea para probar el reject
    reject('Fallo 1');
});

promesa1.then(res => { // En res aparece el 'Esta es la respuesta del servicio'
    console.log(res);
}).catch(error => {  // En error aparece el 'Fallo'
    console.error(error);
});

// UNA RESPUESTA DEL BACKEND MAS REAL
let promesa2 = new Promise((response, reject) => {
    let resp = { // Lo que devolvería el backend
        response: 200, // 200 indica éxito, 400 indica que hicimos mal la solicitud, 500 indica que falla el backend
        description: 'Esta info es importante 2',
    };
    response(resp);
    reject('Fallo 2');
});

promesa2.then(res => {
    console.log(res.description);
}).catch(error => {
    console.error(error);
});

// CON UNA DEMORA VEMOS QUE FUNCIONA COMO EL TRY-CATCH PERO DE FORMA ASINCRONA
let promesa3 = new Promise((response, reject) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Esta info es importante 3',
        };
        // response(resp);
        reject('Fallo 3');
    }, 3000);
});

promesa3.then(res => {
    console.log(res.description);
}).catch(error => {
    console.warn(error);
});

// PROMESAS EN CASCADA O PIRAMIDE DE LA PERDICION PORQUE TIENE UNA SINTAXIS MUY POCO CLARA...
let promesa4 = new Promise((response, reject) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Esta info es importante 4',
        };
        response(resp);
        reject('Fallo 4');
    }, 3000);
});

let promesa5 = new Promise((response, reject) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Esta info es importante pero suele demorar mucho 5',
        };
        response(resp);
        reject('Fallo 5');
    }, 5000);
});

let promesa6 = new Promise((response, reject) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Información rápida 6',
        };
        response(resp);
        reject('Fallo 6');
    }, 2500);
});

promesa4.then(res => {
    console.log(res.description);
    promesa5.then(res => {
        console.log(res.description);
        promesa6.then(res => { // Esta se dispara inmediatamente después de la anterior debido a que se la recibió a los 2,5 segundos y ya va a estar disponible a los 5 segundos 
            console.log(res.description);
        }).catch(error => {
            console.error(error);
        });
    }).catch(error => {
        console.error(error);
    });
}).catch(error => {
    console.error(error);
});