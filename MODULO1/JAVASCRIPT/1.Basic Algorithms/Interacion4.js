// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

avengers[0] = "IRONMAN";
console.log(avengers[0]);

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers.length);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer".
// Muestra en consola el último personaje del array
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

avengers.push("Morty", "Summer");
console.log(avengers);
console.log(avengers[4]);

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

const rickAndMortyCharacters = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];

rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0]);
console.log(rickAndMortyCharacters[4]);

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);

//splice borra el elemento que queramos eligiendo la posición, y el número de elementos que queremos borrar (1,1) elimina el segundo elemento siendo un elemento solo (1,2) elimina el segundo elemento y dos mas
// poniendo delete solo borra el elemento que indiquemos ejemplo: delete.rickandmorty[1]
