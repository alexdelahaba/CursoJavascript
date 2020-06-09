//Variables
const listaTweets = document.querySelector("#lista-tweets");

//Events listeners
eventListeners();

function eventListeners() {
  //envio form
  document
    .querySelector("#formulario")
    .addEventListener("submit", agregarTweet);
  //borrar tweets
  listaTweets.addEventListener("click", borrarTweet);

  //contenido cargado
  document.addEventListener("DOMContentLoaded", localStorageListo);
}

//Funciones
function agregarTweet(evt) {
  evt.preventDefault();
  const valorTextArea = document.getElementById("tweet").value;
  const li = document.createElement("li");
  const botonBorrar = document.createElement("a");

  botonBorrar.classList = "borrar-tweet";
  botonBorrar.innerText = "X";
  li.innerText = valorTextArea;

  li.appendChild(botonBorrar);
  listaTweets.appendChild(li);

  //añadir a localStorage
  agregarLocalStorage(valorTextArea);
}

function borrarTweet(e) {
  if (e.target.className === "borrar-tweet") {
    e.target.parentElement.remove();
    var tweetABorrar = getValorTweet(e.target.parentElement.innerText);
    var indice = buscarElementoLocalStorage(tweetABorrar);
    var localStorageActual = obtenerTweetsLocalStorage();
    localStorageActual.splice(indice, 1);
    localStorage.setItem("tweets", JSON.stringify(localStorageActual));
  }
}

function agregarLocalStorage(tweet) {
  var tweetsAlmacenados = obtenerTweetsLocalStorage();
  tweetsAlmacenados.push(tweet);

  localStorage.setItem("tweets", JSON.stringify(tweetsAlmacenados));
}

function obtenerTweetsLocalStorage() {
  var tweets;
  var arrayLocalStorage = localStorage.getItem("tweets");

  if (arrayLocalStorage === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(arrayLocalStorage);
  }
  return tweets;
}

function localStorageListo() {
  var tweets = obtenerTweetsLocalStorage();
  if (tweets !== null) {
    tweets.forEach((tweet) => {
      const valorTextArea = tweet;
      const li = document.createElement("li");
      const botonBorrar = document.createElement("a");

      botonBorrar.classList = "borrar-tweet";
      botonBorrar.innerText = "X";
      li.innerText = valorTextArea;

      li.appendChild(botonBorrar);
      listaTweets.appendChild(li);
    });
  }
}

function buscarElementoLocalStorage(tweetBuscado) {
  var arrayLocalStorage = JSON.parse(localStorage.getItem("tweets"));
  if (arrayLocalStorage !== null) {
    arrayLocalStorage.forEach((item) => {
      if (item == tweetBuscado) {
        return arrayLocalStorage.indexOf(item);
      }
    });
  }
}

function getValorTweet(tweet) {
  tweet = tweet.substring(0, tweet.length - 1);
  console.log(tweet);
  return tweet;
}
