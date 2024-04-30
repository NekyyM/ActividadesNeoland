import "./App.css";
import { Paragraph, SubTitle, Title, Image } from "./components";

function App() {
  return (
    <>
      <div>
        <Title texto={"Soy un h1 como un titulo"} />
        <SubTitle texto={"Soy un h2 como un subitulo"} />
        <Image
          src={
            "https://res.cloudinary.com/dq186ej4c/image/upload/v1682684561/changeColor_tat29q.png"
          }
        />
        <Paragraph texto={"Soy un párrafo"} />
      </div>
    </>
  );
}

export default App;
