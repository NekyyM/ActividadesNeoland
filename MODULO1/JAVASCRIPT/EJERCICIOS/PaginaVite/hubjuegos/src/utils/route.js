import { getUser } from "../global/state/globalState";
import {
  Login,
  PrintMemoryPage,
  PrintPokemonPage,
  printTemplateDashboard,
  printAhorcadoPage,
} from "../pages";

export const initControler = (pagesRender) => {
  switch (pagesRender) {
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;
    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    case "Ahorcado":
      printAhorcadoPage();
      break;
    case "Login":
      Login();
      break;
    case "Memory":
      PrintMemoryPage();
      break;
  }
};
