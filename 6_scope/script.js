let x = 5
// Las llaves crean ambientes separados
{
    let x = 2
    // La siguiente línea muestra 2
    console.log(x)
}
// La siguiente línea muestra 5
console.log(x)
{
    let x
    // La siguiente línea muestra undefined
    console.log(x)
}
{
    // La siguiente línea no muestra undefined, sino que muestra 5, porque va al ambiente superior a buscar el valor de x
    console.log(x)
}

const y = 0
{
    const y = 1
    // La siguiente línea muestra 1
    console.log(y)
}
// La siguiente línea muestra 0
console.log(y)
{
    // La siguiente línea no muestra undefined, sino que muestra 0, porque va al ambiente superior a buscar el valor de y
    console.log(y)
}

//Conclusión: si no esta declarada una variable, la misma se busca en los ambientes superiores

let p = 5
{
    let q = 3
    // La siguiente línea hace lo mismo que p = p + q y se puede usar con: -, *, /, %
    p += q
    console.log(p)
}