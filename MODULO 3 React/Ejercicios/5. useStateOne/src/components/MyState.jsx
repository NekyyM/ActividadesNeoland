import { useState } from "react";

export const MyState = () => {
  const [myName, setMyName] = useState("Neky Molina"); //estado de REACT
  return (
    <>
      <h4>{myName}</h4>
      <input
        type="text"
        value={myName}
        onChange={(e) => setMyName(e.target.value)}
        //Vemos que como particularidad en el onChange invocamos al ‘setter’ con el valor actual del input,
        //gracias al onChange cambiará a tiempo real y nuestro estado será totalmente dinámico.
      />
    </>
  );
};
