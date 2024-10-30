function validarFormulario() {
    const carnet = document.getElementById("carnet").value;
    const nombre = document.getElementById("nombre").value;
    const dui = document.getElementById("dui").value;
    const nit = document.getElementById("nit").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const email = document.getElementById("email").value;
    const edad = document.getElementById("edad").value;

    const carnetRegex = /^[A-Za-z]{2}\d{3}$/;
    const nombreRegex = /^[A-Za-z\s]+$/;
    const duiRegex = /^\d{8}-\d{1}$/;
    const nitRegex = /^\d{4}-\d{6}-\d{3}-\d{1}$/;
    const fechaNacimientoRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const edadRegex = /^\d+$/;

    let mensaje = "";

    if (!carnetRegex.test(carnet)) {
        mensaje += "Carnet inválido. Ejemplo: AB001<br>";
    }
    if (!nombreRegex.test(nombre)) {
        mensaje += "Nombre inválido. Solo letras y espacios<br>";
    }
    if (!duiRegex.test(dui)) {
        mensaje += "DUI inválido. Ejemplo: 12345678-9<br>";
    }
    if (!nitRegex.test(nit)) {
        mensaje += "NIT inválido. Ejemplo: 1234-567890-123-1<br>";
    }
    if (!fechaNacimientoRegex.test(fechaNacimiento)) {
        mensaje += "Fecha de nacimiento inválida. Formato DD/MM/YYYY<br>";
    }
    if (!emailRegex.test(email)) {
        mensaje += "Correo electrónico inválido<br>";
    }
    if (!edadRegex.test(edad)) {
        mensaje += "Edad inválida. Solo números<br>";
    }

    if (mensaje === "") {
        mensaje = "Formulario válido";
    }

    document.getElementById("mensaje").innerHTML = mensaje;
}