const botonCargar = document.querySelector("#cargar");

botonCargar.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "datos.txt", true);

  xhr.onload = function () {
    if (this.status === 200) {
      document.querySelector(
        "#listado"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  xhr.send();
});
