import { useEffect, useState } from "react";

export const EffectOnLoad = () => {
  const [myName, setMyName] = useState("Pedro Pedro Pedro");

  useEffect(() => {
    setTimeout(() => {
      setMyName("Neky Molina");
    }, 3000);
  }, []);

  return (
    <>
      <h4>{myName}</h4>
      <input
        type="text"
        value={myName}
        onChange={(e) => setMyName(e.target.value)}
      />
    </>
  );
};
