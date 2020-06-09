//datos del navegador

let altura, anchura;

altura = window.outerHeight;
anchura = window.outerWidth;

console.log("alturaOuter", altura);
console.log("anchuraOuter", anchura);
console.log("alturaInner", window.innerHeight);
console.log("anchuraInner", window.innerWidth);
console.log("ubicacionActual", window.location);

//introduce al fianl de la url ?s=busqueda
console.log("paramsUrl", window.location.search);
