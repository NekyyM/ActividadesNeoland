import { getStateMemory, setStateMemory } from "../../global/state/memoryState";
import { generador, generateRandom, timeGenerator } from "../../utils";
import Swal from "sweetalert2";

import "./Memory.css";

const template = () => `
<div id="containerMemory"> 
<div id="datos">
  <div id="moves"></div>
        <div id="time"></div>
        </div>
    <div class="wrapper">
      <div class="stats-c">
      </div>
      <div class="game-c"></div>
      <button id="stop" class="hide">Me rindo 😓</button>
    </div>
    <div class="controls-c">
      <button id="start"><img src="./sourceMemory/play.png"></button> 
      <div class="portada"><img src="./sourceMemory/fondointro.jpeg"></div> 
      <p id="result"></p>
    
</div></div>`;

const starGame = () => {
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");

  startButton.addEventListener("click", () => {
    setStateMemory("interval", setInterval(timeGenerator, 1000));
    Swal.fire({
      position: "center",
      title: "MUCHA SUERTE 🤞🏼",
      imageUrl: "./sourceMemory/suerte.gif",
      imageHeight: 300,
      imageAlt: "A tall image",
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(() => {
      setStateMemory("movesCount", 0);
      setStateMemory("seconds", 0);
      setStateMemory("minutes", 0);
      const controls = document.querySelector(".controls-c");
      controls.classList.add("hide");
      stopButton.classList.remove("hide");
      startButton.classList.add("hide");

      const moves = document.getElementById("moves");
      moves.innerHTML = `<span>Movimientos: </span> ${getStateMemory(
        "movesCount"
      )}`;
      init();
    }, 900);
  });

  // --------- BOTON DE STOP  ---------------
  const handleStop = () => {
    const time = document.getElementById("time");
    time.innerHTML = "";
    clearInterval(getStateMemory("interval"));
    const controls = document.querySelector(".controls-c");
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
  };

  setStateMemory("stopGame", handleStop);
  stopButton.addEventListener("click", handleStop);
};

const init = () => {
  const result = document.getElementById("result");
  result.innerText = "";
  setStateMemory("winCount", 0);
  let cardValues = generateRandom();
  console.log(cardValues);

  generador(cardValues);
};

export const PrintMemoryPage = () => {
  document.querySelector("main").innerHTML = template();
  starGame();
};
