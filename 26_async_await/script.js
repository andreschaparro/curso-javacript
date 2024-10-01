// En las siguientes líneas se utiliza async para definir una función asíncrona y await para esperar las respuestas dentro de la misma
// Su uso nos evita caer en la pirámide de la perdición
let promesa1 = new Promise((response, reject) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Salió todo bien 1',
        }
        response(resp)
    }, 5000)
})

let promesa2 = new Promise((response, reject) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Salió todo bien 2',
        }
        response(resp)
    }, 7500)
})

let promesa3 = new Promise((response, reject) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Salió todo bien 3',
        }
        response(resp)
    }, 2500)
})

async function ejecutarPromesas() {
    let respuestaProm1 = await promesa1
    console.log(respuestaProm1)
    let respuestaProm2 = await promesa2
    console.log(respuestaProm2)
    let respuestaProm3 = await promesa3
    console.log(respuestaProm3)
}

ejecutarPromesas()