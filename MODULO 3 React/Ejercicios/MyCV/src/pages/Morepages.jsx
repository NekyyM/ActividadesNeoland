import More from "../components/More";
import { CV } from "../CV/CV";

const { languages, habilities, volunteer } = CV;
export const Morepages = () => {
  return (
    <div>
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
    </div>
  );
};
