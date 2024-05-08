import "./App.css";
import { Paragraph, SubTitle, Title, Image } from "./components";

function App() {
  return (
    <>
      <div>
        <Title texto={"Soy un h1 como un titulo"} />
        <SubTitle texto={"Soy un h2 como un subitulo"} />
        <Image
          src="https://res.cloudinary.com/demo/image/upload/sample.jpg"
          alt="imagen pagina"
        />

        <Paragraph texto={"Soy un párrafo"} />
      </div>
    </>
  );
}

export default App;
