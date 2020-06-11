const cotizador2 = new API(
  '592e72bc303d2c82b04f47e5acf7884bb65e5c5568389a0cd3a816b5c029ae1e'
);
class Interfaz {
  constructor() {
    this.init();
  }

  init() {
    this.construirSelect();
  }

  construirSelect() {
    cotizador2.obtenerCriptmonedasApi().then((monedas) => {
      const select = document.querySelector('#criptomoneda');
      for (const [key, value] of Object.entries(monedas.monedas.Data)) {
        const opcion = document.createElement('option');
        opcion.value = value.Symbol;
        opcion.appendChild(document.createTextNode(value.CoinName));
        select.appendChild(opcion);
      }
    });
  }

  mostrarMensaje(mensaje, clases) {
    const div = document.createElement('div');
    div.className = clases;
    div.appendChild(document.createTextNode(mensaje));
    const divMensajes = document.querySelector('.mensajes');
    divMensajes.appendChild(div);

    setTimeout(() => {
      document.querySelector('.mensajes div').remove();
    }, 2000);
  }

  mostrarResultado(resultado, moneda, crypto) {
    const datosMoneda = resultado[crypto][moneda];

    let html = ` 
    <div class="card bg-warning">
    <div class="card-body text-light">
    <h2 class="card-title">Resultado:</h2>
    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${
      datosMoneda.TOSYMBOL
    } es de: ${datosMoneda.PRICE.toFixed(4)}</p>
    </div>
        </div>
    
    `;

    document.querySelector('#resultado').innerHTML = html;
  }
}
