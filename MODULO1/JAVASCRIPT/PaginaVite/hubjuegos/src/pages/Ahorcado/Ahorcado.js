import "./Ahorcado.css";
import Swal from "sweetalert2";

const template = () => `

<div id="containerAhorcado">
<div id="game">
<div id="muñequito"> <img id="palo0" src="./sourceAhorcado/img0.png"  alt="Ahorcado" />
</div>
<div id="palabra+letras"> 
<p id="palabraAdivinar">
<span></span><span></span><span></span><span></span>
</p>
<button id="palabra"> Obtener palabra</button>
<div id="botonesLetras"> 
<button>a</button>
<button>b</button>
<button>c</button>
<button>d</button>
<button>e</button>
<button>f</button>
<button>g</button>
<button>h</button>
<button>i</button>
<button>j</button>
<button>k</button>
<button>l</button>
<button>m</button>
<button>n</button>
<button>o</button>
<button>p</button>
<button>q</button>
<button>r</button>
<button>s</button>
<button>t</button>
<button>u</button>
<button>v</button>
<button>w</button>
<button>x</button>
<button>y</button>
<button>z</button>
</div>
</div>
</div>
</div> `;

//no he creado ventana antes del juego 

const starGame = () => {
  const startButton = document.getElementById("palabra");
  let palabraFinal = "";
  const palabras = [
    "manzana",
    "desarrollador",
    "videojuego",
    "streamer",
    "fideos",
    "microfono",
    "caramelos",
    "pokemon",
    "minions",
    "pikachu",
    "sudadera",
  ];

  startButton.addEventListener("click", (event) => {
    Swal.fire({
      position: "center",
      title: "MUCHA SUERTE 🤞🏼",
      imageUrl: "./sourceMemory/suerte.gif",
      imageHeight: 300,
      imageAlt: "A tall image",
      showConfirmButton: false,
      timer: 1500,
    });
    const botonOff = document.getElementById("palabra"); //de esta manera creo una funcion con el boton para empezar a jugar
    botonOff.disabled = true; // y le digo al boton que esté desabilidato cuando se clica para que no se pueda hacer trampas y cambiar de palabra
    // es booleano, si pongo true es verdad que está desabilitado
    const palabraRandom = (numMin, numMax) => {
      const amplitudValores = numMax - numMin; //la amplitud de valores es lo que hay dentro del numero MAX - el Min del array
      //sacame un valor entre esos valores que son 0 y 10
      const palabraAzar = Math.floor(Math.random() * amplitudValores) + numMin; // (10-15 igual a 5 pero queremos resultado del 10 al 15 por eso sumamos el valor min)
      //con floor redondea los valores para que no salgan numeros decimales si pusiera
      //math.round redondearia hacia arriba en el caso de 10,5555 seria 11.
      //LA posicion 11 no existe.
      return palabraAzar;
    };
    const parrafo = document.getElementById("palabraAdivinar"); // selecciona el lugar donde voy a mostrar todo
    parrafo.innerHTML = ""; // esto quiere decir que cada vez que toque el boton de jugar en el parrafo se me incluye un elemento html vacio para borrar la palabra anterior
    const cantPalabras = palabras.length; //recorrer elementos del array
    const valorAzar = palabraRandom(0, cantPalabras); //el valor más bajo es 0 y cant de palabras es el más alto en este caso 10
    palabraFinal = palabras[valorAzar]; //le pido que me saque las palabras segun su posicion
    console.log(palabraFinal);

    const cantLetras = palabraFinal.length; //length sirve para saber el numero de caracteres de la plaabra y crear los huecos de los span
    //con un bucle creo una etiqueta de tipo span segun la longitud de letras de cada palabra
    // bucle for, que arracna en 0 que es el valor más bajo, va a ir hasta la cantidad de letras de la palabra
    for (let i = 0; i < cantLetras; i++) {
      const span = document.createElement("span"); //primero crea una etiqueta span vacia por cada letra que tenga la palabra
      parrafo.appendChild(span); //este span lo incluyes al palabra como un hijo
    }
    const botones = document.querySelectorAll("#botonesLetras button");
    const clickLetras = () => {
      console.log(palabraFinal);
      for (let i = 0; i < botonesLetras.length; i++) {
        botonesLetras[i].addEventListener(click, clickLetras);
      }
    };
  });
};

export const printAhorcadoPage = () => {
  document.querySelector("main").innerHTML = template();
  starGame();
};
