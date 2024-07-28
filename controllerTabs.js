const controllerHome = document.getElementById("controllerHome");
const controllerRecarga = document.getElementById("controllerRecarga");
const controllerServicios = document.getElementById("controllerServicios");
const controllerMiCuenta = document.getElementById("controllerMiCuenta");
const controllerContactanos = document.getElementById("controllerContactanos");
const controllerContactanosMenu = document.getElementById("controllerContactanosMenu");
const controllerPerfil = document.getElementById("controllerPerfil");
const controllerSeguridad = document.getElementById("controllerSeguridad");
const recargaMovistar = document.getElementById("recargaMovistar");

const homeComponent = document.getElementById("homeComponent");
const recargarComponent = document.getElementById("recargarComponent");
const micuentaComponent = document.getElementById("micuentaComponent");
const contactanosComponent = document.getElementById("contactanosComponent");
const accionServicioComponent = document.getElementById('accionServicioComponent');
const serviciosComponent = document.getElementById('serviciosComponent');
const perfilComponent = document.getElementById('perfilComponent');
const seguridadComponent = document.getElementById('seguridadComponent');
const elements = document.querySelectorAll(".custom");

function mountComponent(componentSelected) {
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
 
  controllerHome.addEventListener("click", () => {
    if (!controllerHome.classList.contains("button")) {
      controllerRecarga.classList.remove("button");
      controllerServicios.classList.remove("button");
      controllerMiCuenta.classList.remove("button");

      controllerHome.classList.toggle("button");
    }
    mountComponent(homeComponent);
  });
  controllerRecarga.addEventListener("click", () => {
    if (!controllerRecarga.classList.contains("button")) {
      controllerHome.classList.remove("button");
      controllerServicios.classList.remove("button");
      controllerMiCuenta.classList.remove("button");

      controllerRecarga.classList.toggle("button");
    }
    mountComponent(recargarComponent);
  });
  controllerServicios.addEventListener("click", () => {
    if (!controllerServicios.classList.contains("button")) {
      controllerHome.classList.remove("button");
      controllerRecarga.classList.remove("button");
      controllerMiCuenta.classList.remove("button");

      controllerServicios.classList.toggle("button");
    }
    mountComponent(serviciosComponent);
    const recargaMovistar = document.getElementById('recargaMovistar');
    const recargaDigitel = document.getElementById('recargaDigitel');
    const recargaMovilnet = document.getElementById('recargaMovilnet');
    const recargaCantv = document.getElementById('recargaCantv');
    const recargaInter = document.getElementById('recargaInter');

      recargaMovistar.addEventListener('click', (event) => {
  
        if (accionServicioComponent) {
          mountComponent(accionServicioComponent);
          const recargaEnEUR = document.getElementById('recargaEnEUR');
          const recargaEnUSD = document.getElementById('recargaEnUSD');
          const txtDinamicoFst = document.getElementById('txtDinamicoFst');
          const txtDinamicoSnd = document.getElementById('txtDinamicoSnd');
            recargaEnEUR.addEventListener('click', () => {
              if(recargaEnUSD.classList.contains("activeBtn")){
                recargaEnUSD.classList.remove("activeBtn");
                recargaEnEUR.classList.add("activeBtn");
                txtDinamicoFst.textContent = 'Tasa EUR / VES';
                txtDinamicoSnd.textContent = 'Monto a Descontar en EUR';
              }
            })
            recargaEnUSD.addEventListener('click', () => {
              if(recargaEnEUR.classList.contains("activeBtn")){
                recargaEnEUR.classList.remove("activeBtn");
                recargaEnUSD.classList.add("activeBtn");
                txtDinamicoFst.textContent = 'Tasa USD / VES';
                txtDinamicoSnd.textContent = 'Monto a Descontar en USD';
              }
            })
        } else {
          console.error('accionServicioComponent template not found');
        }
      });

      recargaDigitel.addEventListener('click', () => {
        mountComponent(accionServicioComponent);
        const imageRecarga = document.getElementById('imageRecarga');
        const recargaEnEUR = document.getElementById('recargaEnEUR');
        const recargaEnUSD = document.getElementById('recargaEnUSD');
        const txtDinamicoFst = document.getElementById('txtDinamicoFst');
        const txtDinamicoSnd = document.getElementById('txtDinamicoSnd');
        recargaEnEUR.addEventListener('click', () => {
              if(recargaEnUSD.classList.contains("activeBtn")){
                recargaEnUSD.classList.remove("activeBtn");
                recargaEnEUR.classList.add("activeBtn");
                txtDinamicoFst.textContent = 'Tasa EUR / VES';
                txtDinamicoSnd.textContent = 'Monto a Descontar en EUR';
              }
        })
        recargaEnUSD.addEventListener('click', () => {
              if(recargaEnEUR.classList.contains("activeBtn")){
                recargaEnEUR.classList.remove("activeBtn");
                recargaEnUSD.classList.add("activeBtn");
                txtDinamicoFst.textContent = 'Tasa USD / VES';
                txtDinamicoSnd.textContent = 'Monto a Descontar en USD';
              }
        })
        imageRecarga.src = './public/servicios/logodigitel.png';
      });
      
      recargaMovilnet.addEventListener('click', () => {
        mountComponent(accionServicioComponent);
        const imageRecarga = document.getElementById('imageRecarga');
        const recargaEnEUR = document.getElementById('recargaEnEUR');
        const recargaEnUSD = document.getElementById('recargaEnUSD');
        const txtDinamicoFst = document.getElementById('txtDinamicoFst');
        const txtDinamicoSnd = document.getElementById('txtDinamicoSnd');
        recargaEnEUR.addEventListener('click', () => {
              if(recargaEnUSD.classList.contains("activeBtn")){
                recargaEnUSD.classList.remove("activeBtn");
                recargaEnEUR.classList.add("activeBtn");
                txtDinamicoFst.textContent = 'Tasa EUR / VES';
                txtDinamicoSnd.textContent = 'Monto a Descontar en EUR';
              }
        })
        recargaEnUSD.addEventListener('click', () => {
              if(recargaEnEUR.classList.contains("activeBtn")){
                recargaEnEUR.classList.remove("activeBtn");
                recargaEnUSD.classList.add("activeBtn");
                txtDinamicoFst.textContent = 'Tasa USD / VES';
                txtDinamicoSnd.textContent = 'Monto a Descontar en USD';
              }
        })
        imageRecarga.src = './public/servicios/logomovilnet.png';
      });

      recargaCantv.addEventListener('click', () => {
        mountComponent(accionServicioComponent);
        const imageRecarga = document.getElementById('imageRecarga');
        const recargaEnEUR = document.getElementById('recargaEnEUR');
        const recargaEnUSD = document.getElementById('recargaEnUSD');
        const txtDinamicoFst = document.getElementById('txtDinamicoFst');
        const txtDinamicoSnd = document.getElementById('txtDinamicoSnd');
        recargaEnEUR.addEventListener('click', () => {
              if(recargaEnUSD.classList.contains("activeBtn")){
                recargaEnUSD.classList.remove("activeBtn");
                recargaEnEUR.classList.add("activeBtn");
                txtDinamicoFst.textContent = 'Tasa EUR / VES';
                txtDinamicoSnd.textContent = 'Monto a Descontar en EUR';
              }
        })
        recargaEnUSD.addEventListener('click', () => {
              if(recargaEnEUR.classList.contains("activeBtn")){
                recargaEnEUR.classList.remove("activeBtn");
                recargaEnUSD.classList.add("activeBtn");
                txtDinamicoFst.textContent = 'Tasa USD / VES';
                txtDinamicoSnd.textContent = 'Monto a Descontar en USD';
              }
        })
        imageRecarga.src = './public/servicios/logocantv.png';
      });

      recargaInter.addEventListener('click', () => {
        mountComponent(accionServicioComponent);
        const textDinamicoBtn = document.getElementById('textDinamicoBtn');
        const imageRecarga = document.getElementById('imageRecarga');
        const recargaEnEUR = document.getElementById('recargaEnEUR');
        const recargaEnUSD = document.getElementById('recargaEnUSD');
        const txtDinamicoFst = document.getElementById('txtDinamicoFst');
        const txtDinamicoSnd = document.getElementById('txtDinamicoSnd');
        recargaEnEUR.addEventListener('click', () => {
              if(recargaEnUSD.classList.contains("activeBtn")){
                recargaEnUSD.classList.remove("activeBtn");
                recargaEnEUR.classList.add("activeBtn");
                txtDinamicoFst.textContent = 'Tasa EUR / VES';
                txtDinamicoSnd.textContent = 'Monto a Descontar en EUR';
              }
        })
        recargaEnUSD.addEventListener('click', () => {
              if(recargaEnEUR.classList.contains("activeBtn")){
                recargaEnEUR.classList.remove("activeBtn");
                recargaEnUSD.classList.add("activeBtn");
                txtDinamicoFst.textContent = 'Tasa USD / VES';
                txtDinamicoSnd.textContent = 'Monto a Descontar en USD';
              }
        })
        imageRecarga.src = './public/servicios/logointer.png';
        textDinamicoBtn.textContent = 'EFECTUAR PAGO';
      });
  });
  controllerMiCuenta.addEventListener("click", () => {
    if (!controllerMiCuenta.classList.contains("button")) {
      controllerHome.classList.remove("button");
      controllerRecarga.classList.remove("button");
      controllerServicios.classList.remove("button");

      controllerMiCuenta.classList.toggle("button");
    }
    mountComponent(micuentaComponent);
  });
  controllerContactanos.addEventListener("click", () => {
    mountComponent(contactanosComponent);
  });
  controllerContactanosMenu.addEventListener("click", () => {
    mountComponent(contactanosComponent);
    menu.classList.remove("open");
  });
  controllerPerfil.addEventListener("click", () => {
    mountComponent(perfilComponent);
    menu.classList.remove("open");
  });
  controllerSeguridad.addEventListener("click", () => {
    mountComponent(seguridadComponent);
    menu.classList.remove("open");
    const togglePassword = document.getElementById('togglePassword');
    const changePassword = document.getElementById('changePassword');
    togglePassword.addEventListener('click', (e) => {
      changePassword.classList.toggle("container_boton")
    })
  });
});
