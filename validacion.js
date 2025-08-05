// Obtén el formulario del HTML por su ID
const loginForm = document.getElementById('loginForm');

// Añade un 'event listener' para escuchar cuando se envíe el formulario
loginForm.addEventListener('submit', function(event) {
    // Previene el comportamiento por defecto del formulario (que se recargue la página)
    event.preventDefault();

    // Obtén los valores de los campos de entrada
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    // Aquí defines las credenciales correctas.
    // En un proyecto real, estas credenciales se validarían en un servidor.
    const validEmail = 'usuario@correo.com';
    const validPassword = 'password123';

    // Comprueba si las credenciales son incorrectas
    if (emailInput !== validEmail || passwordInput !== validPassword) {
        // Si son incorrectas, muestra una alerta
        alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
        
        // Opcional: puedes limpiar los campos del formulario
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    } else {
        // Si las credenciales son correctas, puedes redirigir al usuario
        alert('¡Inicio de sesión exitoso!');
        // Por ejemplo: window.location.href = '/dashboard';
    }
});
