// 4.1 Dado el siguiente array, devuelve un array con sus nombres
// utilizando .map().
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const names = users.map((user) => user.name);
console.log(names);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// empiece por 'A'.
const users2 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
const names2 = users2.map((user) => user.name);
console.log(names2); //nuevo array de nombres

const result = (array) => {
  for (let i = 0; i < array.length; i++) {
    // recorrer el array bucle for
    if (array[i].startsWith("A")) {
      //condicion if
      array[i] = "Anacleto";
    }
  }
  return array;
};
console.log(result(names2));

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const result2 = (array) => {
  const cities2 = []; //array vacio para incluir el resultado
  for (palabra of array) {
    //primero se recorre el array con un for of
    if (palabra.isVisited) {
      //si cada palabra tiene la propiedad visited true (condicional)
      cities2.push(`${palabra.name} , Visitado`); //añade name + visitado con templated string
    } else {
      cities2.push(palabra.name); //si no solo añade el name
    }
  }
  return cities2;
};
console.log(result2(cities));
