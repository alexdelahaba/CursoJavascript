// Event listener click al buscados

document
  .querySelector("#submit-buscador")
  .addEventListener("click", function (evt) {
    //Evitamos el action predeterminado con la lisguiente linea.
    evt.preventDefault();
    console.log("Has hecho click");
    console.log(evt.target);
    console.log(evt.target.id);
  });

document.querySelector("#logo").addEventListener("click", ejecutarAccion);

function ejecutarAccion(e) {
  console.log("Has hecho click en el logo");
  console.log(e.target);
}

document.querySelector("#encabezado").addEventListener("click", (e) => {
  e.target.innerText = "Texto cambiado";
  setTimeout(function () {
    e.target.innerText = "Texto cambiado por segunda vez";
  }, 2000);
  console.log("Has modificado el texto");
});

//Otros eventos

//Doble click rápido
document
  .querySelector("#img-carrito")
  .addEventListener("dblclick", function () {
    console.log("Has hecho doble click");
  });

//Mouse enter
document
  .querySelector("#img-carrito")
  .addEventListener("mouseenter", function () {
    console.log("Has hecho mouseenter");
  });

//Mouse leave
document
  .querySelector("#img-carrito")
  .addEventListener("mouseleave", function () {
    console.log("Has hecho mouseleave");
  });

//Mouse over
document
  .querySelector("#img-carrito")
  .addEventListener("mouseover", function () {
    console.log("Has hecho mouseover");
  });

//Mouse out
document
  .querySelector("#img-carrito")
  .addEventListener("mouseout", function () {
    console.log("Has hecho mouseout");
  });

//Mouse down
document
  .querySelector("#img-carrito")
  .addEventListener("mousedown", function () {
    console.log("Has hecho mousedown");
  });

//Mouse up
document.querySelector("#img-carrito").addEventListener("mouseup", function () {
  console.log("Has hecho mouseup");
});

//Mouse move
document
  .querySelector("#img-carrito")
  .addEventListener("mousemove", function () {
    console.log("Has hecho mousemove");
  });

// EVENTOS PARA INPUTS

const buscador = document.querySelector("#buscador");
buscador.addEventListener("keydown", mostrarEvento);
buscador.addEventListener("keyup", mostrarEvento);
buscador.addEventListener("keypress", mostrarEvento);
//cuando clickas dentro del input
buscador.addEventListener("focus", mostrarEvento);
//cuando pinches fuera del input
buscador.addEventListener("blur", mostrarEvento);
//cuando cortes texto en el input
buscador.addEventListener("cut", mostrarEvento);
//cuando copies texto en el input
buscador.addEventListener("copy", mostrarEvento);
//cuando pegues texto en el input
buscador.addEventListener("paste", mostrarEvento);
//cuando cambies de valor en un select, por ejemplo
buscador.addEventListener("change", mostrarEvento);

function mostrarEvento(e) {
  console.log(e.type);
}

//EVENT BUBBLING
const card = document.querySelector(".card");
const infoCurso = document.querySelector(".info-card");
const agregarCarrito = document.querySelector(".agregar-carrito");

card.addEventListener("click", function (evt) {
  evt.stopPropagation();
  console.log("click en card");
});

infoCurso.addEventListener("click", function (evt) {
  evt.stopPropagation();
  console.log("click en infoCurso");
});

agregarCarrito.addEventListener("click", function (evt) {
  evt.preventDefault();
  evt.stopPropagation();
  console.log("click en agregarCarrito");
});

document.body.addEventListener("click", eliminarElemento);

function eliminarElemento(evt) {
  evt.preventDefault();
  console.log(evt.target);

  if (evt.target.classList.contains("borrar-curso")) {
    evt.target.parentElement.parentElement.remove();
    console.log("quieres borrar el curso??????");
  }
  if (evt.target.classList.contains("agregar-carrito")) {
    console.log("quieres añadir el curso??????");
  }
}
