//Este script se va a cargar en todas las páginas
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Funcionalidad en modo oscuro
    const body = document.body;
    const toggleBtn = document.getElementById("toggleTheme");
    
    //Sólo ejecuta si existe el botón en dashboard y add-task
    if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      // Alternar la clase dark-mode en el body
        body.classList.toggle("dark-mode");

      // Cambiar el texto del botón según el estado
        this.textContent = body.classList.contains("dark-mode")
        ? "Modo Claro"
        : "Modo Oscuro";
    });
    }
})

    // 2. Validación
    const loginForm = document.getElementById("loginForm");
    if(loginForm) {
        loginForm.addEventListener("submit", function (e){
            const usuario = document.getElementById("usuario").value.trim();
            const contrasena = document.getElementById("contrasena").value.trim();
            const errorDiv = document.getElementById("errorLogin");

            // Para limpiar el mensaje anterior
            errorDiv.textContent = "";

            //Validamos campos
            if (!usuario) {
                e.preventDefault();
                errorDiv.textContent = "Atención: El usuario es obligatorio.";
            } else if (!contrasena) {
                e.preventDefault();
                errorDiv.textContent = "Atención: La contraseña es obligatoria";
            }
        });
    }

    