document.addEventListener("menu-cargado", () => {

    const boton = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu-principal");

    if (!boton || !menu) {
        console.error("No se encontró el menú o el botón hamburguesa.");
        return;
    }

    /*====================================
      BOTÓN HAMBURGUESA
    ====================================*/

    boton.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

    /*====================================
      SUBMENÚS EN MÓVILES
    ====================================*/

    const enlaces = document.querySelectorAll(".has-submenu > a");

    enlaces.forEach(enlace => {

        enlace.addEventListener("click", function (e) {

            if (window.innerWidth > 768)
                return;

            const submenu = this.nextElementSibling;

            if (!submenu)
                return;

            e.preventDefault();

            submenu.classList.toggle("active");

        });

    });

});