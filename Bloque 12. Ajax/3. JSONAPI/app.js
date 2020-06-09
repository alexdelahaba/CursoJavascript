const cargarPosts = document.querySelector("#cargar");

cargarPosts.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const respuesta = JSON.parse(this.responseText);
      var contenido = "";
      respuesta.forEach((resp) => {
        contenido += `
        <h3>${resp.title}</h3>
        <p>${resp.body}</p>
        `;
      });

      document.querySelector("#listado").innerHTML = contenido;
    }
  };
  xhr.send();
});
