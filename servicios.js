const recargaMovistar = document.getElementById("recargaMovistar");
const accionServicioComponent = document.getElementById(
  "accionServicioComponent"
);

function mountComponent(componentSelected) {
  app.innerHTML = "";
  isMounted = false;
  if (!isMounted) {
    const resultComponent = componentSelected.content.cloneNode(true);
    app.appendChild(resultComponent);
    isMounted = true;
  }
}

recargaMovistar.addEventListener("click", () =>
  mountComponent(accionServicioComponent)
);
