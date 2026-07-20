document.addEventListener("DOMContentLoaded", async () => {

    await cargar("site-header", "/mi-web-electronica/componentes/comunes/header.html");
    await cargar("menu", "/mi-web-electronica/componentes/comunes/menu.html");
    await cargar("footer", "/mi-web-electronica/componentes/comunes/footer.html");

    await cargar("migas-pan", "componentes/articulos/migas-pan.html");
    await cargar("indice", "componentes/articulos/indice.html");
    await cargar("articulo-nav", "/mi-web-electronica/componentes/articulos/articulo-nav.html");

});

async function cargar(id, archivo) {

    const elemento = document.getElementById(id);

    if (!elemento) return;

    try {

        const respuesta = await fetch(archivo);

        if (!respuesta.ok)
            throw new Error(archivo);

        elemento.innerHTML = await respuesta.text();

        document.dispatchEvent(new CustomEvent(id + "-cargado"));

    } catch (e) {

        console.error(e);

    }

}
