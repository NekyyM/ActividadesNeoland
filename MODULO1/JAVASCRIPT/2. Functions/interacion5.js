// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume
// y de lo contrario cuente la longitud del string y lo sume.
//Puedes usar este array para probar tu función:

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
// hacemos una funcion flecha generica de cualquier array que se llama Result para luego más tarde llamarla.
const result = (array) => {
  // defino cada variable de string y number, como no sabemos el valor le digo que es 0
  let numbers = 0;
  let string = 0;

  // se crea una condicional para que cumpla una condicion y si se cumple otra condicion se haga otra cosa
  for (let i = 0; i <= array.length; i++) {
    // si el tipo del array es un number ([i] es para determinar todas las posicciones) entonces suma el number
    if (typeof array[i] == "number") {
      numbers += array[i];
      // si el tipo del array es un string entonces suma la cantidad de sus letras
    } else if (typeof array[i] == "string") {
      string += array[i].length;
    }
  }
  return `longitud de numeros es ${numbers} y la longitud del string es ${string}`;
};
// esto es un templatedscrip para que devuelva el resultado de la funcion. Con el dolar le incluyo los valores

console.log(result(mixedElements));

// a traves de la consola pido el resultado de la funcion result incluyendole el array mixedElements
