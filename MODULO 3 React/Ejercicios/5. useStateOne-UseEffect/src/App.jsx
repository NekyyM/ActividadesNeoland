import { CodeEffectUpdate } from "./components/ CodeEffectUpdate";
import { EffectOnLoad } from "./components/EffectOnLoad";
import { MyState } from "./components/MyState";

const App = () => {
  return (
    <>
      <MyState />
      <CodeEffectUpdate />
      <EffectOnLoad />
    </>
  );
};

export default App;
