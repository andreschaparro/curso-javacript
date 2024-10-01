// En las siguientes líneas se muestra como hacer una solicitud para leer datos (método GET) de una api con fetch
// Al hacerla, fetch nos devuelve una promesa
// https://jsonplaceholder.typicode.com/
fetch('https://jsonplaceholder.typicode.com/users')
    // json es un formato de intercambio de datos que utiliza una notación similar a la de los objetos de JS
    // https://codebeautify.org/jsonviewer
    .then(response => response.json())
    .then(json => console.log(json))

// En las siguientes líneas se muestra el código numérico llamado status que vale 200
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => console.log(response))

// En las siguientes líneas se muestra el código numérico llamado status que vale 404 porque pasamos una url incorrecta
fetch('https://jsonplaceholder.typicode.com/user')
    .then(response => console.log(response))

// En las siguientes líneas se muestra como hacer una query o consulta hardcodeada
// Con la misma, se obtienen los comentarios del posteo cuyo postId vale 1
fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then(response => response.json())
    .then(json => console.log(json))

// En las siguientes líneas se muestra como hacer una query o consulta de forma dinámica
let urlBase = 'https://jsonplaceholder.typicode.com'
let query = 'comments?postId=1'

fetch(`${urlBase}/${query}`)
    .then(response => response.json())
    .then(json => console.log(json))

query = 'posts/1'

fetch(`${urlBase}/${query}`)
    .then(response => response.json())
    .then(json => console.log(json))

// En las siguientes líneas se muestra como hacer una solicitud para enviar un nuevo ítem (método POST) mediante una api con fetch
// El requestBody es el nuevo ítem
query = 'posts'
let requestBody = {
    title: 'Ricardo comenta sobre tu foto',
    body: '¡Linda foto!',
    // En la realidad el userId debería ser el de Ricardo para no romper nada
    userId: 1,
}

fetch(`${urlBase}/${query}`, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    // El método stringify convierte un objeto de JS en un json
    body: JSON.stringify(requestBody),
})
    // El status va a valer 201 en caso de éxito cuando se utiliza el método POST
    .then(response => response.json())
    // El backend es el encargado de crear el id para el nuevo item
    .then(json => console.log(json))

// En las siguientes líneas se muestra como hacer una solicitud para modificar un ítem (método PUT) mediante una api con fetch
// Como el ítem ya existe debemos indicar su id en el requestBody
let id = '5'
requestBody = {
    id: parseInt(id),
    title: 'Ricardo comenta sobre tu foto',
    body: '¡Mala foto!',
    userId: 1,
}

fetch(`${urlBase}/${query}/${id}`, {
    method: 'PUT',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(requestBody),
})
    .then(response => response.json())
    .then(json => console.log(json))

// En las siguientes líneas se muestra como hacer una solicitud para modificar un atributo de un ítem (método PATCH) de una api con fetch
// El requestBody solo debe contener un atributo
id = '10'
requestBody = {
    title: 'Ricardo comenta sobre tu foto',
}

fetch(`${urlBase}/${query}/${id}`, {
    method: 'PATCH',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(requestBody),
})
    .then(response => response.json())
    .then(json => console.log(json))

// En las siguientes líneas se muestra como hacer una solicitud para borrar un ítem (método DELETE) mediante una api con fetch
id = '15'
fetch(`${urlBase}/${query}/${id}`, {
    method: 'DELETE',
})