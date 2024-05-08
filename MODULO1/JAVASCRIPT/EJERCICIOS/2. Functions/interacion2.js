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

const findLongestWord = (array) => {
  let maxLongitud = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > array[maxLongitud].length) maxLongitud = i;
  }
  return array[maxLongitud];
};
console.log(findLongestWord(avengers));
