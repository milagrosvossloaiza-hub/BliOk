// Obtener el formulario y el área donde se mostrarán los comentarios
const form = document.getElementById('formComentario');
const listaComentarios = document.getElementById('listaComentarios');

// Función para agregar un nuevo comentario
form.addEventListener('submit', function (event) {
    event.preventDefault();  // Evita el recargado de la página al enviar el formulario

    const comentarioTexto = document.getElementById('comentarioTexto').value;

    // Verificar que el comentario no esté vacío
    if (comentarioTexto.trim() === "") {
        alert("Por favor, escribe un comentario.");
        return;
    }

    // Crear un nuevo div para mostrar el comentario
    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('comentario');
    nuevoComentario.textContent = comentarioTexto;

    // Agregar el nuevo comentario a la lista de comentarios
    listaComentarios.appendChild(nuevoComentario);

    // Limpiar el área de texto después de agregar el comentario
    document.getElementById('comentarioTexto').value = "";
});