const boton1 = document
  .querySelector('#boton1')
  .addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'empleado.json', true);
    xhr.onload = function () {
      if (this.status === 200) {
        const empleado = JSON.parse(this.responseText);
        const htmlTemplate = `
        <ul>
        <li>id => ${empleado.id}</li>
        <li>nombre => ${empleado.nombre}</li>
        <li>empresa => ${empleado.empresa}</li>
        <li>trabajo => ${empleado.trabajo}</li>
        </ul>
        `;

        document.querySelector('#empleado').innerHTML = htmlTemplate;
      }
    };
    xhr.send();
  });

const boton2 = document
  .querySelector('#boton2')
  .addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'empleados.json', true);
    xhr.onload = function () {
      if (this.status === 200) {
        const empleados = JSON.parse(this.responseText);
        var htmlTemplate = '';
        empleados.forEach((persona) => {
          htmlTemplate += `
        <ul>
        <li>id => ${persona.id}</li>
        <li>nombre => ${persona.nombre}</li>
        <li>empresa => ${persona.empresa}</li>
        <li>trabajo => ${persona.trabajo}</li>
        </ul>
        `;
        });

        document.querySelector('#empleado').innerHTML = htmlTemplate;
      }
    };
    xhr.send();
  });
