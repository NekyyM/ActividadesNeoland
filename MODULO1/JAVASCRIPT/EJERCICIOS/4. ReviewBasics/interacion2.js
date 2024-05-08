// Dado el siguiente javascript usa forof y forin para hacer la media
// del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const calcularMedia = (array) => {
  let sumaAll = 0;
  let media = 0;

  for (palabra of array) {
    for (clave in palabra.favoritesSounds) {
      sumaAll += palabra.favoritesSounds[clave].volume;
      media++;
    }
  }
  return sumaAll / media;
};
console.log(calcularMedia(users));

//igual que en el ejercicio anterior se itera primero en cada elemento del array con un for of
// luego se itera en cada propiedad de cada elemento, como es un objeto se usa for in
