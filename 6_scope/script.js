// SCOPE (DISPONIBILIDAD)

let x = 5

// LAS LLAVES SEPARAN AMBIENTES
{
    let x = 2
    console.log(x) // muestra 2
}

console.log(x) // muestra 5

{
    let x
    console.log(x) // muestra undefined
}

{
    console.log(x) // OJO, NO MUESTRA UNDEFINED, MUESTRA 5 XQ VA AL AMBIENTE SUPERIOR A BUSCAR x
}

const y = 0 // Con const pasa lo mismo

{
    const y = 1
    console.log(y) // muestra 1
}

console.log(y) // muestra 0

{
    console.log(y) // OJO, NO MUESTRA UNDEFINED, MUESTRA 0 XQ VA AL AMBIENTE SUPERIOR A BUSCAR y
}

let p = 5

{
    let q = 3
    p += q // es lo mismo que p = p + q y se puede usar con: -, *, /, %
    console.log(p) 
}