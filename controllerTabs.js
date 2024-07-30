const controllerHome = document.getElementById("controllerHome");
const controllerRecarga = document.getElementById("controllerRecarga");
const controllerServicios = document.getElementById("controllerServicios");
const controllerMiCuenta = document.getElementById("controllerMiCuenta");
const controllerContactanos = document.getElementById("controllerContactanos");
const controllerRetiroMenu = document.getElementById("controllerRetiroMenu");
const controllerContactanosMenu = document.getElementById(
  "controllerContactanosMenu"
);
const controllerPerfil = document.getElementById("controllerPerfil");
const controllerSeguridad = document.getElementById("controllerSeguridad");
const recargaMovistar = document.getElementById("recargaMovistar");

// controllerMENU
const recargaMovistarMenu = document.getElementById("recargaMovistarMenu");
const recargaDigitelMenu = document.getElementById("recargaDigitelMenu");
const recargaMovilnetMenu = document.getElementById("recargaMovilnetMenu");
const recargaCantvMenu = document.getElementById("recargaCantvMenu");
const recargaInterMenu = document.getElementById("recargaInterMenu");

const homeComponent = document.getElementById("homeComponent");
const recargarComponent = document.getElementById("recargarComponent");
const micuentaComponent = document.getElementById("micuentaComponent");
const contactanosComponent = document.getElementById("contactanosComponent");
const enviarComponent = document.getElementById("enviarComponent");
const recargaComponent = document.getElementById("recargaComponent");
const metodosRecarga = document.getElementById("metodosRecarga");
const modalRecargaExitosa = document.getElementById("modalRecargaExitosa");
const modalDetalleMov = document.getElementById("modalDetalleMov");
const bancoDetalle = document.getElementById("bancoDetalle");
const estadoDetalle = document.getElementById("estadoDetalle");
const detalleMoneda = document.getElementById("detalleMoneda");
const monedaDetalle = document.getElementById("monedaDetalle");
const imgDetalle = document.getElementById("imgDetalle");
const priceDetalle = document.getElementById("priceDetalle");
const accionServicioComponent = document.getElementById(
  "accionServicioComponent"
);
const serviciosComponent = document.getElementById("serviciosComponent");
const perfilComponent = document.getElementById("perfilComponent");
const seguridadComponent = document.getElementById("seguridadComponent");
const elements = document.querySelectorAll(".custom");
const span = document.getElementsByClassName("close")[0];
const closeModalDetalle = document.getElementsByClassName("closeModalDetalle")[0];
const toHOme = document.getElementById("toHOme");

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
  const movimientosBtns = document.querySelectorAll(".movimientosBtns");
    movimientosBtns.forEach((element) => {
      element.addEventListener("click", () => {
        modalDetalleMov.style.display = "block";
        let urlBanco = []
        urlBanco.push(element.children[0].innerText);
        let urlEstado = [];
        urlEstado.push(element.children[1].innerText);

        bancoDetalle.innerText = urlBanco[0].split("\n")[0];

        monedaDetalle.innerText = urlEstado[0].split("\n")[0];
        estadoDetalle.innerText = urlEstado[0].split("\n")[2];
        imgDetalle.src = element.children[0].children[0].currentSrc; 
        priceDetalle.innerText = urlEstado[0].split("\n")[1];
      })
      closeModalDetalle.onclick = function () {
        modalDetalleMov.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modalDetalleMov) {
          modalDetalleMov.style.display = "none";
        }
      };
      
    })
  const iconDinamicRapid = document.querySelectorAll(".iconDinamicRapid");
  document.addEventListener("cambiarIconosDinamic", () => {
    iconDinamicRapid.forEach((element) => {
      let url = element.src;
      const regex = /white/;
      const validacion = regex.test(url);
      let stringToAdd = "-white";
      let lastDotIndex = url.lastIndexOf(".");
      let beforeDot = url.substring(0, lastDotIndex);
      let afterDot = url.substring(lastDotIndex);
      let newUrl = beforeDot + stringToAdd + afterDot;
      if (!validacion) {
        element.src = newUrl;
      } else {
        element.src = url.replace("-white", "");
      }
    });
  });
  //mountComponent(enviarComponent);

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
    mountComponent(recargaComponent);
    const recargaDolaresBtn = document.getElementById("recargaDolaresBtn");
    const recargaEurosBtn = document.getElementById("recargaEurosBtn");
    recargaDolaresBtn.addEventListener("click", () => {
      mountComponent(metodosRecarga);
    });
    recargaEurosBtn.addEventListener("click", () => {
      mountComponent(metodosRecarga);
    });
  });
  controllerServicios.addEventListener("click", () => {
    if (!controllerServicios.classList.contains("button")) {
      controllerHome.classList.remove("button");
      controllerRecarga.classList.remove("button");
      controllerMiCuenta.classList.remove("button");

      controllerServicios.classList.toggle("button");
    }
    mountComponent(serviciosComponent);
    const recargaMovistar = document.getElementById("recargaMovistar");
    const recargaDigitel = document.getElementById("recargaDigitel");
    const recargaMovilnet = document.getElementById("recargaMovilnet");
    const recargaCantv = document.getElementById("recargaCantv");
    const recargaInter = document.getElementById("recargaInter");

    recargaMovistar.addEventListener("click", () => {
      if (accionServicioComponent) {
        mountComponent(accionServicioComponent);
        menu.classList.remove("open");
        const recargaEnEUR = document.getElementById("recargaEnEUR");
        const recargaEnUSD = document.getElementById("recargaEnUSD");
        const txtDinamicoFst = document.getElementById("txtDinamicoFst");
        const txtDinamicoSnd = document.getElementById("txtDinamicoSnd");
        const decrementButton = document.getElementById("decrement-button");
        const incrementButton = document.getElementById("increment-button");
        const numberInput = document.getElementById("number-input");
        const modal = document.getElementById("myModal");
        const btn = document.getElementById("btnFavoritos");

        btn.onclick = function () {
          modal.style.display = "block";
        };
        span.onclick = function () {
          modal.style.display = "none";
        };
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
        const minValue = parseInt(numberInput.getAttribute("min"));
        const maxValue = parseInt(numberInput.getAttribute("max"));
        numberInput.addEventListener("input", function () {
          let currentValue = parseInt(numberInput.value);
          if (isNaN(currentValue) || currentValue < minValue) {
            numberInput.value = minValue;
          } else if (currentValue > maxValue) {
            numberInput.value = maxValue;
          }
        });
        decrementButton.addEventListener("click", function () {
          numberInput.stepDown();
          numberInput;
        });

        incrementButton.addEventListener("click", function () {
          numberInput.stepUp();
        });
        recargaEnEUR.addEventListener("click", () => {
          if (recargaEnUSD.classList.contains("activeBtn")) {
            recargaEnUSD.classList.remove("activeBtn");
            recargaEnEUR.classList.add("activeBtn");
            txtDinamicoFst.textContent = "Tasa EUR / VES";
            txtDinamicoSnd.textContent = "Monto a Descontar en EUR";
          }
        });
        recargaEnUSD.addEventListener("click", () => {
          if (recargaEnEUR.classList.contains("activeBtn")) {
            recargaEnEUR.classList.remove("activeBtn");
            recargaEnUSD.classList.add("activeBtn");
            txtDinamicoFst.textContent = "Tasa USD / VES";
            txtDinamicoSnd.textContent = "Monto a Descontar en USD";
          }
        });
      } else {
        console.error("accionServicioComponent template not found");
      }
    });

    recargaDigitel.addEventListener("click", () => {
      mountComponent(accionServicioComponent);
      menu.classList.remove("open");
      const imageRecarga = document.getElementById("imageRecarga");
      const recargaEnEUR = document.getElementById("recargaEnEUR");
      const recargaEnUSD = document.getElementById("recargaEnUSD");
      const txtDinamicoFst = document.getElementById("txtDinamicoFst");
      const txtDinamicoSnd = document.getElementById("txtDinamicoSnd");
      const decrementButton = document.getElementById("decrement-button");
      const incrementButton = document.getElementById("increment-button");
      const numberInput = document.getElementById("number-input");
      const modal = document.getElementById("myModal");
      const btn = document.getElementById("btnFavoritos");
      const span = document.getElementsByClassName("close")[0];

      btn.onclick = function () {
        modal.style.display = "block";
      };
      span.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
      const minValue = parseInt(numberInput.getAttribute("min"));
      const maxValue = parseInt(numberInput.getAttribute("max"));
      numberInput.addEventListener("input", function () {
        let currentValue = parseInt(numberInput.value);
        if (isNaN(currentValue) || currentValue < minValue) {
          numberInput.value = minValue;
        } else if (currentValue > maxValue) {
          numberInput.value = maxValue;
        }
      });
      decrementButton.addEventListener("click", function () {
        numberInput.stepDown();
        numberInput;
      });

      incrementButton.addEventListener("click", function () {
        numberInput.stepUp();
      });
      recargaEnEUR.addEventListener("click", () => {
        if (recargaEnUSD.classList.contains("activeBtn")) {
          recargaEnUSD.classList.remove("activeBtn");
          recargaEnEUR.classList.add("activeBtn");
          txtDinamicoFst.textContent = "Tasa EUR / VES";
          txtDinamicoSnd.textContent = "Monto a Descontar en EUR";
        }
      });
      recargaEnUSD.addEventListener("click", () => {
        if (recargaEnEUR.classList.contains("activeBtn")) {
          recargaEnEUR.classList.remove("activeBtn");
          recargaEnUSD.classList.add("activeBtn");
          txtDinamicoFst.textContent = "Tasa USD / VES";
          txtDinamicoSnd.textContent = "Monto a Descontar en USD";
        }
      });
      imageRecarga.src = "./public/servicios/logodigitel.png";
    });

    recargaMovilnet.addEventListener("click", () => {
      mountComponent(accionServicioComponent);
      menu.classList.remove("open");
      const imageRecarga = document.getElementById("imageRecarga");
      const recargaEnEUR = document.getElementById("recargaEnEUR");
      const recargaEnUSD = document.getElementById("recargaEnUSD");
      const txtDinamicoFst = document.getElementById("txtDinamicoFst");
      const txtDinamicoSnd = document.getElementById("txtDinamicoSnd");
      const decrementButton = document.getElementById("decrement-button");
      const incrementButton = document.getElementById("increment-button");
      const numberInput = document.getElementById("number-input");
      const minValue = parseInt(numberInput.getAttribute("min"));
      const maxValue = parseInt(numberInput.getAttribute("max"));
      const modal = document.getElementById("myModal");
      const btn = document.getElementById("btnFavoritos");
      const span = document.getElementsByClassName("close")[0];

      btn.onclick = function () {
        modal.style.display = "block";
      };
      span.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
      numberInput.addEventListener("input", function () {
        let currentValue = parseInt(numberInput.value);
        if (isNaN(currentValue) || currentValue < minValue) {
          numberInput.value = minValue;
        } else if (currentValue > maxValue) {
          numberInput.value = maxValue;
        }
      });
      decrementButton.addEventListener("click", function () {
        numberInput.stepDown();
        numberInput;
      });

      incrementButton.addEventListener("click", function () {
        numberInput.stepUp();
      });
      recargaEnEUR.addEventListener("click", () => {
        if (recargaEnUSD.classList.contains("activeBtn")) {
          recargaEnUSD.classList.remove("activeBtn");
          recargaEnEUR.classList.add("activeBtn");
          txtDinamicoFst.textContent = "Tasa EUR / VES";
          txtDinamicoSnd.textContent = "Monto a Descontar en EUR";
        }
      });
      recargaEnUSD.addEventListener("click", () => {
        if (recargaEnEUR.classList.contains("activeBtn")) {
          recargaEnEUR.classList.remove("activeBtn");
          recargaEnUSD.classList.add("activeBtn");
          txtDinamicoFst.textContent = "Tasa USD / VES";
          txtDinamicoSnd.textContent = "Monto a Descontar en USD";
        }
      });
      imageRecarga.src = "./public/servicios/logomovilnet.png";
    });

    recargaCantv.addEventListener("click", () => {
      mountComponent(accionServicioComponent);
      menu.classList.remove("open");
      const imageRecarga = document.getElementById("imageRecarga");
      const recargaEnEUR = document.getElementById("recargaEnEUR");
      const recargaEnUSD = document.getElementById("recargaEnUSD");
      const txtDinamicoFst = document.getElementById("txtDinamicoFst");
      const txtDinamicoSnd = document.getElementById("txtDinamicoSnd");
      const decrementButton = document.getElementById("decrement-button");
      const incrementButton = document.getElementById("increment-button");
      const numberInput = document.getElementById("number-input");
      const minValue = parseInt(numberInput.getAttribute("min"));
      const maxValue = parseInt(numberInput.getAttribute("max"));
      const modal = document.getElementById("myModal");
      const btn = document.getElementById("btnFavoritos");
      const span = document.getElementsByClassName("close")[0];
      const inputNumber = document.getElementById("inputNumber");
      const divMontos = document.getElementById("divMontos");
      const btnInter = document.getElementById("btnInter");
      btn.onclick = function () {
        modal.style.display = "block";
      };
      span.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
      numberInput.addEventListener("input", function () {
        let currentValue = parseInt(numberInput.value);
        if (isNaN(currentValue) || currentValue < minValue) {
          numberInput.value = minValue;
        } else if (currentValue > maxValue) {
          numberInput.value = maxValue;
        }
      });
      decrementButton.addEventListener("click", function () {
        numberInput.stepDown();
        numberInput;
      });

      incrementButton.addEventListener("click", function () {
        numberInput.stepUp();
      });
      recargaEnEUR.addEventListener("click", () => {
        if (recargaEnUSD.classList.contains("activeBtn")) {
          recargaEnUSD.classList.remove("activeBtn");
          recargaEnEUR.classList.add("activeBtn");
          txtDinamicoFst.textContent = "Tasa EUR / VES";
          txtDinamicoSnd.textContent = "Monto a Descontar en EUR";
        }
      });
      recargaEnUSD.addEventListener("click", () => {
        if (recargaEnEUR.classList.contains("activeBtn")) {
          recargaEnEUR.classList.remove("activeBtn");
          recargaEnUSD.classList.add("activeBtn");
          txtDinamicoFst.textContent = "Tasa USD / VES";
          txtDinamicoSnd.textContent = "Monto a Descontar en USD";
        }
      });
      divMontos.style.display = "none";
      btnInter.classList.remove("hidden");
      inputNumber.placeholder = "Número (02XX)";
      imageRecarga.src = "./public/servicios/logocantv.png";
    });

    recargaInter.addEventListener("click", () => {
      mountComponent(accionServicioComponent);
      menu.classList.remove("open");
      const textDinamicoBtn = document.getElementById("textDinamicoBtn");
      const imageRecarga = document.getElementById("imageRecarga");
      const recargaEnEUR = document.getElementById("recargaEnEUR");
      const recargaEnUSD = document.getElementById("recargaEnUSD");
      const txtDinamicoFst = document.getElementById("txtDinamicoFst");
      const txtDinamicoSnd = document.getElementById("txtDinamicoSnd");
      const decrementButton = document.getElementById("decrement-button");
      const incrementButton = document.getElementById("increment-button");
      const numberInput = document.getElementById("number-input");
      const minValue = parseInt(numberInput.getAttribute("min"));
      const maxValue = parseInt(numberInput.getAttribute("max"));
      const divMontos = document.getElementById("divMontos");
      const btnInter = document.getElementById("btnInter");
      const inputNumber = document.getElementById("inputNumber");
      const modal = document.getElementById("myModal");
      const btn = document.getElementById("btnFavoritos");
      const span = document.getElementsByClassName("close")[0];
      numberInput.addEventListener("input", function () {
        let currentValue = parseInt(numberInput.value);
        if (isNaN(currentValue) || currentValue < minValue) {
          numberInput.value = minValue;
        } else if (currentValue > maxValue) {
          numberInput.value = maxValue;
        }
      });
      decrementButton.addEventListener("click", function () {
        numberInput.stepDown();
        numberInput;
      });

      incrementButton.addEventListener("click", function () {
        numberInput.stepUp();
      });
      recargaEnEUR.addEventListener("click", () => {
        if (recargaEnUSD.classList.contains("activeBtn")) {
          recargaEnUSD.classList.remove("activeBtn");
          recargaEnEUR.classList.add("activeBtn");
          txtDinamicoFst.textContent = "Tasa EUR / VES";
          txtDinamicoSnd.textContent = "Monto a Descontar en EUR";
        }
      });
      recargaEnUSD.addEventListener("click", () => {
        if (recargaEnEUR.classList.contains("activeBtn")) {
          recargaEnEUR.classList.remove("activeBtn");
          recargaEnUSD.classList.add("activeBtn");
          txtDinamicoFst.textContent = "Tasa USD / VES";
          txtDinamicoSnd.textContent = "Monto a Descontar en USD";
        }
      });
      btn.onclick = function () {
        modal.style.display = "block";
      };
      span.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
      inputNumber.placeholder = "(10 Dígitos)";
      divMontos.style.display = "none";
      btnInter.classList.remove("hidden");
      imageRecarga.src = "./public/servicios/logointer.png";
      textDinamicoBtn.textContent = "EFECTUAR PAGO";
    });
  });
  controllerMiCuenta.addEventListener("click", () => {
    if (!controllerMiCuenta.classList.contains("button")) {
      controllerHome.classList.remove("button");
      controllerRecarga.classList.remove("button");
      controllerServicios.classList.remove("button");

      controllerMiCuenta.classList.toggle("button");
    }
    mountComponent(perfilComponent);
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
    const togglePassword = document.getElementById("togglePassword");
    const changePassword = document.getElementById("changePassword");
    togglePassword.addEventListener("click", (e) => {
      changePassword.classList.toggle("container_boton");
    });
  });
  controllerRetiroMenu.addEventListener("click", () => {
    mountComponent(recargarComponent);
    menu.classList.remove("open");
    const transferenciaBancaria = document.getElementById(
      "transferenciaBancaria"
    );
    transferenciaBancaria.addEventListener("click", () => {
      mountComponent(enviarComponent);
      const nuevoBeneficiarioBtn = document.getElementById(
        "nuevoBeneficiarioBtn"
      );
      const nuevoBeneficiarioForm = document.querySelector(
        ".nuevoBeneficiarioForm"
      );
      nuevoBeneficiarioBtn.addEventListener("click", () => {
        nuevoBeneficiarioForm.classList.toggle("active");
      });
    });
  });

  recargaMovistarMenu.addEventListener("click", () => {
    if (accionServicioComponent) {
      mountComponent(accionServicioComponent);
      menu.classList.remove("open");
      const recargaEnEUR = document.getElementById("recargaEnEUR");
      const recargaEnUSD = document.getElementById("recargaEnUSD");
      const txtDinamicoFst = document.getElementById("txtDinamicoFst");
      const txtDinamicoSnd = document.getElementById("txtDinamicoSnd");
      const decrementButton = document.getElementById("decrement-button");
      const incrementButton = document.getElementById("increment-button");
      const numberInput = document.getElementById("number-input");
      const minValue = parseInt(numberInput.getAttribute("min"));
      const maxValue = parseInt(numberInput.getAttribute("max"));
      numberInput.addEventListener("input", function () {
        let currentValue = parseInt(numberInput.value);
        if (isNaN(currentValue) || currentValue < minValue) {
          numberInput.value = minValue;
        } else if (currentValue > maxValue) {
          numberInput.value = maxValue;
        }
      });
      decrementButton.addEventListener("click", function () {
        numberInput.stepDown();
        numberInput;
      });

      incrementButton.addEventListener("click", function () {
        numberInput.stepUp();
      });
      recargaEnEUR.addEventListener("click", () => {
        if (recargaEnUSD.classList.contains("activeBtn")) {
          recargaEnUSD.classList.remove("activeBtn");
          recargaEnEUR.classList.add("activeBtn");
          txtDinamicoFst.textContent = "Tasa EUR / VES";
          txtDinamicoSnd.textContent = "Monto a Descontar en EUR";
        }
      });
      recargaEnUSD.addEventListener("click", () => {
        if (recargaEnEUR.classList.contains("activeBtn")) {
          recargaEnEUR.classList.remove("activeBtn");
          recargaEnUSD.classList.add("activeBtn");
          txtDinamicoFst.textContent = "Tasa USD / VES";
          txtDinamicoSnd.textContent = "Monto a Descontar en USD";
        }
      });
    } else {
      console.error("accionServicioComponent template not found");
    }
  });

  recargaDigitelMenu.addEventListener("click", () => {
    mountComponent(accionServicioComponent);
    menu.classList.remove("open");
    const imageRecarga = document.getElementById("imageRecarga");
    const recargaEnEUR = document.getElementById("recargaEnEUR");
    const recargaEnUSD = document.getElementById("recargaEnUSD");
    const txtDinamicoFst = document.getElementById("txtDinamicoFst");
    const txtDinamicoSnd = document.getElementById("txtDinamicoSnd");
    const decrementButton = document.getElementById("decrement-button");
    const incrementButton = document.getElementById("increment-button");
    const numberInput = document.getElementById("number-input");
    const minValue = parseInt(numberInput.getAttribute("min"));
    const maxValue = parseInt(numberInput.getAttribute("max"));
    numberInput.addEventListener("input", function () {
      let currentValue = parseInt(numberInput.value);
      if (isNaN(currentValue) || currentValue < minValue) {
        numberInput.value = minValue;
      } else if (currentValue > maxValue) {
        numberInput.value = maxValue;
      }
    });
    decrementButton.addEventListener("click", function () {
      numberInput.stepDown();
      numberInput;
    });

    incrementButton.addEventListener("click", function () {
      numberInput.stepUp();
    });
    recargaEnEUR.addEventListener("click", () => {
      if (recargaEnUSD.classList.contains("activeBtn")) {
        recargaEnUSD.classList.remove("activeBtn");
        recargaEnEUR.classList.add("activeBtn");
        txtDinamicoFst.textContent = "Tasa EUR / VES";
        txtDinamicoSnd.textContent = "Monto a Descontar en EUR";
      }
    });
    recargaEnUSD.addEventListener("click", () => {
      if (recargaEnEUR.classList.contains("activeBtn")) {
        recargaEnEUR.classList.remove("activeBtn");
        recargaEnUSD.classList.add("activeBtn");
        txtDinamicoFst.textContent = "Tasa USD / VES";
        txtDinamicoSnd.textContent = "Monto a Descontar en USD";
      }
    });
    imageRecarga.src = "./public/servicios/logodigitel.png";
  });

  recargaMovilnetMenu.addEventListener("click", () => {
    mountComponent(accionServicioComponent);
    menu.classList.remove("open");
    const imageRecarga = document.getElementById("imageRecarga");
    const recargaEnEUR = document.getElementById("recargaEnEUR");
    const recargaEnUSD = document.getElementById("recargaEnUSD");
    const txtDinamicoFst = document.getElementById("txtDinamicoFst");
    const txtDinamicoSnd = document.getElementById("txtDinamicoSnd");
    const decrementButton = document.getElementById("decrement-button");
    const incrementButton = document.getElementById("increment-button");
    const numberInput = document.getElementById("number-input");
    const minValue = parseInt(numberInput.getAttribute("min"));
    const maxValue = parseInt(numberInput.getAttribute("max"));
    numberInput.addEventListener("input", function () {
      let currentValue = parseInt(numberInput.value);
      if (isNaN(currentValue) || currentValue < minValue) {
        numberInput.value = minValue;
      } else if (currentValue > maxValue) {
        numberInput.value = maxValue;
      }
    });
    decrementButton.addEventListener("click", function () {
      numberInput.stepDown();
      numberInput;
    });

    incrementButton.addEventListener("click", function () {
      numberInput.stepUp();
    });
    recargaEnEUR.addEventListener("click", () => {
      if (recargaEnUSD.classList.contains("activeBtn")) {
        recargaEnUSD.classList.remove("activeBtn");
        recargaEnEUR.classList.add("activeBtn");
        txtDinamicoFst.textContent = "Tasa EUR / VES";
        txtDinamicoSnd.textContent = "Monto a Descontar en EUR";
      }
    });
    recargaEnUSD.addEventListener("click", () => {
      if (recargaEnEUR.classList.contains("activeBtn")) {
        recargaEnEUR.classList.remove("activeBtn");
        recargaEnUSD.classList.add("activeBtn");
        txtDinamicoFst.textContent = "Tasa USD / VES";
        txtDinamicoSnd.textContent = "Monto a Descontar en USD";
      }
    });
    imageRecarga.src = "./public/servicios/logomovilnet.png";
  });

  recargaCantvMenu.addEventListener("click", () => {
    mountComponent(accionServicioComponent);
    menu.classList.remove("open");
    const imageRecarga = document.getElementById("imageRecarga");
    const recargaEnEUR = document.getElementById("recargaEnEUR");
    const recargaEnUSD = document.getElementById("recargaEnUSD");
    const txtDinamicoFst = document.getElementById("txtDinamicoFst");
    const txtDinamicoSnd = document.getElementById("txtDinamicoSnd");
    const decrementButton = document.getElementById("decrement-button");
    const incrementButton = document.getElementById("increment-button");
    const numberInput = document.getElementById("number-input");
    const minValue = parseInt(numberInput.getAttribute("min"));
    const maxValue = parseInt(numberInput.getAttribute("max"));
    numberInput.addEventListener("input", function () {
      let currentValue = parseInt(numberInput.value);
      if (isNaN(currentValue) || currentValue < minValue) {
        numberInput.value = minValue;
      } else if (currentValue > maxValue) {
        numberInput.value = maxValue;
      }
    });
    decrementButton.addEventListener("click", function () {
      numberInput.stepDown();
      numberInput;
    });

    incrementButton.addEventListener("click", function () {
      numberInput.stepUp();
    });
    recargaEnEUR.addEventListener("click", () => {
      if (recargaEnUSD.classList.contains("activeBtn")) {
        recargaEnUSD.classList.remove("activeBtn");
        recargaEnEUR.classList.add("activeBtn");
        txtDinamicoFst.textContent = "Tasa EUR / VES";
        txtDinamicoSnd.textContent = "Monto a Descontar en EUR";
      }
    });
    recargaEnUSD.addEventListener("click", () => {
      if (recargaEnEUR.classList.contains("activeBtn")) {
        recargaEnEUR.classList.remove("activeBtn");
        recargaEnUSD.classList.add("activeBtn");
        txtDinamicoFst.textContent = "Tasa USD / VES";
        txtDinamicoSnd.textContent = "Monto a Descontar en USD";
      }
    });
    imageRecarga.src = "./public/servicios/logocantv.png";
  });

  recargaInterMenu.addEventListener("click", () => {
    mountComponent(accionServicioComponent);
    menu.classList.remove("open");
    const textDinamicoBtn = document.getElementById("textDinamicoBtn");
    const imageRecarga = document.getElementById("imageRecarga");
    const recargaEnEUR = document.getElementById("recargaEnEUR");
    const recargaEnUSD = document.getElementById("recargaEnUSD");
    const txtDinamicoFst = document.getElementById("txtDinamicoFst");
    const txtDinamicoSnd = document.getElementById("txtDinamicoSnd");
    const decrementButton = document.getElementById("decrement-button");
    const incrementButton = document.getElementById("increment-button");
    const numberInput = document.getElementById("number-input");
    const minValue = parseInt(numberInput.getAttribute("min"));
    const maxValue = parseInt(numberInput.getAttribute("max"));
    numberInput.addEventListener("input", function () {
      let currentValue = parseInt(numberInput.value);
      if (isNaN(currentValue) || currentValue < minValue) {
        numberInput.value = minValue;
      } else if (currentValue > maxValue) {
        numberInput.value = maxValue;
      }
    });
    decrementButton.addEventListener("click", function () {
      numberInput.stepDown();
      numberInput;
    });

    incrementButton.addEventListener("click", function () {
      numberInput.stepUp();
    });
    recargaEnEUR.addEventListener("click", () => {
      if (recargaEnUSD.classList.contains("activeBtn")) {
        recargaEnUSD.classList.remove("activeBtn");
        recargaEnEUR.classList.add("activeBtn");
        txtDinamicoFst.textContent = "Tasa EUR / VES";
        txtDinamicoSnd.textContent = "Monto a Descontar en EUR";
      }
    });
    recargaEnUSD.addEventListener("click", () => {
      if (recargaEnEUR.classList.contains("activeBtn")) {
        recargaEnEUR.classList.remove("activeBtn");
        recargaEnUSD.classList.add("activeBtn");
        txtDinamicoFst.textContent = "Tasa USD / VES";
        txtDinamicoSnd.textContent = "Monto a Descontar en USD";
      }
    });
    imageRecarga.src = "./public/servicios/logointer.png";
    textDinamicoBtn.textContent = "EFECTUAR PAGO";
    textDinamicoBtn.addEventListener("click", () => {
      modalRecargaExitosa.style.display = "block";
    });
  });
  toHOme.addEventListener("click", () => {
    modalRecargaExitosa.style.display = "none";
    mountComponent(homeComponent);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
