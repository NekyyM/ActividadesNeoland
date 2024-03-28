// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
// en caso que existan los elimina para retornar un array sin los elementos duplicados.
// Puedes usar este array para probar tu función:

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
const removeDuplicates = (array) => {
  let Repetido = [];
  for (let i = 0; i < array.length; i++) {
    !Repetido.includes(array[i]) && Repetido.push(array[i]);
    // si no es true ya no sigue con el and, entonces no lo incluye
  }
  return Repetido;
};

const comida = removeDuplicates(duplicates);

console.log(comida);
