export const SongsHeard = ({ SongsHeard }) => {
  const { songsHeard } = SongsHeard;
  return (
    <div className="containerSongs">
      <h2>Canciones</h2> <hr />
      {/* { añade un línea debajo del h2/} */}
      {songsHeard.map((songsHeard, index) => (
        <div key={index}>
          <p>{songsHeard}</p>
        </div>
      ))}
    </div>
  );
};
