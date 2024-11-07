// Obteniendo la referencia de los elementos
// por medio de arreglos asociativos
// aquí se esta utilizando el atributo name de cada elemento
const formulario = document.forms["frmRegistro"];
const button = document.forms["frmRegistro"].elements["btnRegistro"];

// CREANDO MODAL CON BOOTSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// OBTENIENDO LA REFERENCIA DEL CUERPO DEL MODAL
// PARA IMPRIMIR EL RESULTADO
const bodyModal = document.getElementById("idBodyModal");

// Recorrer el formulario
const recorrerFormulario = function () {
    let totText = 0;
    let totRadio = 0;
    let totCheck = 0;
    let totDate = 0;
    let totSelect = 0;
    let totFile = 0;
    let totPass = 0;
    let totEmail = 0;

    // Recorriendo elementos del formulario
    let elementos = formulario.elements;
    let totalElementos = elementos.length;

    for (let index = 0; index < totalElementos; index++) {
        // Accediendo a cada hijo del formulario
        let elemento = elementos[index];

        // verificando el tipo de control en el formulario
        let tipoElemento = elemento.type;
        //Verificando el tipo de nodo
        let tipoNode = elemento.nodeName;

        // Contabilizando el total de INPUT TYPE = TEXT
        if (tipoElemento == "text" && tipoNode == "INPUT") {
            console.log(elemento);
            totText++;
        }

        // Contabilizando el total de INPUT TYPE = PASSWORD
        else if (tipoElemento == "password" && tipoNode == "INPUT") {
            console.log(elemento);
            totPass++;
        }

        // Contabilizando el total de INPUT TYPE = EMAIL
        else if (tipoElemento == "email" && tipoNode == "INPUT") {
            console.log(elemento);
            totEmail++;
        }

        // Contabilizando el total de INPUT TYPE = RADIO
        else if (tipoElemento == "radio" && tipoNode == "INPUT") {
            console.log(elemento);
            totRadio++;
        }

        // Contabilizando el total de INPUT TYPE = CHECKBOX
        else if (tipoElemento == "checkbox" && tipoNode == "INPUT") {
            console.log(elemento);
            totCheck++;
        }

        // Contabilizando el total de INPUT TYPE = FILE
        else if (tipoElemento == "file" && tipoNode == "INPUT") {
            console.log(elemento);
            totFile++;
        }

        // Contabilizando el total de INPUT TYPE = DATE
        else if (tipoElemento == "date" && tipoNode == "INPUT") {
            console.log(elemento);
            totDate++;
        }

        // Contabilizando el total de INPUT TYPE = SELECT
        else if (tipoNode == "SELECT") {
            console.log(elemento);
            totSelect++;
        }
    }
    

    let resultado = `
        Total de input[type="text"] = ${totText}<br>
        Total de input[type="password"] = ${totPass}<br>
        Total de input[type="radio"] = ${totRadio}<br>
        Total de input[type="checkbox"] = ${totCheck}<br>
        Total de input[type="date"] = ${totDate}<br>
        Total de input[type="email"] = ${totEmail}<br>
        Total de select = ${totSelect}<br>
    `;

    bodyModal.innerHTML = resultado;
    // Funcion que permite mostrar el modal de Bootstrap
    // Esta funcion es definida por Bootstrap
    modal.show();

    

};

const validarFormulario = function () {
    const fechaActual = new Date();
    let hayCamposVacios = false;
    let fechaInvalida = false;
    let contraDistinta = false;
    let emailIncierto = false;

    for (let elemento of formulario.elements) {


        if (elemento.type === "date") {
            const fechaIngresada = new Date(elemento.value); // Convierte el valor del input a Date

            if (fechaIngresada > fechaActual) {
                fechaInvalida = true; // La fecha ingresada no puede ser futura
            }
        }if (elemento.type === "password"){
            const contra1 = document.getElementById("idPassword").value;
            const contra2 = document.getElementById("idPasswordRepetir").value;
            if (contra1!==contra2){
                contraDistinta=true;
            } else {
                contraDistinta=false;
            }
        }if (elemento.type === "email"){

            const emailCampo = document.getElementById("idCorreo").value;
            const emailValido = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

            if( !emailValido.test(emailCampo)) {
                emailIncierto = true;
            } else {
                emailIncierto = false;
            }

        }else if (elemento.type === "text" || elemento.type === "password" || elemento.type === "date") {
            if (elemento.value.trim() === "") {
                hayCamposVacios = true;
            } else{
                hayCamposVacios = false;
            }
        } else if (elemento.type === "radio") {
            const radios = formulario.elements[elemento.name];
            if (![...radios].some(radio => radio.checked)) {
                hayCamposVacios = true;
            }else{
                hayCamposVacios = false;
            }
        } else if (elemento.type === "checkbox") {
            const checkboxes = formulario.querySelectorAll(`input[name="${elemento.name}"]`);
            if (![...checkboxes].some(checkbox => checkbox.checked)) {
                hayCamposVacios = true;
            } else {
                hayCamposVacios = false;
            }
        } else if(elemento.nodeName === "SELECT"){
            const selectElement = document.getElementById("idCmPais");
            if (selectElement.selectedIndex === 0) {
                hayCamposVacios = true;
            } else {
                hayCamposVacios = false;
            }
        }
    }

    if (hayCamposVacios) {
        alert("Hay campos vacíos o sin seleccionar");
    } else if (fechaInvalida) {
        alert("Fecha de nacimiento inválida")
    }  else if (contraDistinta){
        alert("Las contraseñas son distintas")
    }else if (emailIncierto){
        alert("El email ingresado no es válido")
    } else {
        alert("Formulario valido")
    }


};



// agregando eventos al boton
buttonRegistro.onclick = () => {
    recorrerFormulario();
};

buttonValidar.onclick = () => {
    validarFormulario();
};
