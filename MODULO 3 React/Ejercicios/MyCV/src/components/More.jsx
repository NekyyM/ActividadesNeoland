import "./More.css";

const More = ({ volunteer, habilities }) => {
  return (
    <>
      <div className="volunteer card">
        {volunteer.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">🖌 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
      <div className="habilities card">
        {habilities.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📁 {item}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default More;