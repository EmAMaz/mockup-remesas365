const controllerHome = document.getElementById("controllerHome");
const controllerRecarga = document.getElementById("controllerRecarga");
const controllerServicios = document.getElementById("controllerServicios");
const controllerMiCuenta = document.getElementById("controllerMiCuenta");
const controllerContactanos = document.getElementById("controllerContactanos");
const controllerContactanosMenu = document.getElementById(
  "controllerContactanosMenu"
);

const app = document.getElementById("app");
const homeComponent = document.getElementById("homeComponent");
const recargarComponent = document.getElementById("recargarComponent");
const serviciosComponent = document.getElementById("serviciosComponent");
const micuentaComponent = document.getElementById("micuentaComponent");
const contactanosComponent = document.getElementById("contactanosComponent");

const elements = document.querySelectorAll(".custom");

// let isMounted = false;
// elements.forEach((element) => {
//   element.addEventListener("click", (event) => {
//     const target = event.target;
//     target.classList.add("active");
//     setTimeout(() => {
//       target.classList.remove("active");
//     }, 300);
//   });
// });

// function addEffect(event) {
//   const element = event.target;
//   element.classList.add("active");
//   setTimeout(() => {
//     element.classList.remove("active");
//   }, 300);
// }

function mountComponent(componentSelected) {
  // controllerHome.classList.toggle("shadow-animated-active");
  app.innerHTML = "";
  isMounted = false;
  if (!isMounted) {
    const resultComponent = componentSelected.content.cloneNode(true);
    app.appendChild(resultComponent);
    isMounted = true;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  mountComponent(homeComponent);
  controllerHome.addEventListener("click", () => mountComponent(homeComponent));
  controllerRecarga.addEventListener("click", () =>
    mountComponent(recargarComponent)
  );
  controllerServicios.addEventListener("click", () =>
    mountComponent(serviciosComponent)
  );
  controllerMiCuenta.addEventListener("click", () =>
    mountComponent(micuentaComponent)
  );
  controllerContactanos.addEventListener("click", () =>
    mountComponent(contactanosComponent)
  );
  controllerContactanosMenu.addEventListener("click", () =>
    mountComponent(contactanosComponent)
  );
});
