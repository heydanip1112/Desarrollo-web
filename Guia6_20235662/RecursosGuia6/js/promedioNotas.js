// Acceder al contenedor donde se mostrarán los estudiantes
const containerEstudiantes = document.querySelector("#idContainerEstudiantes");

// Acceder a cada botón por medio de la API DOM
const btnPromedio = document.querySelector("#idBtnPromedio");

// Agregar el evento click a los botones, adicionalmente
// se le asigna la función que realizará la operación
btnPromedio.addEventListener("click", generarEstudiantes);

function generarEstudiantes() {
    // Utilizamos un arreglo para guardar la información del estudiante
    let arrayEstudiante = new Array();
    let totalEstudiantes = document.querySelector(
        "#inputNumeroEstudiantes"
    ).value;
    let contador = 1;

    // Utilizaremos un while para recorrer el total de estudiantes
    let calificacion,
        convertir = 0;
    while (contador <= totalEstudiantes) {
        let estudiante = prompt(`Ingrese el nombre del estudiante ${contador}`);
        
        // Verificando que sea un valor entero positivo
        do {
            calificacion = prompt(
                `Ingrese la calificación del estudiante ${contador}`
            );
            convertir = parseFloat(calificacion);
        } while (isNaN(convertir) || convertir < 0 || convertir > 10);

        // Asignando los valores al arreglo
        arrayEstudiante[contador - 1] = new Array(
            estudiante,
            parseFloat(calificacion).toFixed(2)
        );
        contador++;
    }

    // Recorriendo el arreglo con for..of
    // Verificaremos cuál es el promedio de las calificaciones
    // Y cuál de los estudiantes posee la calificación más alta
    let calificacionAlta = 0,
        promedio = 0,
        posicion = 0;

    let listado = "<h3>Listado de estudiantes registrados</h3>";
    listado += "<ol>";
    for (let indice of arrayEstudiante) {
        let nombre = indice[0];
        let nota = indice[1];
        // Imprimiendo lista de estudiantes
        listado += `<li><b>Nombre:</b> ${nombre} <b>Calificación:</b> ${nota}</li>`;

        // Verificación de calificación más alta
        if (nota > calificacionAlta) {
            calificacionAlta = nota;
            posicion = indice;
        }

        // Calculando el promedio
        promedio += parseFloat(nota);
    }
    listado += "</ol>";

    listado += `<p><b>Promedio de calificaciones:</b> ${(promedio / arrayEstudiante.length).toFixed(2)}</p>`;
    listado += `<p><b>Estudiante con mejor calificación:</b> ${promedio[0]}</p>`;

    // Imprimiendo resultado
    containerEstudiantes.innerHTML = listado;
}
