import "./App.css";
import {
  Footer,
  Header,
  Imagen,
  Main,
  Paragraph,
  SubTitle,
  Title,
} from "./components";

function App() {
  return (
    <>
      <Header>
        <Title texto={"Cómo hacer una lista desplegable en HTML paso a paso"} />
      </Header>
      <Main>
        <SubTitle
          texto={
            "Manejar HTML puede resultar sencillo para algunos y complicado para otros, por eso, nos hemos propuesto a explicarte diferentes acciones que puedes realizar con este lenguaje de marcado. Específicamente te contaremos cómo hacer una lista desplegable en HTML paso a paso, porque es una de las funcionalidades esenciales para mejorar la interacción en tus páginas web. Además, le permite a tus usuarios elegir entre varias opciones de forma sencilla. Entonces, empecemos."
          }
        />
        <Imagen
          src="https://res.cloudinary.com/demo/image/upload/sample.jpg
"
          alt="imagen pagina"
        />
        <Paragraph
          texto={
            "Una lista desplegable en HTML, técnicamente conocida como un elemento <select>, es un componente esencial en la interfaz de usuario que facilita a los usuarios la selección de una opción dentro de un menú compacto. Este elemento es especialmente útil y prevalente en la creación de formularios web, donde el espacio en la pantalla puede ser limitado y la organización y claridad son cruciales."
          }
        />
      </Main>
      <Footer>
        <Paragraph
          texto={
            "Una de las principales funciones de HTML es dar al texto estructura y significado (también conocido como semántica (en-US)), de forma que un navegador pueda mostrarlo correctamente. Este articulo explica la forma en que se puede usar HTML para estructurar una página de texto añadiendo encabezados y párrafos, enfatizando palabras, creando listas y más."
          }
        />
      </Footer>
    </>
  );
}

export default App;
