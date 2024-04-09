// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const lotAges = ages.filter((ages) => ages > 18);
console.log(lotAges);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pares = ages2.filter((ages2) => ages2 % 2 === 0);
console.log(pares);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamersLOL = streamers.filter(
  (streamers) => streamers.gameMorePlayed === "League of Legends"
);
console.log(streamersLOL);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// usar la funcion .includes() para la comprobación.
const streamers2 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamersU = streamers2.filter((streamers2) =>
  streamers2.name.includes("u")
);
console.log(streamersU);

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35.

const streamersLegends = streamers
  .filter((streamers) => streamers.gameMorePlayed.includes("Legends"))
  .filter((streamers) => streamers.age > 35)
  .filter(
    (streamers) =>
      (streamers.gameMorePlayed = streamers.gameMorePlayed.toUpperCase())
  );

console.log(streamersLegends);
