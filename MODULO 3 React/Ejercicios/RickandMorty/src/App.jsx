import "./App.css";
import React from "react";
import { Gallery } from "./pages/Gallery";

const App = () => {
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  return (
    <>
      <Gallery data={{ characterList: characterList }} />
      {/* Importo el componente gallery y le linkeo la data que he seteado antes aqui  */}
    </>
  );
};
export default App;
