export const Languages = ({ Languages }) => {
  const { language, wrlevel, splevel } = Languages.languages; // Accede directamente a las propiedades del objeto Languages
  return (
    <div className="containerLanguages">
      <h2>Idiomas</h2>
      <hr />
      <div>
        <p>
          <strong>Idioma:</strong> {language} <br />
          <strong>Writting:</strong> {wrlevel} <br />
          <strong>Speaking:</strong> {splevel} <br />
        </p>
      </div>
    </div>
  );
};
