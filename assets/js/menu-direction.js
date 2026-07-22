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

