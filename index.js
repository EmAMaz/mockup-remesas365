const menu = document.getElementById("menu");
const menuButton = document.getElementById("menuButton");
const conteinerMain = document.querySelector("#conteinerMain");

const listItems = document.querySelectorAll(".enlace_menu");
const arrowMenus = document.querySelectorAll(".arrow_menu");

document.addEventListener("DOMContentLoaded", function (event) {
  menuButton.addEventListener("click", function () {
    conteinerMain.classList.toggle("overflow-y-hidden");
    menu.classList.toggle("open");
    this.classList.toggle("open");
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
