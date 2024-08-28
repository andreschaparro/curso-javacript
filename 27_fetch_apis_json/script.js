// FETCH-APIS-JSON
// EJECUTAR EL LIVE SERVER E INSPECCIONAR EL COMPORTAMIENTO DE LA RED
// PARA PROBAR LOS EJEMPLOS QUITAR LOS COMENTARIOS

// LAS APIS NOS PERMITEN CONSUMIR DATOS DEL BACKEND O DE TERCEROS
// LA SIGUIENTE API ES FALSA PERO SIRVER PARA HACER PRUEBAS: https://jsonplaceholder.typicode.com/

// FETCH POR DEFECTO UTILIZA EL METODO GET QUE SIRVE PARA LEER DATOS
// fetch('https://jsonplaceholder.typicode.com/users') // FETCH NOS DEVUELVE UNA PROMESA
//     .then(response => response.json()) // JSON ES UN FORMATO DE INTERCAMBIO DE DATOS QUE USA LA MISMA SINTAXIS QUE LOS OBJETOS DE JS Y EL METODO .json() NOS PERMITE RECUPERARLOS
//     .then(json => console.log(json)); // NOS VA A MOSTRAR UN ARRAY DE OBJETOS

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => console.log(response)); // VAMOS A VER EL 200 QUE INDICA EXITO Y EL JSON QUE VIMOS ANTES DENTRO DE LA RESPUESTA

// QUERYS HARDCODEADAS CON APIS
// fetch('https://jsonplaceholder.typicode.com/comments?postId=1') // Pide los comentarios del primer post
//     .then(response => response.json())
//     .then(json => console.log(json));

// QUERY SIN HARDCODEAR COMO SE USA EN JS
// let urlBase = 'https://jsonplaceholder.typicode.com';
// let query = 'comments?postId=1'; // Esto va a cambiar al interacturar con la pagina web
// fetch(`${urlBase}/${query}`)
//     .then(response => response.json())
//     .then(json => console.log(json));

// let urlBase = 'https://jsonplaceholder.typicode.com';
// let query = 'posts/1'; // Pide el post con id igual a 1
// fetch(`${urlBase}/${query}`)
//     .then(response => response.json())
//     .then(json => console.log(json));

// VAMOS A USAR EL METODO POST QUE SIRVE PARA ENVIAR UN NUEVO OBJETO
let urlBase = 'https://jsonplaceholder.typicode.com';
let query = 'posts';
let requestBody = {
    title: 'Ricardo comenta sobre tu foto',
    body: '¡Que bella foto!',
    userId: 1, // DEBERIA COINCIDIR CON EL ID DE RICARDO EN UN EJEMPLO REAL
};
fetch(`${urlBase}/${query}`, {
    method: 'POST', // INDICO EL METODO QUE VOY A USAR
    headers: {
        'Content-type': 'application/json; charset=UTF-8' // INDICO QUE VOY A ENVIAR UN JSON
    },
    body: JSON.stringify(requestBody), // CONVERTIMOS UN OBJETO DE JS A UN JSON
})
    .then(response => response.json())
    .then(json => console.log(json)); // NOS DEVUELVO LO MISMO QUE ENVIAMOS PORQUE ES UNA API FALSA PERO CON UN ID NUEVO PARA EL POST

// VAMOS A USAR EL METODO PUT QUE SIRVE PARA MODIFICAR UN OBJETO
// let urlBase = 'https://jsonplaceholder.typicode.com';
// let query = 'posts';
// let id = '1'; // INDICO EL ID QUE VAMOS A MODIFICAR
// let requestBody = {
//     id: parseInt(id),
//     title: 'Ricardo comenta sobre tu foto',
//     body: '¡Que bella foto!',
//     userId: 1, // DEBERIA COINCIDIR CON EL ID DE RICARDO EN UN EJEMPLO REAL
// };
// fetch(`${urlBase}/${query}/${id}`, {
//     method: 'PUT',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify(requestBody),
// })
//     .then(response => response.json())
//     .then(json => console.log(json));

// VAMOS A USAR EL METODO PATCH QUE SIRVE PARA MODIFICAR UN ATRIBUTO DE UN OBJETO
// let urlBase = 'https://jsonplaceholder.typicode.com';
// let query = 'posts';
// let id = '5'; // INDICO EL ID QUE VAMOS A MODIFICAR
// let requestBody = {
//     title: 'Ricardo comenta sobre tu foto', // SOLO MODIFICAMOS ESTE ATRIBUTO
// };
// fetch(`${urlBase}/${query}/${id}`, {
//     method: 'PATCH',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify(requestBody),
// })
//     .then(response => response.json())
//     .then(json => console.log(json));

// VAMOS A HACER DELETE QUE SIRVE PARA BORRAR UN ITEM
// let urlBase = 'https://jsonplaceholder.typicode.com';
// let query = 'posts';
// let id = '5'; // INDICO EL ID QUE VAMOS A BORRAR
// fetch(`${urlBase}/${query}/${id}`, {
//     method: 'DELETE',
// }); // NO NOS VA A DEVOLVER NADA LA API FALSA

// Hacer los TP4, TP5, y TP6