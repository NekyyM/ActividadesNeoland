// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
// const numbers = [12, 21, 38, 5, 45, 37, 6];
// function average(param) {
// }

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma = suma + array[i];
  }
  const promedio = suma / array.length;
  return promedio;
}
console.log(average(numbers));
