document.addEventListener("DOMContentLoaded", function () {
    

    // Función para validar el formulario
    function validarFormulario() {
        var cedulaInput = document.getElementById("typeCC");
        var firstNameInput = document.getElementById("typeFirtsName");
        var lastNameInput = document.getElementById("typeLastName");
        var ageInput = document.getElementById("typeAge");
        var addressInput = document.getElementById("typeAddress");
        var emailInput = document.getElementById("typeEmail");
        var urlInput = document.getElementById("typeUrl");

        // Expresiones regulares para las validaciones
        var cedulaRegex = /^\d{10}$/;
        var nameRegex = /^[A-Za-z\s]+$/;
        var ageRegex = /^\d+$/;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

        // Validar la Cedula de Ciudadania
        if (!cedulaRegex.test(cedulaInput.value)) {
            alert("Por favor, ingrese una Cédula de Ciudadanía válida (10 dígitos numéricos).");
            return;
        }

        // Validar Nombres y Apellidos
        if (!nameRegex.test(firstNameInput.value) || !nameRegex.test(lastNameInput.value)) {
            alert("Por favor, ingrese nombres y apellidos válidos (solo letras y espacios).");
            return;
        }

        // Validar la Edad
        if (!ageRegex.test(ageInput.value)) {
            alert("Por favor, ingrese una edad válida (solo números).");
            return;
        }

        // Validar la Dirección
        if (addressInput.value.trim() === "") {
            alert("Por favor, ingrese una dirección.");
            return;
        }

        // Validar el Correo Electrónico
        if (!emailRegex.test(emailInput.value)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }

        // Validar la URL Personal
        if (!urlRegex.test(urlInput.value)) {
            alert("Por favor, ingrese una URL personal válida.");
            return;
        }

        // Si todas las validaciones pasan, puedes enviar el formulario o realizar otras acciones
        alert("Formulario válido. Puedes enviar los datos.");
    }

    function limpiarCampos() {
        var inputs = document.querySelectorAll("input, select");
        inputs.forEach(function (input) {
            input.value = "";
        });

        // Limpiar campos de radio (Genero)
        var generoRadios = document.querySelectorAll('input[name="genero"]');
        generoRadios.forEach(function (radio) {
            radio.checked = false;
        });
    }

    // Asignar la función de validación al botón de enviar
    var enviarButton = document.querySelector(".dataRegister");
    enviarButton.addEventListener("click", validarFormulario);

    var limpiarButton = document.querySelector(".dataDelete");
    limpiarButton.addEventListener("click", limpiarCampos);
});
