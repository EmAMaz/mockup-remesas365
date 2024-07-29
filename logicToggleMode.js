document.addEventListener("DOMContentLoaded", () => {
  const btnToggleTheme = document.getElementById("toggleTheme");
  const menuIconBurger = document.getElementById("menuIconBurger");
  const svgStyleMenu = document.querySelectorAll(".svgStyleMenu");
  const svgStyleMenuMas = document.querySelectorAll(".svgStyleMenuMas");
  const svgStyleMenuMenos = document.querySelectorAll(".svgStyleMenuMenos");

  btnToggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    console.log(menuIconBurger.src)
    const regex = /menu-burger-white/;
    const validacion = regex.test(menuIconBurger.src);
    if(!validacion){
        menuIconBurger.src = "./public/menu-burger-white.png";
    }else{
        menuIconBurger.src = "./public/menu-burger.png";
    }

    svgStyleMenu.forEach((element) => {
        const regex = /arrow-menu-white/;
        const validacion = regex.test(element.src);
        if(!validacion){
            element.src = "./public/arrow-menu-white.png";
        }else{
            element.src = "./public/arrow-menu.png";
        }
    });
    svgStyleMenuMas.forEach((element) => {
        const regex = /despliegue-white/;
        const validacion = regex.test(element.src);
        if(!validacion){
            element.src = "./public/despliegue-white.svg";
        }else{
            element.src = "./public/despliegue.svg";
        }
    })
    svgStyleMenuMenos.forEach((element) => {
        const regex = /menos-white/;
        const validacion = regex.test(element.src);
        if(!validacion){
            element.src = "./public/menos-white.svg";
        }else{
            element.src = "./public/menos.svg";
        }
    })
  });
});
