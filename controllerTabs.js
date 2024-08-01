const controllerHome = document.getElementById("controllerHome");
const controllerRecarga = document.getElementById("controllerRecarga");
const controllerServicios = document.getElementById("controllerServicios");
const controllerMiCuenta = document.getElementById("controllerMiCuenta");
const controllerContactanos = document.getElementById("controllerContactanos");
const controllerRetiroMenu = document.getElementById("controllerRetiroMenu");
const controllerContactanosMenu = document.getElementById(
  "controllerContactanosMenu"
);
const controllerRecargaMenu = document.getElementById("controllerRecargaMenu");
const controllerPerfil = document.getElementById("controllerPerfil");
const controllerSeguridad = document.getElementById("controllerSeguridad");
const controllerHomeMenu = document.getElementById("controllerHomeMenu");
const controllerTasasMenu = document.getElementById("controllerTasasMenu");
const recargaMovistar = document.getElementById("recargaMovistar");
const recargaEurosBtn = document.getElementById("recargaEurosBtn");
// controllerMENU
const recargaMovistarMenu = document.getElementById("recargaMovistarMenu");
const recargaDigitelMenu = document.getElementById("recargaDigitelMenu");
const recargaMovilnetMenu = document.getElementById("recargaMovilnetMenu");
const recargaCantvMenu = document.getElementById("recargaCantvMenu");
const recargaInterMenu = document.getElementById("recargaInterMenu");
// controllerMENU

const homeComponent = document.getElementById("homeComponent");
const retirarComponent = document.getElementById("retirarComponent");
const micuentaComponent = document.getElementById("micuentaComponent");
const contactanosComponent = document.getElementById("contactanosComponent");
const enviarComponent = document.getElementById("enviarComponent");
const recargaComponent = document.getElementById("recargaComponent");
const metodosRecarga = document.getElementById("metodosRecarga");
const tasasComponent = document.getElementById("tasasComponent");
const recargaConVisa = document.getElementById("recargaConVisa");
const recargaConBinance = document.getElementById("recargaConBinance");
const recargaConEur = document.getElementById("recargaConEur");
//MODALES
const modalRecargaExitosa = document.getElementById("modalRecargaExitosa");
const modalDetalleMov = document.getElementById("modalDetalleMov");
//MODALES
const usdEfectivoBtn = document.getElementById("usdEfectivoBtn");
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
const closeModalDetalle =
  document.getElementsByClassName("closeModalDetalle")[0];
const toHOme = document.getElementById("toHOme");
const comerciosComponent = document.getElementById("comerciosComponent");
function mountComponent(componentSelected) {
  app.innerHTML = "";
  isMounted = false;
  if (!isMounted) {
    const resultComponent = componentSelected.content.cloneNode(true);
    app.appendChild(resultComponent);
    isMounted = true;
  }
}
function renderComerciosComponent(modoPago) {
  app.style.display = "none";

  if (
    comerciosComponent !== null &&
    comerciosComponent.classList.contains("hidden")
  ) {
    comerciosComponent.classList.remove("hidden");
  } else {
    comerciosComponent.classList.add("hidden");
  }

  // Seleccionar elementos dinámicos de comercios
  const imgComerciosDinamic = document.getElementById("imgComerciosDinamic");
  const otroPuntoComercios = document.getElementById("otroPuntoComercios");

  // Cambiar la fuente de la imagen dinámica
  switch (modoPago) {
    case "comercio":
      imgComerciosDinamic.src = "./public/recarga/disashop.png";
      break;
    case "comercioAut":
      imgComerciosDinamic.src = "./public/recarga/abanca.png";
      break;
    case "cajeroAut":
      imgComerciosDinamic.src = "./public/recarga/cajamar.png";
      break;
  }
  // Añadir evento de clic al botón de otro punto de comercios
  if (otroPuntoComercios !== null) {
    otroPuntoComercios.addEventListener("click", () => {
      comerciosComponent.classList.add("hidden");
      app.style.display = "block";
    });
  }
}
function hideComerciosComponent() {
  const comerciosComponent = document.getElementById("comerciosComponent");
  if (comerciosComponent) {
    comerciosComponent.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  mountComponent(homeComponent);
  //mountComponent(tasasComponent);
  const movimientosBtns = document.querySelectorAll(".movimientosBtns");
  const btnRecargaRapida = document.getElementById("btnRecargaRapida");
  const btnRetiraRapida = document.getElementById("btnRetiraRapida");
  const iconSoporte = document.querySelectorAll(".iconDinamicRapid");

  document.addEventListener("cambiarIconosDinamic", () => {
    iconSoporte.forEach((element) => {
      const regex = /white/;
      const url = element.src;
      const validacion = regex.test(url);
      let stringToAdd = "-white";
      let lastDotIndex = url.lastIndexOf(".");
      let beforeDot = url.substring(0, lastDotIndex);
      let afterDot = url.substring(lastDotIndex);
      let newUrl = beforeDot + stringToAdd + afterDot;
      element.src = validacion ? url.replace("-white", "") : newUrl;
    });
  });
  if (window.toggleVar) {
    iconSoporte.forEach((element) => {
      const regex = /white/;
      const url = element.src;
      const validacion = regex.test(url);
      let stringToAdd = "-white";
      let lastDotIndex = url.lastIndexOf(".");
      let beforeDot = url.substring(0, lastDotIndex);
      let afterDot = url.substring(lastDotIndex);
      let newUrl = beforeDot + stringToAdd + afterDot;
      element.src = validacion ? url.replace("-white", "") : newUrl;
    });
  }

  btnRecargaRapida.addEventListener("click", () => {
    mountComponent(recargaComponent);
    const recargaDolaresBtn = document.getElementById("recargaDolaresBtn");
    const recargaEurosBtn = document.getElementById("recargaEurosBtn");
    recargaDolaresBtn.addEventListener("click", () => {
      mountComponent(metodosRecarga);
      const recargaConVisaBtn = document.getElementById("recargaConVisaBtn");
      const recargaConBinanceBtn = document.getElementById(
        "recargaConBinanceBtn"
      );
      recargaConVisaBtn.addEventListener("click", () => {
        mountComponent(recargaConVisa);
      });
      recargaConBinanceBtn.addEventListener("click", () => {
        mountComponent(recargaConBinance);
      });
    });
    recargaEurosBtn.addEventListener("click", () => {
      mountComponent(recargaConEur);

      const comerciosBtn = document.getElementById("comerciosBtn");
      const comerciosAutBtn = document.getElementById("comerciosAutBtn");
      const cajerosAutBtn = document.getElementById("cajerosAutBtn");

      comerciosBtn.addEventListener("click", () => {
        renderComerciosComponent("comercio");
      });
      comerciosAutBtn.addEventListener("click", () => {
        renderComerciosComponent("comercioAut");
      });
      cajerosAutBtn.addEventListener("click", () => {
        renderComerciosComponent("cajeroAut");
      });
    });
  });
  btnRetiraRapida.addEventListener("click", () => {
    mountComponent(retirarComponent);
    menu.classList.remove("open");
    const imgBancoRetirar = document.getElementById("imgBancoRetirar");
    document.addEventListener("cambiarIconosDinamic", () => {
      const regex = /white/;
      const url = imgBancoRetirar.src;
      const validacion = regex.test(url);
      let stringToAdd = "-white";
      let lastDotIndex = url.lastIndexOf(".");
      let beforeDot = url.substring(0, lastDotIndex);
      let afterDot = url.substring(lastDotIndex);
      let newUrl = beforeDot + stringToAdd + afterDot;
      imgBancoRetirar.src = validacion ? url.replace("-white", "") : newUrl;
    });
    if (window.toggleVar) {
      const regex = /white/;
      const url = imgBancoRetirar.src;
      const validacion = regex.test(url);
      let stringToAdd = "-white";
      let lastDotIndex = url.lastIndexOf(".");
      let beforeDot = url.substring(0, lastDotIndex);
      let afterDot = url.substring(lastDotIndex);
      let newUrl = beforeDot + stringToAdd + afterDot;
      imgBancoRetirar.src = validacion ? url.replace("-white", "") : newUrl;
    }
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
        nuevoBeneficiarioBtn.classList.toggle("btnIluminado");
        nuevoBeneficiarioForm.classList.toggle("active");
      });
    });
  });
  movimientosBtns.forEach((element) => {
    element.addEventListener("click", () => {
      modalDetalleMov.style.display = "block";
      let urlBanco = [];
      urlBanco.push(element.children[0].innerText);
      let urlEstado = [];
      urlEstado.push(element.children[1].innerText);

      bancoDetalle.innerText = urlBanco[0].split("\n")[0];

      monedaDetalle.innerText = urlEstado[0].split("\n")[0];
      estadoDetalle.innerText = urlEstado[0].split("\n")[2];
      imgDetalle.src = element.children[0].children[0].currentSrc;
      priceDetalle.innerText = urlEstado[0].split("\n")[1];
    });
    closeModalDetalle.onclick = function () {
      modalDetalleMov.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modalDetalleMov) {
        modalDetalleMov.style.display = "none";
      }
    };
  });

  controllerHome.addEventListener("click", () => {
    if (!controllerHome.classList.contains("button")) {
      controllerRecarga.classList.remove("button");
      controllerServicios.classList.remove("button");
      controllerMiCuenta.classList.remove("button");

      controllerHome.classList.toggle("button");
    }
    mountComponent(homeComponent);
    const btnRecargaRapida = document.getElementById("btnRecargaRapida");
    const btnRetiraRapida = document.getElementById("btnRetiraRapida");
    const iconSoporte = document.querySelectorAll(".iconDinamicRapid");
    document.addEventListener("cambiarIconosDinamic", () => {
      iconSoporte.forEach((element) => {
        const regex = /white/;
        const url = element.src;
        const validacion = regex.test(url);
        let stringToAdd = "-white";
        let lastDotIndex = url.lastIndexOf(".");
        let beforeDot = url.substring(0, lastDotIndex);
        let afterDot = url.substring(lastDotIndex);
        let newUrl = beforeDot + stringToAdd + afterDot;
        element.src = validacion ? url.replace("-white", "") : newUrl;
      });
    });
    if (window.toggleVar) {
      iconSoporte.forEach((element) => {
        const regex = /white/;
        const url = element.src;
        const validacion = regex.test(url);
        let stringToAdd = "-white";
        let lastDotIndex = url.lastIndexOf(".");
        let beforeDot = url.substring(0, lastDotIndex);
        let afterDot = url.substring(lastDotIndex);
        let newUrl = beforeDot + stringToAdd + afterDot;
        element.src = validacion ? url.replace("-white", "") : newUrl;
      });
    }
    btnRecargaRapida.addEventListener("click", () => {
      mountComponent(recargaComponent);
      const recargaDolaresBtn = document.getElementById("recargaDolaresBtn");
      const recargaEurosBtn = document.getElementById("recargaEurosBtn");
      recargaDolaresBtn.addEventListener("click", () => {
        mountComponent(metodosRecarga);
        const recargaConVisaBtn = document.getElementById("recargaConVisaBtn");
        const recargaConBinanceBtn = document.getElementById(
          "recargaConBinanceBtn"
        );
        recargaConVisaBtn.addEventListener("click", () => {
          mountComponent(recargaConVisa);
        });
        recargaConBinanceBtn.addEventListener("click", () => {
          mountComponent(recargaConBinance);
        });
      });
      recargaEurosBtn.addEventListener("click", () => {
        mountComponent(recargaConEur);
        const comerciosBtn = document.getElementById("comerciosBtn");
        const comerciosAutBtn = document.getElementById("comerciosAutBtn");
        const cajerosAutBtn = document.getElementById("cajerosAutBtn");

        comerciosBtn.addEventListener("click", () => {
          renderComerciosComponent("comercio");
        });
        comerciosAutBtn.addEventListener("click", () => {
          renderComerciosComponent("comercioAut");
        });
        cajerosAutBtn.addEventListener("click", () => {
          renderComerciosComponent("cajeroAut");
        });
      });
    });
    btnRetiraRapida.addEventListener("click", () => {
      mountComponent(retirarComponent);
      menu.classList.remove("open");
      const imgBancoRetirar = document.getElementById("imgBancoRetirar");
      document.addEventListener("cambiarIconosDinamic", () => {
        const regex = /white/;
        const url = imgBancoRetirar.src;
        const validacion = regex.test(url);
        let stringToAdd = "-white";
        let lastDotIndex = url.lastIndexOf(".");
        let beforeDot = url.substring(0, lastDotIndex);
        let afterDot = url.substring(lastDotIndex);
        let newUrl = beforeDot + stringToAdd + afterDot;
        imgBancoRetirar.src = validacion ? url.replace("-white", "") : newUrl;
      });
      if (window.toggleVar) {
        const regex = /white/;
        const url = imgBancoRetirar.src;
        const validacion = regex.test(url);
        let stringToAdd = "-white";
        let lastDotIndex = url.lastIndexOf(".");
        let beforeDot = url.substring(0, lastDotIndex);
        let afterDot = url.substring(lastDotIndex);
        let newUrl = beforeDot + stringToAdd + afterDot;
        imgBancoRetirar.src = validacion ? url.replace("-white", "") : newUrl;
      }
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

    const movimientosBtns = document.querySelectorAll(".movimientosBtns");
    movimientosBtns.forEach((element) => {
      element.addEventListener("click", () => {
        modalDetalleMov.style.display = "block";
        let urlBanco = [];
        urlBanco.push(element.children[0].innerText);
        let urlEstado = [];
        urlEstado.push(element.children[1].innerText);

        bancoDetalle.innerText = urlBanco[0].split("\n")[0];

        monedaDetalle.innerText = urlEstado[0].split("\n")[0];
        estadoDetalle.innerText = urlEstado[0].split("\n")[2];
        imgDetalle.src = element.children[0].children[0].currentSrc;
        priceDetalle.innerText = urlEstado[0].split("\n")[1];
      });
      closeModalDetalle.onclick = function () {
        modalDetalleMov.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modalDetalleMov) {
          modalDetalleMov.style.display = "none";
        }
      };
    });
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
      const recargaConVisaBtn = document.getElementById("recargaConVisaBtn");
      const recargaConBinanceBtn = document.getElementById(
        "recargaConBinanceBtn"
      );
      recargaConVisaBtn.addEventListener("click", () => {
        mountComponent(recargaConVisa);
      });
      recargaConBinanceBtn.addEventListener("click", () => {
        mountComponent(recargaConBinance);
      });
    });
    recargaEurosBtn.addEventListener("click", () => {
      mountComponent(recargaConEur);
      const comerciosBtn = document.getElementById("comerciosBtn");
      const comerciosAutBtn = document.getElementById("comerciosAutBtn");
      const cajerosAutBtn = document.getElementById("cajerosAutBtn");

      comerciosBtn.addEventListener("click", () => {
        renderComerciosComponent("comercio");
      });
      comerciosAutBtn.addEventListener("click", () => {
        renderComerciosComponent("comercioAut");
      });
      cajerosAutBtn.addEventListener("click", () => {
        renderComerciosComponent("cajeroAut");
      });
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
        mountComponent(accionServicioComponent);
        const textDinamicoBtn = document.getElementById("textDinamicoBtn");
        const recargaEnEUR = document.getElementById("recargaEnEUR");
        const recargaEnUSD = document.getElementById("recargaEnUSD");
        const txtDinamicoFst = document.getElementById("txtDinamicoFst");
        const txtDinamicoSnd = document.getElementById("txtDinamicoSnd");
        const decrementButton = document.getElementById("decrement-button");
        const incrementButton = document.getElementById("increment-button");
        const numberInput = document.getElementById("number-inputServicios");
        const modalFavoritos = document.getElementById("myModal");
        const btn = document.getElementById("btnFavoritos");

        btn.onclick = function () {
          modalFavoritos.style.display = "block";
        };
        span.onclick = function () {
          modalFavoritos.style.display = "none";
        };
        window.onclick = function (event) {
          if (event.target == modalFavoritos) {
            modalFavoritos.style.display = "none";
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
        textDinamicoBtn.addEventListener("click", () => {
          modalRecargaExitosa.style.display = "block";
        });
    });

    recargaDigitel.addEventListener("click", () => {
      mountComponent(accionServicioComponent);
      const textDinamicoBtn = document.getElementById("textDinamicoBtn");
      const imageRecarga = document.getElementById("imageRecarga");
      const recargaEnEUR = document.getElementById("recargaEnEUR");
      const recargaEnUSD = document.getElementById("recargaEnUSD");
      const txtDinamicoFst = document.getElementById("txtDinamicoFst");
      const txtDinamicoSnd = document.getElementById("txtDinamicoSnd");
      const decrementButton = document.getElementById("decrement-button");
      const incrementButton = document.getElementById("increment-button");
      const numberInput = document.getElementById("number-inputServicios");
      const modalFavoritos = document.getElementById("myModal");
      const btn = document.getElementById("btnFavoritos");
      const titleService = document.getElementById("titleService");
      const inputNumber = document.getElementById("inputNumber");
      const movilFijoCampo = document.getElementById("movilFijoCampo");
      const descripcionRecargas = document.getElementById(
        "descripcionRecargas"
      );

      btn.onclick = function () {
        modalFavoritos.style.display = "block";
      };
      span.onclick = function () {
        modalFavoritos.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modalFavoritos) {
          modalFavoritos.style.display = "none";
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
      titleService.textContent = "Digitel prepago a recargar";
      movilFijoCampo.style.display = "none";
      inputNumber.placeholder = "";
      numberInput.value = "50";
      numberInput.min = "50";
      descripcionRecargas.textContent =
        "*El monto a recargar debe ser mayor o igual a Bs. 50 hasta un máximo de Bs. 800, el incremento es de Bs. 50";
      imageRecarga.src = "./public/servicios/logodigitel.png";
      textDinamicoBtn.addEventListener("click", () => {
        modalRecargaExitosa.style.display = "block";
      });
    });

    recargaMovilnet.addEventListener("click", () => {
      mountComponent(accionServicioComponent);
      const textDinamicoBtn = document.getElementById("textDinamicoBtn");
      const imageRecarga = document.getElementById("imageRecarga");
      const recargaEnEUR = document.getElementById("recargaEnEUR");
      const recargaEnUSD = document.getElementById("recargaEnUSD");
      const txtDinamicoFst = document.getElementById("txtDinamicoFst");
      const txtDinamicoSnd = document.getElementById("txtDinamicoSnd");
      const decrementButton = document.getElementById("decrement-button");
      const incrementButton = document.getElementById("increment-button");
      const numberInput = document.getElementById("number-inputServicios");
      const modalFavoritos = document.getElementById("myModal");
      const movilFijoCampo = document.getElementById("movilFijoCampo");
      const movilnetCampo = document.getElementById("movilnetCampo");
      const inputNumber = document.getElementById("inputNumber");
      const descripcionRecargas = document.getElementById(
        "descripcionRecargas"
      );
      const btn = document.getElementById("btnFavoritos");

      btn.onclick = function () {
        modalFavoritos.style.display = "block";
      };
      span.onclick = function () {
        modalFavoritos.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modalFavoritos) {
          modalFavoritos.style.display = "none";
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
      movilFijoCampo.style.display = "none";
      movilnetCampo.style.display = "block";
      inputNumber.placeholder = "Número (0416 o 0426)";
      numberInput.value = "40";
      numberInput.min = "40";
      descripcionRecargas.textContent =
        "*El monto a recargar debe ser mayor o igual a Bs. 40 hasta un máximo de Bs. 7000, el incremento es de Bs. 40";
      imageRecarga.src = "./public/servicios/logomovilnet.png";
      textDinamicoBtn.addEventListener("click", () => {
        modalRecargaExitosa.style.display = "block";
      });
    });

    recargaCantv.addEventListener("click", () => {
      mountComponent(accionServicioComponent);
      const textDinamicoBtn = document.getElementById("textDinamicoBtn");
      const imageRecarga = document.getElementById("imageRecarga");
      const recargaEnEUR = document.getElementById("recargaEnEUR");
      const recargaEnUSD = document.getElementById("recargaEnUSD");
      const txtDinamicoFst = document.getElementById("txtDinamicoFst");
      const txtDinamicoSnd = document.getElementById("txtDinamicoSnd");
      const decrementButton = document.getElementById("decrement-button");
      const incrementButton = document.getElementById("increment-button");
      const numberInput = document.getElementById("number-inputServicios");
      const modalFavoritos = document.getElementById("myModal");
      const btn = document.getElementById("btnFavoritos");
      const movilFijoCampo = document.getElementById("movilFijoCampo");
      const movilnetCampo = document.getElementById("movilnetCampo");
      const inputNumber = document.getElementById("inputNumber");
      const descripcionRecargas = document.getElementById(
        "descripcionRecargas"
      );
      const divMontos = document.getElementById("divMontos");
      const btnDeuda = document.getElementById("btnDeuda");
      const movilCantvCampo = document.getElementById("movilCantvCampo");

      btn.onclick = function () {
        modalFavoritos.style.display = "block";
      };
      span.onclick = function () {
        modalFavoritos.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modalFavoritos) {
          modalFavoritos.style.display = "none";
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
      btnDeuda.classList.remove("hidden");
      movilCantvCampo.classList.remove("hidden");
      movilFijoCampo.style.display = "none";
      movilnetCampo.style.display = "none";
      inputNumber.placeholder = "Nómero (02xx)";
      divMontos.style.display = "none";
      imageRecarga.src = "./public/servicios/logocantv.png";
      textDinamicoBtn.addEventListener("click", () => {
        modalRecargaExitosa.style.display = "block";
      });
    });

    recargaInter.addEventListener("click", () => {
      mountComponent(accionServicioComponent);
      const textDinamicoBtn = document.getElementById("textDinamicoBtn");
      const imageRecarga = document.getElementById("imageRecarga");
      const recargaEnEUR = document.getElementById("recargaEnEUR");
      const recargaEnUSD = document.getElementById("recargaEnUSD");
      const txtDinamicoFst = document.getElementById("txtDinamicoFst");
      const txtDinamicoSnd = document.getElementById("txtDinamicoSnd");
      const decrementButton = document.getElementById("decrement-button");
      const incrementButton = document.getElementById("increment-button");
      const numberInput = document.getElementById("number-inputServicios");
      const modalFavoritos = document.getElementById("myModal");
      const btn = document.getElementById("btnFavoritos");
      const titleService = document.getElementById("titleService");
      const titleUsando = document.getElementById("titleUsando");

      btn.onclick = function () {
        modalFavoritos.style.display = "block";
      };
      span.onclick = function () {
        modalFavoritos.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modalFavoritos) {
          modalFavoritos.style.display = "none";
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
      titleService.textContent = "Número de Contrato";
      titleUsando.textContent =
        "Seleccione la Wallet de donde se debitaran los fondos";
      btnDeuda.classList.remove("hidden");
      movilFijoCampo.style.display = "none";
      movilnetCampo.style.display = "none";
      inputNumber.placeholder = "(10 dígitos)";
      divMontos.style.display = "none";
      imageRecarga.src = "./public/servicios/logointer.png";
      textDinamicoBtn.textContent = "EFECTUAR PAGO";
      textDinamicoBtn.addEventListener("click", () => {
        modalRecargaExitosa.style.display = "block";
      });
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
    const iconSoporte = document.getElementById("iconSoporte");
    document.addEventListener("cambiarIconosDinamic", (e) => {
      const regex = /white/;
      const url = iconSoporte.src;
      const validacion = regex.test(url);
      let stringToAdd = "-white";
      let lastDotIndex = url.lastIndexOf(".");
      let beforeDot = url.substring(0, lastDotIndex);
      let afterDot = url.substring(lastDotIndex);
      let newUrl = beforeDot + stringToAdd + afterDot;
      iconSoporte.src = validacion ? url.replace("-white", "") : newUrl;
    });
    if (window.toggleVar) {
      const regex = /white/;
      const url = iconSoporte.src;
      const validacion = regex.test(url);
      let stringToAdd = "-white";
      let lastDotIndex = url.lastIndexOf(".");
      let beforeDot = url.substring(0, lastDotIndex);
      let afterDot = url.substring(lastDotIndex);
      let newUrl = beforeDot + stringToAdd + afterDot;
      iconSoporte.src = validacion ? url.replace("-white", "") : newUrl;
    } else {
      iconSoporte.src = "./public/soporte.png";
    }
  });
  controllerContactanosMenu.addEventListener("click", () => {
    mountComponent(contactanosComponent);
    menu.classList.remove("open");
    const iconSoporte = document.getElementById("iconSoporte");
    document.addEventListener("cambiarIconosDinamic", (e) => {
      const regex = /white/;
      const url = iconSoporte.src;
      const validacion = regex.test(url);
      let stringToAdd = "-white";
      let lastDotIndex = url.lastIndexOf(".");
      let beforeDot = url.substring(0, lastDotIndex);
      let afterDot = url.substring(lastDotIndex);
      let newUrl = beforeDot + stringToAdd + afterDot;
      iconSoporte.src = validacion ? url.replace("-white", "") : newUrl;
    });
    if (window.toggleVar) {
      const regex = /white/;
      const url = iconSoporte.src;
      const validacion = regex.test(url);
      let stringToAdd = "-white";
      let lastDotIndex = url.lastIndexOf(".");
      let beforeDot = url.substring(0, lastDotIndex);
      let afterDot = url.substring(lastDotIndex);
      let newUrl = beforeDot + stringToAdd + afterDot;
      iconSoporte.src = validacion ? url.replace("-white", "") : newUrl;
    } else {
      iconSoporte.src = "./public/soporte.png";
    }
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
    mountComponent(retirarComponent);
    menu.classList.remove("open");
    const imgBancoRetirar = document.getElementById("imgBancoRetirar");
    document.addEventListener("cambiarIconosDinamic", () => {
      const regex = /white/;
      const url = imgBancoRetirar.src;
      const validacion = regex.test(url);
      let stringToAdd = "-white";
      let lastDotIndex = url.lastIndexOf(".");
      let beforeDot = url.substring(0, lastDotIndex);
      let afterDot = url.substring(lastDotIndex);
      let newUrl = beforeDot + stringToAdd + afterDot;
      imgBancoRetirar.src = validacion ? url.replace("-white", "") : newUrl;
    });
    if (window.toggleVar) {
      const regex = /white/;
      const url = imgBancoRetirar.src;
      const validacion = regex.test(url);
      let stringToAdd = "-white";
      let lastDotIndex = url.lastIndexOf(".");
      let beforeDot = url.substring(0, lastDotIndex);
      let afterDot = url.substring(lastDotIndex);
      let newUrl = beforeDot + stringToAdd + afterDot;
      imgBancoRetirar.src = validacion ? url.replace("-white", "") : newUrl;
    }
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
  controllerHomeMenu.addEventListener("click", () => {
    mountComponent(homeComponent);
    const btnRecargaRapida = document.getElementById("btnRecargaRapida");
    const btnRetiraRapida = document.getElementById("btnRetiraRapida");
    const iconSoporte = document.querySelectorAll(".iconDinamicRapid");
    document.addEventListener("cambiarIconosDinamic", () => {
      iconSoporte.forEach((element) => {
        console.log(element.src);
        const regex = /white/;
        const url = element.src;
        const validacion = regex.test(url);
        let stringToAdd = "-white";
        let lastDotIndex = url.lastIndexOf(".");
        let beforeDot = url.substring(0, lastDotIndex);
        let afterDot = url.substring(lastDotIndex);
        let newUrl = beforeDot + stringToAdd + afterDot;
        element.src = validacion ? url.replace("-white", "") : newUrl;
      });
    });
    if (window.toggleVar) {
      iconSoporte.forEach((element) => {
        console.log("dentro if");
        const regex = /white/;
        const url = element.src;
        const validacion = regex.test(url);
        let stringToAdd = "-white";
        let lastDotIndex = url.lastIndexOf(".");
        let beforeDot = url.substring(0, lastDotIndex);
        let afterDot = url.substring(lastDotIndex);
        let newUrl = beforeDot + stringToAdd + afterDot;
        element.src = validacion ? url.replace("-white", "") : newUrl;
      });
    }
    btnRecargaRapida.addEventListener("click", () => {
      mountComponent(recargaComponent);
      const recargaDolaresBtn = document.getElementById("recargaDolaresBtn");
      const recargaEurosBtn = document.getElementById("recargaEurosBtn");
      recargaDolaresBtn.addEventListener("click", () => {
        mountComponent(metodosRecarga);
        const recargaConVisaBtn = document.getElementById("recargaConVisaBtn");
        const recargaConBinanceBtn = document.getElementById(
          "recargaConBinanceBtn"
        );
        recargaConVisaBtn.addEventListener("click", () => {
          mountComponent(recargaConVisa);
        });
        recargaConBinanceBtn.addEventListener("click", () => {
          mountComponent(recargaConBinance);
        });
      });
      recargaEurosBtn.addEventListener("click", () => {
        mountComponent(recargaConEur);
        const comerciosBtn = document.getElementById("comerciosBtn");
        const comerciosAutBtn = document.getElementById("comerciosAutBtn");
        const cajerosAutBtn = document.getElementById("cajerosAutBtn");

        comerciosBtn.addEventListener("click", () => {
          renderComerciosComponent("comercio");
        });
        comerciosAutBtn.addEventListener("click", () => {
          renderComerciosComponent("comercioAut");
        });
        cajerosAutBtn.addEventListener("click", () => {
          renderComerciosComponent("cajeroAut");
        });
      });
    });
    btnRetiraRapida.addEventListener("click", () => {
      mountComponent(retirarComponent);
      menu.classList.remove("open");
      const imgBancoRetirar = document.getElementById("imgBancoRetirar");
      document.addEventListener("cambiarIconosDinamic", () => {
        const regex = /white/;
        const url = imgBancoRetirar.src;
        const validacion = regex.test(url);
        let stringToAdd = "-white";
        let lastDotIndex = url.lastIndexOf(".");
        let beforeDot = url.substring(0, lastDotIndex);
        let afterDot = url.substring(lastDotIndex);
        let newUrl = beforeDot + stringToAdd + afterDot;
        imgBancoRetirar.src = validacion ? url.replace("-white", "") : newUrl;
      });
      if (window.toggleVar) {
        const regex = /white/;
        const url = imgBancoRetirar.src;
        const validacion = regex.test(url);
        let stringToAdd = "-white";
        let lastDotIndex = url.lastIndexOf(".");
        let beforeDot = url.substring(0, lastDotIndex);
        let afterDot = url.substring(lastDotIndex);
        let newUrl = beforeDot + stringToAdd + afterDot;
        imgBancoRetirar.src = validacion ? url.replace("-white", "") : newUrl;
      }
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
    const movimientosBtns = document.querySelectorAll(".movimientosBtns");
    menu.classList.remove("open");
    movimientosBtns.forEach((element) => {
      element.addEventListener("click", () => {
        modalDetalleMov.style.display = "block";
        let urlBanco = [];
        urlBanco.push(element.children[0].innerText);
        let urlEstado = [];
        urlEstado.push(element.children[1].innerText);

        bancoDetalle.innerText = urlBanco[0].split("\n")[0];

        monedaDetalle.innerText = urlEstado[0].split("\n")[0];
        estadoDetalle.innerText = urlEstado[0].split("\n")[2];
        imgDetalle.src = element.children[0].children[0].currentSrc;
        priceDetalle.innerText = urlEstado[0].split("\n")[1];
      });
      closeModalDetalle.onclick = function () {
        modalDetalleMov.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modalDetalleMov) {
          modalDetalleMov.style.display = "none";
        }
      };
    });
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
  });
  controllerRecargaMenu.addEventListener("click", () => {
    menu.classList.remove("open");
    mountComponent(recargaComponent);
    const recargaDolaresBtn = document.getElementById("recargaDolaresBtn");
    const recargaEurosBtn = document.getElementById("recargaEurosBtn");
    recargaDolaresBtn.addEventListener("click", () => {
      mountComponent(metodosRecarga);
      const recargaConVisaBtn = document.getElementById("recargaConVisaBtn");
      const recargaConBinanceBtn = document.getElementById(
        "recargaConBinanceBtn"
      );
      recargaConVisaBtn.addEventListener("click", () => {
        mountComponent(recargaConVisa);
      });
      recargaConBinanceBtn.addEventListener("click", () => {
        mountComponent(recargaConBinance);
      });
    });
    recargaEurosBtn.addEventListener("click", () => {
      mountComponent(recargaConEur);
      const comerciosBtn = document.getElementById("comerciosBtn");
      const comerciosAutBtn = document.getElementById("comerciosAutBtn");
      const cajerosAutBtn = document.getElementById("cajerosAutBtn");

      comerciosBtn.addEventListener("click", () => {
        renderComerciosComponent("comercio");
      });
      comerciosAutBtn.addEventListener("click", () => {
        renderComerciosComponent("comercioAut");
      });
      cajerosAutBtn.addEventListener("click", () => {
        renderComerciosComponent("cajeroAut");
      });
    });
  });
  recargaMovistarMenu.addEventListener("click", () => {
    if (accionServicioComponent) {
      mountComponent(accionServicioComponent);
      menu.classList.remove("open");
      const textDinamicoBtn = document.getElementById("textDinamicoBtn");
      const recargaEnEUR = document.getElementById("recargaEnEUR");
      const recargaEnUSD = document.getElementById("recargaEnUSD");
      const txtDinamicoFst = document.getElementById("txtDinamicoFst");
      const txtDinamicoSnd = document.getElementById("txtDinamicoSnd");
      const decrementButton = document.getElementById("decrement-button");
      const incrementButton = document.getElementById("increment-button");
      const numberInput = document.getElementById("number-inputServicios");
      const modalFavoritos = document.getElementById("myModal");
      const btn = document.getElementById("btnFavoritos");

      btn.onclick = function () {
        modalFavoritos.style.display = "block";
      };
      span.onclick = function () {
        modalFavoritos.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modalFavoritos) {
          modalFavoritos.style.display = "none";
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
      textDinamicoBtn.addEventListener("click", () => {
        modalRecargaExitosa.style.display = "block";
      });
    } else {
      console.error("accionServicioComponent template not found");
    }
  });

  recargaDigitelMenu.addEventListener("click", () => {
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
    const numberInput = document.getElementById("number-inputServicios");
    const modalFavoritos = document.getElementById("myModal");
    const btn = document.getElementById("btnFavoritos");
    const titleService = document.getElementById("titleService");
    const inputNumber = document.getElementById("inputNumber");
    const movilFijoCampo = document.getElementById("movilFijoCampo");
    const descripcionRecargas = document.getElementById("descripcionRecargas");

    btn.onclick = function () {
      modalFavoritos.style.display = "block";
    };
    span.onclick = function () {
      modalFavoritos.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modalFavoritos) {
        modalFavoritos.style.display = "none";
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
    titleService.textContent = "Digitel prepago a recargar";
    movilFijoCampo.style.display = "none";
    inputNumber.placeholder = "";
    numberInput.value = "50";
    numberInput.min = "50";
    descripcionRecargas.textContent =
      "*El monto a recargar debe ser mayor o igual a Bs. 50 hasta un máximo de Bs. 800, el incremento es de Bs. 50";
    imageRecarga.src = "./public/servicios/logodigitel.png";
    textDinamicoBtn.addEventListener("click", () => {
      modalRecargaExitosa.style.display = "block";
    });
  });

  recargaMovilnetMenu.addEventListener("click", () => {
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
    const numberInput = document.getElementById("number-inputServicios");
    const modalFavoritos = document.getElementById("myModal");
    const movilFijoCampo = document.getElementById("movilFijoCampo");
    const movilnetCampo = document.getElementById("movilnetCampo");
    const inputNumber = document.getElementById("inputNumber");
    const descripcionRecargas = document.getElementById("descripcionRecargas");
    const btn = document.getElementById("btnFavoritos");

    btn.onclick = function () {
      modalFavoritos.style.display = "block";
    };
    span.onclick = function () {
      modalFavoritos.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modalFavoritos) {
        modalFavoritos.style.display = "none";
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
    movilFijoCampo.style.display = "none";
    movilnetCampo.style.display = "block";
    inputNumber.placeholder = "Número (0416 o 0426)";
    numberInput.value = "40";
    numberInput.min = "40";
    descripcionRecargas.textContent =
      "*El monto a recargar debe ser mayor o igual a Bs. 40 hasta un máximo de Bs. 7000, el incremento es de Bs. 40";
    imageRecarga.src = "./public/servicios/logomovilnet.png";
    textDinamicoBtn.addEventListener("click", () => {
      modalRecargaExitosa.style.display = "block";
    });
  });

  recargaCantvMenu.addEventListener("click", () => {
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
    const numberInput = document.getElementById("number-inputServicios");
    const modalFavoritos = document.getElementById("myModal");
    const btn = document.getElementById("btnFavoritos");
    const movilFijoCampo = document.getElementById("movilFijoCampo");
    const movilnetCampo = document.getElementById("movilnetCampo");
    const inputNumber = document.getElementById("inputNumber");
    const descripcionRecargas = document.getElementById("descripcionRecargas");
    const divMontos = document.getElementById("divMontos");
    const btnDeuda = document.getElementById("btnDeuda");
    const movilCantvCampo = document.getElementById("movilCantvCampo");

    btn.onclick = function () {
      modalFavoritos.style.display = "block";
    };
    span.onclick = function () {
      modalFavoritos.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modalFavoritos) {
        modalFavoritos.style.display = "none";
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
    btnDeuda.classList.remove("hidden");
    movilCantvCampo.classList.remove("hidden");
    movilFijoCampo.style.display = "none";
    movilnetCampo.style.display = "none";
    inputNumber.placeholder = "Nómero (02xx)";
    divMontos.style.display = "none";
    imageRecarga.src = "./public/servicios/logocantv.png";
    textDinamicoBtn.addEventListener("click", () => {
      modalRecargaExitosa.style.display = "block";
    });
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
    const numberInput = document.getElementById("number-inputServicios");
    const modalFavoritos = document.getElementById("myModal");
    const btn = document.getElementById("btnFavoritos");
    const titleService = document.getElementById("titleService");
    const titleUsando = document.getElementById("titleUsando");

    btn.onclick = function () {
      modalFavoritos.style.display = "block";
    };
    span.onclick = function () {
      modalFavoritos.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modalFavoritos) {
        modalFavoritos.style.display = "none";
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
    titleService.textContent = "Número de Contrato";
    titleUsando.textContent =
      "Seleccione la Wallet de donde se debitaran los fondos";
    btnDeuda.classList.remove("hidden");
    movilFijoCampo.style.display = "none";
    movilnetCampo.style.display = "none";
    inputNumber.placeholder = "(10 dígitos)";
    divMontos.style.display = "none";
    imageRecarga.src = "./public/servicios/logointer.png";
    textDinamicoBtn.textContent = "EFECTUAR PAGO";
    textDinamicoBtn.addEventListener("click", () => {
      modalRecargaExitosa.style.display = "block";
    });
  });

  toHOme.addEventListener("click", () => {
    modalRecargaExitosa.style.display = "none";
    mountComponent(homeComponent);
    const btnRecargaRapida = document.getElementById("btnRecargaRapida");
    const btnRetiraRapida = document.getElementById("btnRetiraRapida");
    const iconSoporte = document.querySelectorAll(".iconDinamicRapid");
    document.addEventListener("cambiarIconosDinamic", () => {
      iconSoporte.forEach((element) => {
        console.log(element.src);
        const regex = /white/;
        const url = element.src;
        const validacion = regex.test(url);
        let stringToAdd = "-white";
        let lastDotIndex = url.lastIndexOf(".");
        let beforeDot = url.substring(0, lastDotIndex);
        let afterDot = url.substring(lastDotIndex);
        let newUrl = beforeDot + stringToAdd + afterDot;
        element.src = validacion ? url.replace("-white", "") : newUrl;
      });
    });
    if (window.toggleVar) {
      iconSoporte.forEach((element) => {
        console.log("dentro if");
        const regex = /white/;
        const url = element.src;
        const validacion = regex.test(url);
        let stringToAdd = "-white";
        let lastDotIndex = url.lastIndexOf(".");
        let beforeDot = url.substring(0, lastDotIndex);
        let afterDot = url.substring(lastDotIndex);
        let newUrl = beforeDot + stringToAdd + afterDot;
        element.src = validacion ? url.replace("-white", "") : newUrl;
      });
    }
    btnRecargaRapida.addEventListener("click", () => {
      mountComponent(recargaComponent);
      const recargaDolaresBtn = document.getElementById("recargaDolaresBtn");
      const recargaEurosBtn = document.getElementById("recargaEurosBtn");
      recargaDolaresBtn.addEventListener("click", () => {
        mountComponent(metodosRecarga);
        const recargaConVisaBtn = document.getElementById("recargaConVisaBtn");
        const recargaConBinanceBtn = document.getElementById(
          "recargaConBinanceBtn"
        );
        recargaConVisaBtn.addEventListener("click", () => {
          mountComponent(recargaConVisa);
        });
        recargaConBinanceBtn.addEventListener("click", () => {
          mountComponent(recargaConBinance);
        });
      });
      recargaEurosBtn.addEventListener("click", () => {
        mountComponent(recargaConEur);
        const comerciosBtn = document.getElementById("comerciosBtn");
        const comerciosAutBtn = document.getElementById("comerciosAutBtn");
        const cajerosAutBtn = document.getElementById("cajerosAutBtn");

        comerciosBtn.addEventListener("click", () => {
          renderComerciosComponent("comercio");
        });
        comerciosAutBtn.addEventListener("click", () => {
          renderComerciosComponent("comercioAut");
        });
        cajerosAutBtn.addEventListener("click", () => {
          renderComerciosComponent("cajeroAut");
        });
      });
    });
    btnRetiraRapida.addEventListener("click", () => {
      mountComponent(retirarComponent);
      menu.classList.remove("open");
      const imgBancoRetirar = document.getElementById("imgBancoRetirar");
      document.addEventListener("cambiarIconosDinamic", () => {
        const regex = /white/;
        const url = imgBancoRetirar.src;
        const validacion = regex.test(url);
        let stringToAdd = "-white";
        let lastDotIndex = url.lastIndexOf(".");
        let beforeDot = url.substring(0, lastDotIndex);
        let afterDot = url.substring(lastDotIndex);
        let newUrl = beforeDot + stringToAdd + afterDot;
        imgBancoRetirar.src = validacion ? url.replace("-white", "") : newUrl;
      });
      if (window.toggleVar) {
        const regex = /white/;
        const url = imgBancoRetirar.src;
        const validacion = regex.test(url);
        let stringToAdd = "-white";
        let lastDotIndex = url.lastIndexOf(".");
        let beforeDot = url.substring(0, lastDotIndex);
        let afterDot = url.substring(lastDotIndex);
        let newUrl = beforeDot + stringToAdd + afterDot;
        imgBancoRetirar.src = validacion ? url.replace("-white", "") : newUrl;
      }
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
    const movimientosBtns = document.querySelectorAll(".movimientosBtns");

    movimientosBtns.forEach((element) => {
      element.addEventListener("click", () => {
        modalDetalleMov.style.display = "block";
        let urlBanco = [];
        urlBanco.push(element.children[0].innerText);
        let urlEstado = [];
        urlEstado.push(element.children[1].innerText);

        bancoDetalle.innerText = urlBanco[0].split("\n")[0];

        monedaDetalle.innerText = urlEstado[0].split("\n")[0];
        estadoDetalle.innerText = urlEstado[0].split("\n")[2];
        imgDetalle.src = element.children[0].children[0].currentSrc;
        priceDetalle.innerText = urlEstado[0].split("\n")[1];
      });
      closeModalDetalle.onclick = function () {
        modalDetalleMov.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modalDetalleMov) {
          modalDetalleMov.style.display = "none";
        }
      };
    });
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  controllerTasasMenu.addEventListener("click", () => {
    mountComponent(tasasComponent);
    menu.classList.remove("open");
    const dropdownButton = document.getElementById("dropdown-button");
    const dropdownContent = document.getElementById("dropdown-content");
    const selectedFlag = document.getElementById("selected-flag");
    const selectedName = document.getElementById("selected-name");
    const numberInput = document.getElementById("number-inputTasas");
    const decrementButton = document.getElementById("decrement-button");
    const incrementButton = document.getElementById("increment-button");
    const customDropdownButton = document.getElementById(
      "custom-dropdown-button"
    );
    const customDropdownContent = document.getElementById(
      "custom-dropdown-content"
    );
    const customSelectedFlag = document.getElementById("custom-selected-flag");
    const customSelectedName = document.getElementById("custom-selected-name");
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
    customDropdownButton.addEventListener("click", function () {
      customDropdownContent.style.display =
        customDropdownContent.style.display === "block" ? "none" : "block";
    });

    document.querySelectorAll(".custom-country-option").forEach((option) => {
      option.addEventListener("click", function () {
        const countryImage = this.getAttribute("data-image");
        const countryName = this.textContent.trim();

        // Mostrar la bandera y el nombre del país seleccionado en el botón
        customSelectedFlag.src = countryImage;
        customSelectedFlag.alt = countryName;
        customSelectedFlag.style.display = "inline"; // Muestra la bandera
        customSelectedName.textContent = countryName; // Actualiza el texto del botón

        customDropdownContent.style.display = "none"; // Cierra el dropdown
      });
    });
    dropdownButton.addEventListener("click", function () {
      dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
    });
    document.querySelectorAll(".country-option").forEach((option) => {
      option.addEventListener("click", function () {
        const countryImage = this.getAttribute("data-image");
        const countryName = this.textContent.trim();

        // Mostrar la bandera y el nombre del país seleccionado en el botón
        selectedFlag.src = countryImage;
        selectedFlag.alt = countryName;
        selectedFlag.style.display = "inline"; // Muestra la bandera
        selectedName.textContent = countryName; // Actualiza el texto del botón

        dropdownContent.style.display = "none"; // Cierra el dropdown
      });
    });
    // Cierra el dropdown si se hace clic fuera de él
    window.addEventListener("click", function (event) {
      if (!event.target.matches(".dropdown-button")) {
        dropdownContent.style.display = "none";
      }
    });
  });
  if (recargaEurosBtn) {
    recargaEurosBtn.addEventListener("click", () => {
      mountComponent(recargaConEur);
      const comerciosBtn = document.getElementById("comerciosBtn");
      const comerciosAutBtn = document.getElementById("comerciosAutBtn");
      const cajerosAutBtn = document.getElementById("cajerosAutBtn");

      comerciosBtn.addEventListener("click", () => {
        renderComerciosComponent("comercio");
      });
      comerciosAutBtn.addEventListener("click", () => {
        renderComerciosComponent("comercioAut");
      });
      cajerosAutBtn.addEventListener("click", () => {
        renderComerciosComponent("cajeroAut");
      });
    });
  }
  usdEfectivoBtn.addEventListener("click", () => {
    var modal = document.getElementById("modalUsdEfectivo");

    modal.style.display = "block";
    setTimeout(function () {
      modal.style.display = "none";
    }, 1500);
  });
});
