// Crear una cuenta en Firebase: https://firebase.google.com/
// Crear un proyecto llamado 'validacion-formularios'
// Crear una base de datos firestore en modo de prueba
// Documentación: https://firebase.google.com/docs/firestore/quickstart

// En la configuración del proyecto crear una aplicación web y copiar el firebaseConfig
const firebaseConfig = {
    apiKey: "AIzaSyAk8S1fD5ys1zyVE8W5T2MH4G2rmFWi32M",
    authDomain: "validacion-formularios-80f9b.firebaseapp.com",
    projectId: "validacion-formularios-80f9b",
    storageBucket: "validacion-formularios-80f9b.appspot.com",
    messagingSenderId: "758955969168",
    appId: "1:758955969168:web:744fc868182f2051676615"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar Firestore
const db = firebase.firestore();

// Validación del formulario sin Framework (Vanilla JS)
document.getElementById('formulario').addEventListener('submit', (event) => {// en vez de onclick vemos el submit
    event.preventDefault(); // Suprime la actualización de la pagina web luego de enviar el formulario que hace HTML por defecto

    // Validar el campo nombre
    const entradaNombre = document.getElementById('nombre');
    const divErrorNombre = document.getElementById('errorNombre');
    if (entradaNombre.value.trim() === '') {
        divErrorNombre.textContent = 'Por favor, introducí tu nombre';
        divErrorNombre.classList.add('mensaje-error');
    } else {
        divErrorNombre.textContent = '';
        divErrorNombre.classList.remove('mensaje-error');
    }

    // Validar el campo correo electrónico
    const entradaEmail = document.getElementById('email');
    const divErrorEmail = document.getElementById('errorEmail');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // REGEX para emails
    if (!emailPattern.test(entradaEmail.value)) // Se ejecuta si no respeta el test
    {
        divErrorEmail.textContent = 'Por favor, introducí un mail válido';
        divErrorEmail.classList.add('mensaje-error');
    } else {
        divErrorEmail.textContent = '';
        divErrorEmail.classList.remove('mensaje-error');
    }

    // Validar la contraseña
    const entradaPassword = document.getElementById('password');
    const divErrorPassword = document.getElementById('errorPassword');
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/; // REGEX para contraseña
    if (!passwordPattern.test(entradaPassword.value)) {
        divErrorPassword.textContent = 'La contraseña debe tener al menos 8 caracteres, números, mayúsculas y minúsculas y caracteres especiales';
        divErrorPassword.classList.add('mensaje-error');
    } else {
        divErrorPassword.textContent = '';
        divErrorPassword.classList.remove('mensaje-error');
    }

    // Si todos los campos son válidos enviar el formulario
    if (!divErrorNombre.textContent && !divErrorEmail.textContent && !divErrorPassword.textContent) {
        // Backend recibe la información
        db.collection("users").add({
            nombre: entradaNombre.value,
            email: entradaEmail.value,
            password: entradaPassword.value,
        })
            .then((docRef) => {
                alert('El formulario se ha enviado con éxito', docRef.id);
                document.getElementById('formulario').reset(); // Limpia el formulario
            })
            .catch((error) => {
                alert(error);
            });
    }
});