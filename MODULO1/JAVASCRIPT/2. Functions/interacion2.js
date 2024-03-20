//Completa la función que tomando un array de strings como
//argumento devuelva el más largo, en caso de que dos strings tenga
//la misma longitud deberá devolver el primero.

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const findLongestWord = (avengers) => {
  let maxLongitud = 0;
  for (let i = 1; i < avengers.length; i++) {
    if (avengers[i].length > avengers[maxLongitud].length) maxLongitud = i;
  }
  return avengers[maxLongitud];
};
console.log(findLongestWord(avengers));
