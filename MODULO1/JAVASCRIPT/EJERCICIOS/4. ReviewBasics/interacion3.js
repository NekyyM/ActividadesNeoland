//*Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.
//**Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
//**Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

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

const sonidoFavorito = (array) => {
  const repes = {}; //creamos primero objeto vacio donde incluir los valores

  for (palabra of array) {
    //se recorre el array con for of
    for (clave in palabra.favoritesSounds) {
      //se recorre el elemento favoriteSounds de cada usuario for if porque es objetc
      repes[clave] //ternario, condicional más simple.
        ? repes[clave]++ //true, si la clave se repite se incrementa en el contador (++)
        : (repes[clave] = 1); //false, si está una vez solo tiene valor 1
    }
  }
  return repes;
};

console.log(sonidoFavorito(users));
