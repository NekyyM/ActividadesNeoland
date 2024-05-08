// Crea una función que nos devuelva el número de veces que se repite cada una
// de las palabras que lo conforma.
// Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(array) {
  const contador = {}; //objeto vacio para guardar resultado
  for (palabra of array) {
    //bucle for of porque es un array
    if (contador[palabra]) {
      //si existe la palabra se suma al contador si no el valor que recibe es 1
      contador[palabra]++;
    } else {
      contador[palabra] = 1;
    }
  }
  return contador;
}

console.log(repeatCounter(counterWords));
