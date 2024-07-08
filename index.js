const menu = document.getElementById("menu");
const menuButton = document.getElementById("menuButton");
const conteinerMain = document.querySelector("#conteinerMain");

const listItems = document.querySelectorAll(".enlace_menu");
const arrowMenus = document.querySelectorAll(".arrow_menu");

const ldoIzq = document.getElementById("ldoIzq");
const btnCentral = document.getElementById("btnCentral");
const ldoDer = document.getElementById("ldoDer");
const containerBoton = document.querySelector(".container_boton");
const iconCentral = document.querySelector(".iconCentral");

const iconOpen = document.getElementById("iconOpen");
const iconClose = document.getElementById("iconClose");

const miperfilMenu = document.getElementById("miperfilMenu");
const miServicioMenu = document.getElementById("miServicioMenu");
const dropdownPerfil = document.getElementById("dropdownPerfil");
const dropdownServicios = document.getElementById("dropdownServicios");

const masPerfil = document.getElementById("masPerfil");
const menosPerfil = document.getElementById("menosPerfil");
const masServicios = document.getElementById("masServicios");
const menosServicios = document.getElementById("menosServicios");

document.addEventListener("DOMContentLoaded", function (event) {
  menuButton.addEventListener("click", function () {
    conteinerMain.classList.toggle("overflow-y-hidden");
    menu.classList.toggle("open");
    this.classList.toggle("open");
  });
  btnCentral.addEventListener("click", function () {
    this.classList.toggle("boton_central-active");

    iconOpen.classList.toggle("iconCentral");
    iconOpen.classList.toggle("display_none");
    iconClose.classList.toggle("iconCentral");
    iconClose.classList.toggle("animation__close");
    iconClose.classList.toggle("display_none");

    ldoIzq.classList.toggle("bordeizq");
    containerBoton.classList.toggle("container-menu-bottom");
    ldoDer.classList.toggle("bordeder");
  });
  miperfilMenu.addEventListener("click", function () {
    if (miServicioMenu.classList.contains("marginn")) {
      miServicioMenu.classList.remove("marginn");
      menosServicios.classList.add("display_none");
      masServicios.classList.remove("display_none");
      dropdownServicios.classList.remove("showServicio");

      this.classList.toggle("marginn");
      menosPerfil.classList.toggle("display_none");
      masPerfil.classList.toggle("display_none");
      dropdownPerfil.classList.toggle("showPerfil");
    } else{
      this.classList.toggle("marginn");
      menosPerfil.classList.toggle("display_none");
      masPerfil.classList.toggle("display_none");
      dropdownPerfil.classList.toggle("showPerfil");
    }
  });
  miServicioMenu.addEventListener("click", function () {
    if (miperfilMenu.classList.contains("marginn")) {
      miperfilMenu.classList.remove("marginn");
      menosPerfil.classList.add("display_none");
      masPerfil.classList.remove("display_none");
      dropdownPerfil.classList.remove("showPerfil");

      this.classList.toggle("marginn");
      menosServicios.classList.toggle("display_none");
      masServicios.classList.toggle("display_none");
      dropdownServicios.classList.toggle("showServicio");
    }else{
      this.classList.toggle("marginn");
      menosServicios.classList.toggle("display_none");
      masServicios.classList.toggle("display_none");
      dropdownServicios.classList.toggle("showServicio");
    }
  });
  // listItems.forEach(function (listItem, index) {
  //   listItem.addEventListener("click", function (event) {
  //     console.log(event);
  //     event.preventDefault(); // Evita que el enlace se siga al hacer clic

  //     const arrowMenu = arrowMenus[index];

  //     // Verificar si la clase 'arrow_menu-active' ya está presente
  //     if (!arrowMenu.classList.contains("arrow_menu-active")) {
  //       arrowMenu.classList.add("arrow_menu-active");
  //     }

  //     arrowMenu.classList.add("clicked");
  //     console.log(arrowMenu.target.innerText);
  //     setTimeout(function () {
  //       arrowMenu.classList.remove("clicked");
  //     }, 100);
  //   });
  // });
});

let touchStartX = 0;
let touchMoveX = 0;

document.addEventListener(
  "touchstart",
  function (event) {
    touchStartX = event.changedTouches[0].clientX;
  },
  false
);

document.addEventListener(
  "touchmove",
  function (event) {
    touchMoveX = event.changedTouches[0].clientX;

    // Verificar si el deslizamiento es horizontal y supera un umbral (por ejemplo, 50 píxeles)
    if (Math.abs(touchStartX - touchMoveX) > 50) {
      if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        menuButton.classList.remove("open");
        conteinerMain.classList.remove("overflow-y-hidden");
      }
    }
  },
  false
);
