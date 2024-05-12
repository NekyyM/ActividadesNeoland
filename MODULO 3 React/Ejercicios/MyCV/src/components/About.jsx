import "./About.css";

const About = ({ hero }) => {
  return (
    <div>
      <div className="about card">
        {hero.aboutMe.map((item) => {
          return (
            <div key={item}>
              <p className="name">🔎 {item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
