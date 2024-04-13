import { PrintButtonLetras } from "../../components";
import { gameOver, id, iniciar } from "../../utils";

import "./Ahorcado.css";
const template = () => `<div id="containerAhorcado">
  
<div id="game">
<img id="imagen" src="sourceAhorcado/img0.png" alt="Ahorcado" />
<div id="palabrayletras"> 
    <p id="palabraAdivinar"></p>
    <button id="jugar">Obtener palabra</button>

    <p id="resultado"></p>
    <div id="letras"></div>
    </div>
</div>
</div>`;

const listeners = () => {
  const btn = id("jugar");
  btn.addEventListener("click", iniciar);
};

export const printAhorcadoPage = () => {
  document.querySelector("main").innerHTML = template();
  PrintButtonLetras();
  listeners();
  gameOver();
};
