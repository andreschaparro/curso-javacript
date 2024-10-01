// En las siguientes líneas se muestra como atender una respuesta de un backend
// Las promesas son otro tipo de objeto de JS que funcionan como try y catch pero para código asíncrono
let promesa1 = new Promise((response, reject) => {
    let resp = 'Salió todo bien 1'
    response(resp)
})

promesa1.then(res => {
    console.log(res)
}).catch(error => {
    console.error(error)
})

let promesa2 = new Promise((response, reject) => {
    let resp = 'Algo falló 2'
    reject(resp)
})

promesa2.then(res => {
    console.log(res)
}).catch(error => {
    console.error(error)
})

// En las siguientes líneas se muestra como atender una respuesta con un formato más real de un backend
let promesa3 = new Promise((response, reject) => {
    let resp = {
        // Los códigos numéricos más típicos son: 200 (éxito), 400 (mal hecha la solicitud), y 500 (falla del backend)
        response: 200,
        description: 'Salió todo bien 3'
    }
    response(resp)
})

promesa3.then(res => {
    console.log(res.description)
}).catch(error => {
    console.error(error)
})

// En las siguientes líneas se utiliza setTimeout para simular la demora en la respuesta de un backend
let promesa4 = new Promise((response, reject) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Salió todo bien 4',
        }
        response(resp)
    }, 2500)
})

promesa4.then(res => {
    console.log(res.description)
}).catch(error => {
    console.error(error)
})

// En las siguientes líneas se muestra como atender varias respuestas de un backend de forma secuencial
let promesa5 = new Promise((response, reject) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Salió todo bien 5',
        }
        response(resp)
    }, 7500)
})

let promesa6 = new Promise((response, reject) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Salió todo bien 6',
        }
        response(resp)
    }, 10000)
})

let promesa7 = new Promise((response, reject) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Salió todo bien 7',
        }
        response(resp)
    }, 5000)
})

// La respuesta de la promesa5 se resuelve primero aunque sea la segunda en estar disponible
promesa5.then(res => {
    console.log(res.description)
    // La respuesta de la promesa6 demora en resolverse porque es la tercera en estar disponible
    promesa6.then(res => {
        console.log(res.description)
        // La respuesta de la promesa7 se resuelve inmediatamente después de la promesa6 porque es la primera en estar disponible
        promesa7.then(res => {
            console.log(res.description)
        }).catch(error => {
            console.error(error)
        })
    }).catch(error => {
        console.error(error)
    })
}).catch(error => {
    console.error(error)
})

// El código anterior tiene una sintaxis muy poco clara y se lo conoce como la pirámide de la perdición