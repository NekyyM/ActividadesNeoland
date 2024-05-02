import "./Gallery.css";

export const Gallery = ({ data }) => {
  const { characterList } = data;
  return (
    <div id="galleryPage">
      {characterList.map((character) => {
        if (character.status === "Alive") {
          //si el estado del personaje es igual a alive haz esto
          return (
            <div key={character.id}>
              <h1>{character.name}</h1>
              <h2>{character.location.name}</h2>
              <img src={character.image} alt={character.name} />
            </div>
          );
        } else {
          return null; // si no es igual a null, no renderiza nada
        }
      })}
    </div>
  );
};
