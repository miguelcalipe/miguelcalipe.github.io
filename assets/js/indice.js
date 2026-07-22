document.addEventListener("DOMContentLoaded", () => {

    //==========================================================
    // Buscar el contenedor del índice
    //==========================================================

    const indice = document.getElementById("indice");

    if (!indice) return;

    //==========================================================
    // Buscar el artículo
    //==========================================================

    const articulo = document.querySelector("article");

    if (!articulo) return;

    //==========================================================
    // Buscar todos los H2 y H3
    //==========================================================

    const titulos = articulo.querySelectorAll("h2, h3");

    if (titulos.length === 0) return;

    //==========================================================
    // Crear el título del índice
    //==========================================================

    const titulo = document.createElement("h2");
    titulo.textContent = "Índice";

    //==========================================================
    // Crear el botón Mostrar/Ocultar
    //==========================================================
    const boton = document.createElement("button");

    boton.textContent = "Ocultar índice";

    boton.type = "button";

    boton.className = "boton-indice";

    //==========================================================
    // Crear la lista
    //==========================================================

    const lista = document.createElement("ul");

    lista.className = "lista-indice";

    //==========================================================
    // Crear cada elemento del índice
    //==========================================================

    titulos.forEach((tituloActual, i) => {

        // Si no tiene id, crearlo automáticamente

        if (!tituloActual.id) {

            tituloActual.id = "seccion-" + (i + 1);

        }

        const li = document.createElement("li");

        // Sangría para los H3

        if (tituloActual.tagName === "H3") {

            li.classList.add("subnivel");

        }

        const enlace = document.createElement("a");

        enlace.href = "#" + tituloActual.id;

        enlace.textContent = tituloActual.textContent;

        li.appendChild(enlace);

        lista.appendChild(li);

    });

    //==========================================================
    // Agregar elementos al aside
    //==========================================================

    indice.appendChild(titulo);

    indice.appendChild(boton);

    indice.appendChild(lista);

    //==========================================================
    // Mostrar / ocultar
    //==========================================================

    boton.addEventListener("click", () => {

        if (lista.style.display === "none") {

            lista.style.display = "block";

            boton.textContent = "Ocultar índice";

        }
        else {

            lista.style.display = "none";

            boton.textContent = "Mostrar índice";

        }

    });

});