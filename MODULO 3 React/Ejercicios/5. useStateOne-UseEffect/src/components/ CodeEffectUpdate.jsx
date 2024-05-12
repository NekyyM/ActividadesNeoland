import { useState } from "react";
import { ObjectState } from "./ObjectState";

export const CodeEffectUpdate = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {visible && <ObjectState />}
      <button onClick={() => setVisible(!visible)} Open SuperHero />
    </>
  );
};
