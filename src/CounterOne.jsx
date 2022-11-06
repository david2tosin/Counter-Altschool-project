import useCounter from "./useCounter"
import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";


const CounterOne = () => {
  const [value,increment,decrement,reset, setValue] = useCounter()

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
      <p className="about">Simple Counter using a custom hook</p>

      <h2>Count is {value}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setValue(value * 2)}>Double Count</button>
      <p>
        <Link to="countertwo" className="link">
          Go to UseReducer Counter
        </Link>
      </p>
      <p>
        <Link to="buggycounter" className="link">
          Go to Buggy Counter
        </Link>
      </p>
    </div>
  );
}
export default CounterOne