// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const input = document.getElementById("texoABuscar");

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

input.addEventListener("input", (e) => {
  e.preventDefault(); // para que no refresque la pagina
  const streamersBuscador = streamers.filter((player) =>
    player.name.toLowerCase().includes(input.value.toLowerCase())
  );
  console.log(streamersBuscador);
  resultados.innerHTML = streamersBuscador.map((element) => element.name); //con esto lo que hago es inyectarlo en el html, y con el .map recorro el array y saco el  .name
});
