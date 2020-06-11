//Ejemplo  de async await

async function obtenerClientes() {
  const clientes = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Clientes recibidos...');
    }, 2000);
  });

  //error o no
  const error = false;

  if (!error) {
    const respuesta = await clientes;
    return respuesta;
  } else {
    await Promise.reject('Hubo un error');
  }
}

obtenerClientes()
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.log(err);
  });

setTimeout(() => {
  error = true;
}, 5000);

console.log(
  '##################################################################'
);

async function leerTodos() {
  const respuesta = await fetch(
    'https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos'
  );
  const datos = await respuesta.json();
  return datos;
}

leerTodos().then((resp) => {
  console.log(resp);
});
