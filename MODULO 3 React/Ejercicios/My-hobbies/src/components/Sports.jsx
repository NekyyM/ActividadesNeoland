export const Sports = ({ Sports }) => {
  const { sports } = Sports;
  return (
    <div className="containerSports">
      <h2>Deportes</h2> <hr />
      {/* { añade un línea debajo del h2/} */}
      {sports.map((sports, index) => (
        <div key={index}>
          <p>
            <strong>Name:</strong> {sports.name} <br />
            <strong>Indoor:</strong> {sports.indoor ? "Si" : "No"} <br />
            <strong>Team:</strong> {sports.favoriteTeam} <br />
          </p>
          {index !== sports.length - 1 && (
            <>
              <br />
            </>
          )}
          {/* Agrega un salto de línea si no es la última película/serie para diferenciar unas de otras */}
        </div>
      ))}
    </div>
  );
};
