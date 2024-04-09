import "./Ahorcado.css";

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

//todavia no tiene nada para iniciar el juego y no he creado el boton play
const starGame = () => {
  const startButton = document.getElementById("play");
};

export const printAhorcadoPage = () => {
  document.querySelector("main").innerHTML = template();
  starGame();
};
