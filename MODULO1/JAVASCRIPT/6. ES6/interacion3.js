// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];
const copia = [...pointsList];
console.log(copia);

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const copiaToy = { ...toy };
console.log(copiaToy);

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
// spread operatos.
const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsList3 = [54, 87, 99, 65, 32];

const sumaList = [...pointsList2, ...pointsList3];
console.log(sumaList);

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
// con spread operators.
const toy2 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const sumaToy = { ...toy2, ...toyUpdate };
console.log(sumaToy);

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
// pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const [rojo, azul, ...newColors] = colors;

console.log(newColors);

// duda, me sale en consola todos los colores menos el rojo siguiendo la sintaxis
// de los apuntes el ejemplo es un objeto ---> Destructuring with spread operator
// const details = { firstName:'Code', lastName: 'Burst', age: 22 };
// Saca el valor 22 y deja el resto de atributos const { age, ...restOfTheDetails } = details;
// console.log(age, restOfTheDetails); // 22 { firstName: 'Code', lastName: 'Burst' }
