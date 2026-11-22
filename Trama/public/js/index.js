
// Recuperar proyectos guardados

let proyectos = JSON.parse(localStorage.getItem("proyectosTrama"));
const boton = document.getElementById('crearProyecto')

// Crear proyectos iniciales

if (proyectos === null) {

    proyectos = [
        {
            id: 1,
            nombre: "Portal del Taller",
        },
        {
            id: 2,
            nombre: "Guía del Barrio",
        }
    ];

    guardarProyectos();
}


// Guardar proyectos

function guardarProyectos() {

    localStorage.setItem(
        "proyectosTrama",
        JSON.stringify(proyectos)
    );

}


// Mostrar proyectos


function mostrarProyectos() {

    const lista = document.getElementById("listaProyectos");

    lista.innerHTML = "";

    for (let i = 0; i < proyectos.length; i++) {

        const proyecto = proyectos[i];

        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";

        const titulo = document.createElement("h3");
        titulo.textContent = proyecto.nombre;

        const separador = document.createElement("hr");

        // Crear contenedor de acciones
        const acciones = document.createElement("div");
        acciones.className = "acciones";

        const abrir = document.createElement("button");
        abrir.className = "abrir";
        abrir.textContent = "Abrir proyecto";

        abrir.onclick = function() {
            abrirProyecto(proyecto.id);
        };

        const borrar = document.createElement("p");
        borrar.className = "borrar";
        borrar.textContent = "Eliminar proyecto";

        borrar.onclick = function() {
            eliminarProyecto(proyecto.id);
        };

        // Añadir botones al contenedor
        acciones.appendChild(abrir);
        acciones.appendChild(borrar);

        // Añadir elementos a la tarjeta
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(separador);
        tarjeta.appendChild(acciones);

        lista.appendChild(tarjeta);

    }

}



// Crear proyecto

function crearProyecto() {

    const nombre = prompt("Escribe el nombre del nuevo proyecto:");

    if (nombre !== "") {

        const nuevoProyecto = {

            id: Date.now(),
            nombre: nombre,

        };

        proyectos.push(nuevoProyecto);

        guardarProyectos();

        mostrarProyectos();

    }

}


// Abrir proyecto

function abrirProyecto(id) {

    const proyecto = proyectos.find(function(p) {
        return p.id === id;
    });

    if (!proyecto) return;

    document.getElementById("pantallaInicio")
        .classList.add("oculto");

    document.getElementById("pantallaProyecto")
        .classList.remove("oculto");

    document.getElementById("nombreProyecto")
        .textContent = proyecto.nombre;

    document.getElementById("descripcionProyecto")
        .textContent = "Bienvenido al proyecto " + proyecto.nombre;

}


// Eliminar proyecto

function eliminarProyecto(id) {

    const confirmar = confirm(
        "¿Seguro que quieres eliminar este proyecto?"
    );

    if (confirmar) {

        proyectos = proyectos.filter(function(p) {
            return p.id !== id;
        });

        guardarProyectos();

        mostrarProyectos();

    }

}


// Cargar proyectos al iniciar

mostrarProyectos();
