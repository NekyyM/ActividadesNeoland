import { useState } from "react";
import Education from "../components/Education";
import Experience from "../components/Experience";
import { CV } from "../CV/CV";
const { education, experience } = CV;

export const Experiencepages = () => {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <>
      <button className="boton-4" onClick={() => setShowEducation(true)}>
        Education
      </button>
      <button className="boton-4" onClick={() => setShowEducation(false)}>
        Experience
      </button>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
    </>
  );
};
