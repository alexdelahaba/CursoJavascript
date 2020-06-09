let elemento;

console.log("#################### Bloque básico #############################");
// console.log("Document completo", document);
// console.log("Documento con todos los tags como array", document.all);
// console.log("Seleccionar un elemento concreto", document.body);
// console.log("ver la url", document.URL);
// console.log("Ver la codificacion", document.characterSet);
// console.log("Ver los forms", document.forms);
// console.log("Imagenes de la página", document.images);
// console.log("Atributo de una imagen", document.images[2].getAttribute("src"));
// console.log(
//   "Crear un array con todas las imagenes",
//   Array.from(document.images)
// );

console.log(
  "#################### Bloque seleccion elementos #############################"
);
// //Seleccionar un elemento por id
// var elemento1 = document.getElementById("hero");
// console.log(elemento1);

// //Seleccionar un elemento por su id y obtener su clase
// var elemento2 = document.getElementById("header").className;
// console.log(elemento2);

// //Seleccionar un elemento por id y obtener su texto
// var elemento3 = document.getElementById("encabezado").innerText;
// console.log(elemento3);

// //Modificar el style
// var elemento4 = document.getElementById("encabezado");
// elemento4.style.background = "#333";
// elemento4.style.color = "#fff";
// elemento4.style.padding = "50px";
// elemento4.innerText = "Modificado mediante js";

console.log(
  "#################### Query Selector #############################"
);

// const encabezadoById = document.querySelector("#encabezado");
// console.log(encabezadoById);

// const encabezadoByClass = document.querySelector(".encabezado");
// console.log(encabezadoByClass);

// //Obtener por tag
// const h1ByTag = document.querySelector("h1");
// console.log(h1ByTag);

// //Busqueda multicriterio y por hijos
// const primerEnlaceFooter = document.querySelector("#principal a:first-child");
// console.log(primerEnlaceFooter);

// const ultimoEnlaceFooter = document.querySelector("#principal a:last-child");
// console.log(ultimoEnlaceFooter);

// const enesimoEnlaceFooter = document.querySelector("#principal a:nth-child(3)");
// console.log(enesimoEnlaceFooter);
// //Nota, si usas el querySelector y hay varios elementos que
// //comparten id, o class o lo que sea, solo devuelve el primero

console.log(
  "#################### Busqueda multiple #############################"
);
// const enlaces = document.getElementsByClassName("enlace");
// console.log(enlaces);
// console.log(enlaces[5]);

// //Concatenando condiciones
// const listaEnlaces = document
//   .querySelector("#principal")
//   .getElementsByClassName("enlace");
// console.log(listaEnlaces);

// //busqueda por tagName (nombre etiqueta)
// const enlacesByTag = document.getElementsByTagName("a");
// enlacesByTag[18].style.color = "red";
// console.log(enlacesByTag);

// //convertir a array y hacer un for para ver el texto

// let enlacesComoArray = Array.from(enlacesByTag);

// enlacesComoArray.forEach(function (a) {
//   console.log(a.innerText);
// });

// //query selector all

// const enlacesQuerySelectorAll = document.querySelectorAll("#principal .enlace");
// console.log(enlacesQuerySelectorAll);

// //impares
// const enlacesQuerySelectorAllImpares = document.querySelectorAll(
//   "#principal a:nth-child(odd)"
// );

// enlacesQuerySelectorAllImpares.forEach(function (elemento) {
//   elemento.style.color = "green";
// });

// console.log(enlacesQuerySelectorAllImpares);

console.log(
  "#################### Herencia de elementos (traversing) #############################"
);

// const navegacion = document.querySelector("#principal");

// console.log(navegacion);
// console.log(navegacion.childNodes);

// //los text que arroja lo anterior son los espacios entre etiquetas entre el propio html
// //para eliminarlos, se puede usar .children
// console.log(navegacion.children);
// console.log(navegacion.children[0].nodeName);
// console.log(navegacion.children[0].nodeType);

// //tipos de nodos
// // 1 => elementos html
// // 2 => atributos
// // 3 => text nodes
// // 8 =>  comentarios
// // 9 => documentos
// // 10 => doctype

// const barraNavegacion = document.querySelector(".barra");

// console.log(barraNavegacion.children[0].children[0].children);

// //last element child
// console.log(barraNavegacion.children[0].children[0].lastElementChild);

// //first element child
// console.log(barraNavegacion.children[0].children[0].firstElementChild);

// //contar numero hijos
// console.log(barraNavegacion.children[0].children[0].childElementCount);

// const enlacesTraversing = document.querySelectorAll(".enlace");
// //viajar al padre
// console.log(enlacesTraversing[0].parentElement);

// //viajar hacia arriba
// console.log(
//   enlacesTraversing[0].parentElement.parentElement.parentElement.parentElement
// );

// //sibbling => elementos al mismo nivel que el seelccionado
// console.log(enlacesTraversing);
// console.log(enlacesTraversing[4].previousElementSibling);
// console.log(
//   enlacesTraversing[4].previousElementSibling.previousElementSibling
//     .previousElementSibling.previousElementSibling
// );

// console.log(enlacesTraversing[2].nextElementSibling);

console.log(
  "#################### Creando elementos html con js #############################"
);

// const enlaceACrear = document.createElement("a");
// enlaceACrear.className = "enlace";
// enlaceACrear.id = "nuevo-id";
// enlaceACrear.setAttribute("href", "#");
// enlaceACrear.setAttribute("target", "_blank");
// enlaceACrear.innerText = "Ir a google (enlace creado por js)";
// console.log(enlaceACrear);
// document.querySelector("#secundaria").appendChild(enlaceACrear);

console.log(
  "#################### Reemplazando elementos html con js #############################"
);

// const nuevoEncabezado = document.createElement("h2");
// nuevoEncabezado.id = "encabezadoNuevo";
// nuevoEncabezado.innerText = "Nuevo encabezado creado por js.";

// //elemento que va a ser reemplazado
// const anterior = document.querySelector("#encabezado");
// //elemento padre
// const padre = document.querySelector("#lista-cursos");

// //reemplazo
// padre.replaceChild(nuevoEncabezado, anterior);

// console.log(anterior.parentElement);

console.log(
  "#################### Modificando atributos con js #############################"
);

// const enlacesParaModificar = document.querySelectorAll(".enlace");
// const navegacionParaModificar = document.querySelector("#principal");

// //eliminar elementos apuntando directamente a el
// enlacesParaModificar[0].remove();

// //eliminar elementos apuntando al padre
// navegacionParaModificar.removeChild(enlacesParaModificar[2]);

// //obtener clase de css
// console.log(enlacesParaModificar[1].className);
// console.log(enlacesParaModificar[1].classList);
// enlacesParaModificar[1].classList.add("nueva-clase-js");
// console.log(enlacesParaModificar[1]);
// enlacesParaModificar[2].classList.remove("enlace");
// console.log(enlacesParaModificar[2].classList);

// //leer atributos
// var hrefALeer = enlacesParaModificar[3].getAttribute("href");
// enlacesParaModificar[3].setAttribute("href", "http://google.com");
// enlacesParaModificar[3].setAttribute("data-id", 20);
// enlacesParaModificar[3].setAttribute("namePersonalizado", "hola");
// console.log(enlacesParaModificar[3].hasAttribute("data-id"));
// console.log(enlacesParaModificar[3]);
// setTimeout(function () {
//   enlacesParaModificar[3].removeAttribute("namePersonalizado");
//   console.log(enlacesParaModificar[3]);
// }, 1000);
