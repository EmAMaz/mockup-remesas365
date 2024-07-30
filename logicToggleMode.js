// script1.js
document.addEventListener("DOMContentLoaded", () => {
  const btnToggleTheme = document.getElementById("toggleTheme");
  const menuIconBurger = document.getElementById("menuIconBurger");
  const svgStyleMenu = document.querySelectorAll(".svgStyleMenu");
  const svgStyleMenuMas = document.querySelectorAll(".svgStyleMenuMas");
  const svgStyleMenuMenos = document.querySelectorAll(".svgStyleMenuMenos");
  const iconDinamic = document.querySelectorAll(".iconDinamic");
  window.toggleVar = false;
  btnToggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    window.toggleVar = !window.toggleVar; // Cambia el estado de la variable
    window.toggleVar; // Devuelve el nuevo estado

    const regex = /menu-burger-white/;
    const validacion = regex.test(menuIconBurger.src);
    menuIconBurger.src = validacion
      ? "./public/menu-burger.png"
      : "./public/menu-burger-white.png";

    svgStyleMenu.forEach((element) => {
      const regex = /arrow-menu-white/;
      const validacion = regex.test(element.src);
      element.src = validacion
        ? "./public/arrow-menu.png"
        : "./public/arrow-menu-white.png";
    });

    svgStyleMenuMas.forEach((element) => {
      const regex = /despliegue-white/;
      const validacion = regex.test(element.src);
      element.src = validacion
        ? "./public/despliegue.svg"
        : "./public/despliegue-white.svg";
    });

    svgStyleMenuMenos.forEach((element) => {
      const regex = /menos-white/;
      const validacion = regex.test(element.src);
      element.src = validacion
        ? "./public/menos.svg"
        : "./public/menos-white.svg";
    });

    iconDinamic.forEach((element) => {
      let url = element.src;
      const regex = /white/;
      const validacion = regex.test(url);
      let stringToAdd = "-white";
      let lastDotIndex = url.lastIndexOf(".");
      let beforeDot = url.substring(0, lastDotIndex);
      let afterDot = url.substring(lastDotIndex);
      let newUrl = beforeDot + stringToAdd + afterDot;
      element.src = validacion ? url.replace("-white", "") : newUrl;
    });

    // Emitir el evento personalizado
    const eventoIconDinamic = new CustomEvent("cambiarIconosDinamic", {
      bubbles: true,
    });
    document.dispatchEvent(eventoIconDinamic);
  });
});
