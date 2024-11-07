// Inicializando referencia de botones con metodos actuales
const buttonAgregarPagina = document.querySelector("#idAgregarPagina");
const buttonMenu = document.querySelector("#idAgregarMenu");
const buttonTitulo = document.querySelector("#idAgregarTitulo");
const buttonParrafo = document.querySelector("#idAgregarParrafo");

const pagina = document.querySelector("#idPagina");

buttonAgregarPagina.onclick = function () {
    const contenedorVerificado = document.querySelector("#idDivPage");

    if (!contenedorVerificado) {
        //Creando el contenedor de la pagina
        const contenedor = document.createElement("div");
        contenedor.setAttribute("id", "idDivPage");
        contenedor.setAttribute("class", "container");
        contenedor.setAttribute(
            "style",
            "border:solid 1px black; height:500px; overflow: scroll; overflow-x: hidden;"
        );

        pagina.appendChild(contenedor);
    } else {
        alert("Ya se agrego el contenedor de la pagina.");
    }
};

buttonMenu.onclick = function () {
    //Verificando que exista el contenedor de la pagina
    const contenedor = document.querySelector("#idDivPage");

    if (contenedor) {
        // Verificando que exista el menu
        const menuVerificar = document.querySelectorAll("#idDivPage > header");

        if (menuVerificar.length == 0) {
            // Clonando el menu principal y pegando en la pagina
            // Para luego crearlo en la nueva pagina
            const menu = document.querySelector("header").cloneNode(true);
            contenedor.appendChild(menu);
        } else {
            alert("Ya ha sido agregado el menu");
        }
    } else {
        alert("Primero debe agregar un contenedor de pagina");
    }
};

buttonTitulo.onclick = function () {
    //Verificando que exista el contenedor de la pagina
    const contenedor = document.querySelector("#idDivPage");

    // Verificando que exista el menu
    const menu = document.querySelectorAll("#idDivPage > header");

    if (contenedor) {
        if (menu.length > 0) {
            let titulo = prompt("Agregue el titulo de la pagina");
            const h1 = document.createElement("h1");
            // Agregando clases de bootstrap
            h1.setAttribute("class", "display-5 text-center fw-bold py-4 my-4");
            h1.innerHTML = titulo;

            if (titulo !== "" && titulo != null) {
                contenedor.appendChild(h1);
            } else {
                alert(
                    "No se ha ingresado ningun titulo, por favor ingrese informacion"
                );
            }
        } else {
            alert("Debe agregar un menu primero");
        }
    } else {
        alert("Primero debe agregar un contenedor de pagina.");
    }
};

buttonParrafo.onclick = function () {
    //Verificando que exista el contenedor de la pagina
    const contenedor = document.querySelector("#idDivPage");

    // Verificando que exista el menu
    const menu = document.querySelectorAll("#idDivPage > header");

    if (contenedor) {
        if (menu.length > 0) {
            let texto = prompt("Agregue un parrafo a su pagina web");

            if (texto != "" && texto != null) {
                const parrafo = document.createElement("p");
                // Agregando clases de Bootstrap
                parrafo.setAttribute("class", "lead mb-4 py-4");
                parrafo.innerHTML = texto;

                // Creando parrafo como hijo del contenedor
                contenedor.appendChild(parrafo);
            } else {
                alert(
                    "No se ha registrado ningun parrafo, por favor ingrese informacion"
                );
            }
        } else {
            alert("Debe agregar un menu primero");
        }
    } else {
        alert("Primero debe agregar un contenedor de pagina.");
    }
};
