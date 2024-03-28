//Usa un bucle for para recorrer todos los destinos del array y
//elimina los elementos que tengan el id 11 y 40.
//Imprime en un console log el array.

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

const destinos = (array) => {
  for (let i = 0; i < array.length; i++) {
    //for para recorrer el array
    if (array[i].id === 11 || array[i].id === 40) {
      //si el id es igual a 11 y a 40 entonces haz un splice
      array.splice(i, 1); //splice sirve para eliminar elementos de un array
      //el primer numero se refiere a la posicion y el segundo a los elementos
      //que se quieren borrar, EJ. un elemento, dos elementos, tres elementos.
    }
  }
  return array;
};
console.log(destinos(placesToTravel));
