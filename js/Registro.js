document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtiene los valores de los campos
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validaciones básicas
    if (username === '' || email === '' || password === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return;
    }

    // Simula un registro exitoso
    document.getElementById('successMessage').classList.remove('hidden');
    document.getElementById('registerForm').reset(); // Limpia el formulario
});