import { HOBBIES } from "./HOBBIES/HOBBIES";
import "./App.css";
import { Languages, Movies, SongsHeard, Sports } from "./components";
import { Read } from "./components/Read";

const App = () => {
  return (
    <>
      <Read Read={HOBBIES} />
      <Movies Movies={HOBBIES} />
      <Sports Sports={HOBBIES} />
      <Languages Languages={HOBBIES} />
      <SongsHeard SongsHeard={HOBBIES} />
    </>
  );
};

export default App;
