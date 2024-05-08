import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <h1>Ejercicio de Router Dom 🥑</h1>
      </header>
      <main className="main">
        <nav className="navGeneral">
          <NavLink to="">Home</NavLink>
          <NavLink to="heroes">Heroes</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
        <Outlet />
      </main>
      <footer>Hecho por Neky 🎉</footer>
    </>
  );
};
export default App;
