let UserForm = localStorage.getItem('userForm')

if(!UserForm){
(async () => {
const { value: formValues } = await Swal.fire({
    title: "Multiple inputs",
    html: `
      <input id="swal-input1" class="swal2-input" type="text" placeholder="Ingrese su nombre" >
      <input id="swal-input2" class="swal2-input" type="password" placeholder="Ingrese su contraseña">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value
      ];
    }
  });
  if (formValues[0] == '' && formValues[1] == '') {
   console.error('no se permiten usuarios empty')
   Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Ingrese su usuario y contraseña por favor",
    footer: '<a href="http://127.0.0.1:5500/index.html">Intente otra vez</a>'
    });
    // Swal.fire(JSON.stringify(formValues));
  } else{
    localStorage.setItem('userForm', JSON.stringify(formValues))
    location.reload();
  }

}) ()
}

let spanUser = document.getElementById('nombre')
let nombreUs = JSON.parse(UserForm)

spanUser.textContent = nombreUs[0]

//BODY
// Obtener el usuario desde localStorage
let logUser = localStorage.getItem('userForm');
let nomUser = JSON.parse(logUser);

// Si no hay un usuario en el localStorage, redirigir al login
if (!nomUser) {
    window.location.href = 'login.html';  // Redirige si no hay usuario
}

// Función para mostrar la plantilla con el nombre de usuario
function platillaOK() {
    const nombreUsuarioElement = document.getElementById('nombreUsuario');
    
    // Verificar si hay un usuario válido
    if (nomUser && nomUser[0]) {
        nombreUsuarioElement.textContent = nomUser[0];  // Mostrar el nombre del usuario
    }
}

// Llamar a la función para mostrar el nombre del usuario
platillaOK();

// Función para cerrar la sesión
function cerrarSession() {
    localStorage.removeItem('userForm');  // Eliminar el usuario del localStorage
    window.location.href = 'login.html';  // Redirigir a la página de login
}

// Asignar la función de cerrar sesión al botón
document.getElementById('logoutBtn').addEventListener('click', cerrarSession);





