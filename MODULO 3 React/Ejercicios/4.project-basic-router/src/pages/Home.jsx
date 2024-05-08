import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h2>Pagina Home 🎮</h2>
      <p>Ejemplo sobre React Router Dom</p>
      <p>Visita la pagina de Heroes</p>
      <Link to="heroes">Heroes</Link>
    </>
  );
};
