// ACCEDIENDO A LA REFERENCIA DEL FORMULARIO QUE
// TENDRÁ LOS NUEVOS ELEMENTOS
const newForm = document.getElementById("idNewForm");

// ACCEDIENDO A LA REFERENCIA DE BOTONES
const buttonCrear = document.getElementById("idBtnCrear");
const buttonAddElemento = document.getElementById("idBtnAddElement");
const buttonValidar = document.getElementById("idBtnValidar");


// ACCEDIENDO AL VALOR DEL SELECT PARA DETERMINAR EL TIPO DE ELEMENTO A CREAR
const cmbElemento = document.getElementById("idCmbElemento");

// ACCEDIENDO A LOS CONTROLES DEL MODAL
const tituloElemento = document.getElementById("idTituloElemento");
const nombreElemento = document.getElementById("idNombreElemento");

// CREANDO MODAL CON BOOTSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// AGREGANDO FUNCIONES
const vericarTipoElemento = function () {
    let elemento = cmbElemento.value;
    // validando que se haya seleccionado un elemento
    if (elemento != "") {
        // Método perteneciente al modal de bootstrap
        modal.show();
    } else {
        alert("Debe seleccionar el elemento que se creará");
    }
};

const verificarFormulario = function () {
    let formularioCompleto = true;
    const elementos = newForm.querySelectorAll("input, select, textarea"); // Todos los campos dentro del formulario

    elementos.forEach((elemento) => {
        // Remover borde rojo antes de la validación
        elemento.classList.remove("border-danger");

        // Validar checkboxes y radios (requiere al menos uno seleccionado en su grupo)
        if (elemento.type === "checkbox" || elemento.type === "radio") {
            const groupName = elemento.name;
            const grupo = newForm.querySelectorAll(`input[name="${groupName}"]`);
            const algunoSeleccionado = Array.from(grupo).some((item) => item.checked);

            if (!algunoSeleccionado) {
                formularioCompleto = false;
                grupo.forEach((item) => item.classList.add("border-danger"));
            }
        } else if (elemento.value.trim() === "") {
            // Si es un campo de texto, select o textarea y está vacío, añadir borde rojo
            formularioCompleto = false;
            elemento.classList.add("border-danger");
        }
    });

    if (formularioCompleto) {
        alert("Formulario completo");
    } else {
        alert("Formulario incompleto. Por favor, complete todos los campos.");
    }
};

// Añadir estilo para el borde rojo si no lo tienes en el CSS
// .border-danger { border: 2px solid red; }



const validarIdUnico = function (id) {
    return !document.getElementById(id);
};

const newSelect = function () {
    const nuevoId = `id${nombreElemento.value}`;
    if (!validarIdUnico(nuevoId)) {
        alert("Por favor, ingrese otro nombre del control, el actual ya pertenece a otro elemento.");
        return;
    }

    // Creando elementos
    let addElemento = document.createElement("select");
    // Creando atributos para el nuevo elemento

    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("class", "form-select");

    // Creando option para el select
    for (let i = 1; i <= 10; i++) {
        let addOption = document.createElement("option");
        addOption.value = i;
        addOption.innerHTML = `Opción ${i}`;
        addElemento.appendChild(addOption);
    }

    // Creando label para el nuevo control
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);
    // Creando texto para label
    labelElemento.textContent = tituloElemento.value;

    // Creando label de id
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control : ${nombreElemento.value}`;

    // Creando plantilla de bootstrap para visualizar el nuevo elemento
    let divElemento = document.createElement("div");
    // Agregando atributos
    divElemento.setAttribute("class", "form-floating");

    // Creando el input que sera hijo del div
    divElemento.appendChild(addElemento);
    // Creando el label que sera hijo del div
    divElemento.appendChild(labelElemento);

    // Creando el SPAN que sera hijo del nuevo Formulario
    newForm.appendChild(labelId);

    // Creando el Div que sera hijo del nuevo Formulario
    newForm.appendChild(divElemento);
};

const newRadioCheckbox = function (newElemento) {
    const nuevoId = `id${nombreElemento.value}`;
    if (!validarIdUnico(nuevoId)) {
        alert("Por favor, ingrese otro nombre del control, el actual ya pertenece a otro elemento.");
        return;
    }

    // Creando elementos
    let addElemento = document.createElement("input");
    //creando atributos para el nuevo elemento
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-check-input");

    //creando label para el nuevo control
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("class", "form-check-label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);
    //creando texto para label
    labelElemento.textContent = tituloElemento.value;

    //Creando label de id
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control: ${nombreElemento.value}`;

    // Creando plantilla de bootstrap para visualizar el nuevo elemento
    let divElemento = document.createElement("div");
    // Agregando atributos
    divElemento.setAttribute("class", "form-check");

    //Creando el input que sera hijo del div
    divElemento.appendChild(addElemento);
    //Creando el label que sera hijo del div
    divElemento.appendChild(labelElemento);

    //Creando el SPAN que sera hijo del nuevo Formulario
    newForm.appendChild(labelId);

    //Creando el Div que sera hijo del nuevo Formulario
    newForm.appendChild(divElemento);
};

const newInput = function (newElemento) {
    const nuevoId = `id${nombreElemento.value}`;
    if (!validarIdUnico(nuevoId)) {
        alert("Por favor, ingrese otro nombre del control, el actual ya pertenece a otro elemento.");
        return;
    }

    // Creando elementos de tipo = text, number, date y password
    let addElemento =
        newElemento == "textarea"
            ? document.createElement("textarea")
            : document.createElement("input");

    //creando atributos para el nuevo elemento
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-control");
    addElemento.setAttribute("placeholder", tituloElemento.value);

    //creando label para el nuevo control
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);

    //creando icono para el label
    let iconLabel = document.createElement("i");
    iconLabel.setAttribute("class", "bi bi-tag");

    //creando texto para label
    labelElemento.textContent = tituloElemento.value;

    //Creando el elemento i como hijo del label, afterbegin le
    //indicamos que se creara antes de su primer hijo
    labelElemento.insertAdjacentElement("afterbegin", iconLabel);

    //Creando label de id
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control: ${nombreElemento.value}`;

    // Creando plantilla de bootstrap para visualizar el nuevo elemento
    let divElemento = document.createElement("div");
    // Agregando atributos
    divElemento.setAttribute("class", "form-floating mb-3");

    //Creando el input que sera hijo del div
    divElemento.appendChild(addElemento);
    //Creando el label que sera hijo del div
    divElemento.appendChild(labelElemento);

    //Creando el SPAN que sera hijo del nuevo Formulario
    newForm.appendChild(labelId);

    //Creando el Div que sera hijo del nuevo Formulario
    newForm.appendChild(divElemento);
};

// AGREGANDO EVENTO CLIC A LOS BOTONES
buttonCrear.onclick = () => {
    vericarTipoElemento();
};
buttonValidar.onclick = () => {
    vericarFormulario();
};

buttonAddElemento.onclick = () => {
    if (nombreElemento.value != "" && tituloElemento.value != "") {
        let elemento = cmbElemento.value;

        if (elemento == "select") {
            newSelect();
        } else if (elemento == "radio" || elemento == "checkbox") {
            newRadioCheckbox(elemento);
        } else {
            newInput(elemento);
        }
    } else {
        alert("Faltan campos por completar");
    }
};

// Agregando evento para el modal de bootstrap
document.getElementById("idModal").addEventListener("shown.bs.modal", () => {
    // Limpiando campos para los nuevos elementos
    tituloElemento.value = "";
    nombreElemento.value = "";
    // Inicializando puntero en el campo del titulo para el control
    tituloElemento.focus();
});
