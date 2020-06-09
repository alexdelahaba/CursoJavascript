//se mantiene al cerrar el navegador
localStorage.setItem("nombre", "Juan");
localStorage.setItem("aEliminar", "jeje");

setTimeout(function () {
  localStorage.removeItem("aEliminar");
  localStorage.setItem("eliminado???", "true");
}, 2000);
//se borra al cerrar el navegador
sessionStorage.setItem("nombre", "Juan");

const nombre = localStorage.getItem("nombre");
console.log(nombre);

//para eliminar todo el localStorage

setTimeout(function () {
  localStorage.clear();
}, 5000);
