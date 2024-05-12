import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Experiencepages } from "./pages/Experiencepages.jsx";
import { Morepages } from "./pages/Morepages.jsx";
import { Homepages } from "./pages/Homepages.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepages />} />
          <Route path="experience" element={<Experiencepages />} />
          <Route path="more" element={<Morepages />} />
          <Route
            path="*"
            element={
              <main>
                <p>404 - No existe la ruta!</p>
              </main>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
