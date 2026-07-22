function actualizarDireccion(li) {

    const submenu = li.querySelector(":scope > ul");

    if (!submenu)
        return;

    // Volver siempre al estado normal
    li.classList.remove("submenu-left");

    // Abrimos temporalmente para medir
    li.classList.add("open");

    const rect = submenu.getBoundingClientRect();

    // ¿Se sale por la derecha?
    if (rect.right > window.innerWidth) {

        li.classList.remove("open");

        li.classList.add("submenu-left");
        li.classList.add("open");
    }

}


function inicializarMenu() {

    const items = document.querySelectorAll("nav li");

    console.log("Items encontrados:", items.length);

    items.forEach(li => {

        li.addEventListener("mouseenter", () => {
            actualizarDireccion(li);
        });
        li.addEventListener("mouseleave", () => {
            li.classList.remove("open");

        });

    });

}

document.addEventListener("menu-cargado", inicializarMenu);

window.addEventListener("resize", () => {

    document.querySelectorAll("nav li").forEach(li => {

        li.classList.remove("submenu-left");

    });

});
document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu-principal");

    if (!boton || !menu) return;

    /*---------------------------------------
      Botón hamburguesa
    ---------------------------------------*/

    boton.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

    /*---------------------------------------
      Submenús en móviles
    ---------------------------------------*/

    document.querySelectorAll(".has-submenu > a").forEach(enlace => {

        enlace.addEventListener("click", function(e){

            if(window.innerWidth > 768)
                return;

            e.preventDefault();

            const li = this.parentElement;
            const submenu = this.nextElementSibling;

            if(!submenu)
                return;

            /*-----------------------------------
              Cerrar los hermanos
            -----------------------------------*/

            const hermanos = li.parentElement.children;

            [...hermanos].forEach(item => {

                if(item !== li){

                    item.classList.remove("open");

                    const ul = item.querySelector(":scope > ul");

                    if(ul)
                        ul.classList.remove("active");

                    const flecha = item.querySelector(":scope > a .submenu-arrow");

                    if(flecha)
                        flecha.classList.remove("rotate");

                }

            });

            /*-----------------------------------
              Abrir / cerrar el actual
            -----------------------------------*/

            li.classList.toggle("open");

            submenu.classList.toggle("active");

            const flecha = this.querySelector(".submenu-arrow");

            if(flecha)
                flecha.classList.toggle("rotate");

        });

    });

});