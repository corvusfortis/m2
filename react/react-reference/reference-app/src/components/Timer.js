import { useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(10);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleTimer = () => {
    setIsDisabled(true);
    const timerId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);

      setCount((prevCount) => {
        if (prevCount < 0) {
          clearInterval(timerId);
          setIsDisabled(false);
          setCount(10);
        }
        return prevCount;
      });
    }, 500);
  };

  return (
    <div>
      <p>{count}</p>
      <button disabled={isDisabled} onClick={handleTimer}>
        Start
      </button>
    </div>
  );
};

export default Timer;
