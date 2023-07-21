import { useState } from "react";
export default function Timer() {
  const [count, setCount] = useState(10);
  const [disabled, setDisabled] = useState(false);

  const handleCount = () => {
    setDisabled(true);
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);

      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(intervalId);
          setDisabled(false);
          setCount(10);
        }
        return prevCount;
      });
    }, 500);
  };

  return (
    <div className="App">
      <p>Counter: {count}</p>
      <button disabled={disabled} onClick={handleCount}>
        Start
      </button>
    </div>
  );
}
