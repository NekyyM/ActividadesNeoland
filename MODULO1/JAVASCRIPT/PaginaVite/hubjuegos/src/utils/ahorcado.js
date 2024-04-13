import { palabras } from "../global/data/ahorcado.data";
import {
  getInfoAhorcado,
  setAciertos,
  setErrores,
  setPalabrita,
} from "../global/state/ahorcado.state";
import Swal from "sweetalert2";
export const id = (str) => {
  return document.getElementById(str);
};

export const obtenerRandom = (numMin, numMax) => {
  const amplitudValores = numMax - numMin; // es  lo que hay dentro del numero MAX - el Min del array
  //sacame un valor entre esos valores que son 0 y 15 (15 - 0= 15)
  const valorAzar =
    Math.floor(Math.random() * amplitudValores) +
    numMin; /* (10-15 igual a 5 pero lo queremos es buscar dentro del 0 al 15 por eso sumamos el valor min) 5 - 15 = 10 + 5 */
  //se pone math.floor para que no salgan decimales, y al redondear no coja numero mayor.
  //si pusiera mathround al redondear seria 15,556666 = 16 y no existe el valor 16.

  return valorAzar; //devuelveme el valor de todo esto que te he pedido
};

export const iniciar = (event) => {
  Swal.fire({
    position: "center",
    title: "🤞🏼🤞🏼🤞🏼🤞🏼🤞🏼",
    imageUrl: "./sourceAhorcado/suerteAhorcado.gif",
    imageHeight: 250,
    imageAlt: "A tall image",
    showConfirmButton: false,
    timer: 1500,
  });
  const imagen = id("imagen"); //todas la imagen tienen el id imagen
  imagen.src = "sourceAhorcado/img0.png";
  const btn = id("jugar"); //el boton de obtener palabra
  btn.disabled = true; //disabled es un booleano, si pongo true es verdad que está desabilitado
  id("resultado").setAttribute("hidden", true); //oculta la frase de resultado cuando empiezas una nueva partida
  setErrores(0);
  setAciertos(0);

  const parrafo = id("palabraAdivinar"); //Selecciono donde voy a mostrarlo
  parrafo.innerHTML = ""; //el parrafo no tiene nada por ahora asi que se queda vacio.
  //esto quiere decir que cada vez que toque el boton de jugar en el parrafo se me incluye un elemento html vacio para borrar la palabra anterior

  const cantPalabras = palabras.length; //recorrer elementos del array
  const valorAzar = obtenerRandom(0, cantPalabras); //el valor más bajo es 0 y cant de palabras es el más alto en este caso
  //Obtiene un numero random en este rango
  setPalabrita(palabras[valorAzar]); //del numero random que has sacado recorre la cantidad de palabras que tengo y saca una segun su posicion en el array

  const cantLetras = getInfoAhorcado().palabrita.length; //length sirve en este caso para saber
  //el numero de caracteres de cada palabra y crea los huecos que necesitas en los span para jugar

  const btnLetras = document.querySelectorAll("#letras button"); //llama al boton de las letras, recorre la palabra
  //y si no tiene la letra que he pulsado de ese boton ponlo disable
  for (let i = 0; i < btnLetras.length; i++) {
    btnLetras[i].disabled = false;
  }
  //con un bucle creo una etiqueta de tipo span segun la longitud de letras que tenga la palabra
  // bucle for, va a recorrer todos los botones de letra que tengo.

  for (let i = 0; i < cantLetras; i++) {
    const span = document.createElement("span"); //primero crea una etiqueta span vacia por cada letra que tenga la palabra
    parrafo.appendChild(span); //a este span lo incluyes dentro del parrafo como un hijo
  }
};

export const clickLetras = (event) => {
  //boton de las letras se ponen disable y el span de la palabra se crea
  const spans = document.querySelectorAll("#palabraAdivinar span");
  const button = event.target;
  button.disabled = true;

  const letra = button.innerHTML.toLowerCase();
  const palabra = getInfoAhorcado().palabrita.toLowerCase(); //en caso que haya mayusculas y minusculas

  let acierto = false;
  for (let i = 0; i < palabra.length; i++) {
    if (letra == palabra[i]) {
      //i es la posicion de la letra en la palabra, si adivina la letra coincide con la letra que imprime
      spans[i].innerHTML = letra;
      let aciertos = parseInt(getInfoAhorcado().cantAciertos);
      setAciertos(aciertos + 1); //si tiene la letra que he pulsado imprimela en le span, y suma un acierto
      acierto = true;
    }
  }

  if (acierto == false) {
    let errores = parseInt(getInfoAhorcado().cantErrores);
    console.log(errores); //si acierto sigue siendo false entonces suma un error y cambia la imagen
    setErrores(errores + 1);
    console.log("errores", getInfoAhorcado().cantErrores);
    const source = `./sourceAhorcado/img${getInfoAhorcado().cantErrores}.png`; //templed string para cambiar la imagen
    const imagen = document.getElementById("imagen");
    imagen.src = source;
  }

  if (getInfoAhorcado().cantErrores == 7) {
    //si la cantidad de errores llega a 7 que es el limite de intentos sale el resultado
    // y empieza un nuevo juego
    id("resultado").innerHTML =
      "Mala suerte 👎🏼 la palabra era  " + getInfoAhorcado().palabrita;
    gameOver();
  } else if (
    getInfoAhorcado().cantAciertos == getInfoAhorcado().palabrita.length
  ) {
    id("resultado").innerHTML = "HAS GANAADOOO 🎉";
    gameOver();
  }
  console.log(
    "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acierto
  );
};

export const gameOver = () => {
  const btnLetras = document.querySelectorAll("#letras button");
  for (let i = 0; i < btnLetras.length; i++) {
    btnLetras[i].disabled = true;
    id("resultado").removeAttribute("hidden"); //Muestra el resultado cuando termina la partida porque estaba oculto
  }
  const btn = id("jugar");
  btn.disabled = false; // desactiva el boton de las letras y vuelve a activar el boton de pedir palabra
  //para nueva partida
};
