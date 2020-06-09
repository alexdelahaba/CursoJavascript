//Variables
const carrito = document.querySelector("#carrito");
const cursos = document.querySelector("#lista-cursos");
const listaCursos = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
//Event listeners
cargarEventListener();

function cargarEventListener() {
  //agregar carrito
  cursos.addEventListener("click", comprarCurso);

  //eliminar curso del carrito
  carrito.addEventListener("click", eliminarCurso);

  vaciarCarrito.addEventListener("click", vaciarCarritoEntero);

  document.addEventListener("DOMContentLoaded", leerLocalStorage);
}

//Funciones
function comprarCurso(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains("agregar-carrito")) {
    const curso = evt.target.parentElement.parentElement;
    leerDatosCurso(curso);
  }
}

function leerDatosCurso(curso) {
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
  };
  insertarCarrito(infoCurso);
  console.log(infoCurso);
}

function insertarCarrito(infoCurso) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
    <img src="${infoCurso.imagen}" width="100"/>
    </td>
    <td>${infoCurso.titulo}</td>
    <td>${infoCurso.precio}</td>
    <td>
    <a href="#" class="borrar-curso" data-id="${infoCurso.id}">X</a>
    </td>
    `;

  listaCursos.appendChild(row);
  guardarLocalStorage(infoCurso);
}

function eliminarCurso(evt) {
  evt.preventDefault();
  var idCurso;
  if (evt.target.classList.contains("borrar-curso")) {
    evt.target.parentElement.parentElement.remove();
    idCurso = evt.target.parentElement
      .querySelector("a")
      .getAttribute("data-id");
  }
  eliminarCursoLocalStorage(idCurso);
}

function vaciarCarritoEntero() {
  listaCursos.innerHTML = "";
  localStorage.clear();
}

function guardarLocalStorage(infoCurso) {
  var cursos = obtenerLocalStorage();
  cursos.push(infoCurso);

  localStorage.setItem("cursos", JSON.stringify(cursos));
}

function obtenerLocalStorage() {
  var cursosLS;

  if (localStorage.getItem("cursos") === null) {
    cursosLS = [];
  } else {
    cursosLS = JSON.parse(localStorage.getItem("cursos"));
  }

  return cursosLS;
}

function leerLocalStorage() {
  var cursos = obtenerLocalStorage();
  cursos.forEach((infoCurso) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
    <img src="${infoCurso.imagen}" width="100"/>
    </td>
    <td>${infoCurso.titulo}</td>
    <td>${infoCurso.precio}</td>
    <td>
    <a href="#" class="borrar-curso" data-id="${infoCurso.id}">X</a>
    </td>
    `;

    listaCursos.appendChild(row);
  });
}

function eliminarCursoLocalStorage(id) {
  var cursos = obtenerLocalStorage();

  for (var item of cursos) {
    if (item.id === id) {
      cursos.splice(cursos.indexOf(item), 1);
      break;
    }
  }
  localStorage.setItem("cursos", JSON.stringify(cursos));
}
