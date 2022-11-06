import { useReducer } from "react";
import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { value: state.value + 1 };
    case "decrement":
      return { value: state.value - 1 };
    case "reset":
      return { value: 0 };
    case "triple":
      return { value: state.value * 3 };
    default:
      throw new Error();
  }
};

const CounterTwo = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div className="card">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Tosin</h1>
      <p className="about">Simple Counter using UseReducer</p>

      <h2>Count is {state.value}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "triple" })}>X3</button>

      <p>
        <Link to="/" className="link">
          Go to Custom Hook Counter
        </Link>
      </p>
      <p>
        <Link to="buggycounter" className="link">
          Go to Buggy Counter
        </Link>
      </p>
    </div>
  );
};
export default CounterTwo;
