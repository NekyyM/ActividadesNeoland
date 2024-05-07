export const Read = ({ Read }) => {
  const { read } = Read;
  return (
    <div>
      <h2>Title: {read.title}</h2>
      <p>
        Author: {read.authorName} {read.authorSurname}
      </p>
      <p>Genre: {read.genre}</p>
      <p>Date of Publication: {read.dateOfPublication}</p>
      <p>Author Birth Date: {read.authorBirthDate}</p>
      <img src={read.bookImage} alt="Book Cover" />
      <h3>Other Books:</h3>
      <ul>
        {read.otherBooks.map((book, index) => (
          <li key={index}>{book.info}</li>
        ))}
      </ul>
    </div>
  );
};
