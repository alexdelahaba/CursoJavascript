//variables
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const btnEnviar = document.querySelector("#enviar");
const btnReset = document.querySelector("#resetBtn");
const formulario = document.querySelector("#enviar-mail");

//events listeners
eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", inicioApp);
  email.addEventListener("blur", validarCampo);
  asunto.addEventListener("blur", validarCampo);
  mensaje.addEventListener("blur", validarCampo);
  btnEnviar.addEventListener("click", enviarEmail);
  btnReset.addEventListener("click", resetForm);
}

//funciones
function inicioApp() {
  btnEnviar.disabled = true;
}

function validarCampo() {
  validarLongitud(this);
  if (this.type == "email") {
    validarEmail(this);
  }
  var errores = document.querySelectorAll(".error");
  if (email.value !== "" && asunto.value !== "" && mensaje.value !== "") {
    if (errores.length === 0) {
      btnEnviar.disabled = false;
    }
  }
}

function validarLongitud(campo) {
  if (campo.value.length > 0) {
    campo.style.borderBottomColor = "green";
    campo.classList.remove("error");
  } else {
    campo.style.borderBottomColor = "red";
    campo.classList.add("error");
  }
}

function validarEmail(campo) {
  if (campo.value.includes("@")) {
    campo.style.borderBottomColor = "green";
    campo.classList.remove("error");
  } else {
    campo.style.borderBottomColor = "red";
    campo.classList.add("error");
  }
}

function enviarEmail(evt) {
  evt.preventDefault();
  const spinnerGif = document.querySelector("#spinner");
  spinnerGif.style.display = "block";

  const enviado = document.createElement("img");
  enviado.src = "img/mail.gif";
  enviado.style.display = "block";
  setTimeout(() => {
    document.querySelector("#loaders").appendChild(enviado);
    spinnerGif.style.display = "none";

    setTimeout(() => {
      enviado.style.display = "none";
      formulario.reset();
    }, 3000);
  }, 2000);
}

function resetForm(evt) {
  evt.preventDefault();
  formulario.reset();
}
