import About from "../components/About";
import Hero from "../components/Hero";
import { CV } from "../CV/CV";
const { hero } = CV;
export const Homepages = () => {
  return (
    <>
      <Hero hero={hero} />
      <About hero={hero} />
    </>
  );
};
