import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <h1>Curriculum 🦸🏻‍♂️</h1>
      </header>
      <main className="main">
        <nav className="navGeneral">
          <NavLink to="">Home</NavLink>
          <NavLink to="experience">Experience</NavLink>
          <NavLink to="more">More</NavLink>
        </nav>
        <Outlet />
      </main>
      <footer>Hecho por Neky 🎉</footer>
    </>
  );
};

export default App;
