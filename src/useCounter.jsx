import { useState } from "react"

function useCounter(initialValue) {
  const [value, setValue] = useState(initialValue || 0)

  const increment = () => setValue((prevValue) => prevValue + 1)
  const decrement = () => setValue((prevValue) => prevValue - 1)
  const reset = () => setValue(initialValue || 0);
  return [
    value,
    increment,
    decrement,
    reset,
    setValue
  ]
}
export default useCounter