const botonMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu-principal");

botonMenu.addEventListener("click", function () {
    menu.classList.toggle("activo");

    if (menu.classList.contains("activo")) {
        botonMenu.textContent = "✕";
        botonMenu.setAttribute("aria-label", "Cerrar menú");
    } else {
        botonMenu.textContent = "☰";
        botonMenu.setAttribute("aria-label", "Abrir menú");
    }
});