import "./App.css";
import { useCounter } from "./hooks/useCounter";
import { useToggle } from "./hooks/useToggle";

const App = () => {
  const [toggleState, handleToggle] = useToggle();
  const { count, handleIncrement, handleDecrement } = useCounter(5);
  return (
    <>
      <h1>Cuenta: {count}</h1>
      <button onClick={handleDecrement}>Increment</button>
      <button onClick={handleIncrement}>Decrement</button>
      <h3>Toggle: {toggleState.toString()}</h3>
      <button onClick={handleToggle}>Toggle</button>
    </>
  );
};

export default App;
