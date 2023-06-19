import React, { useEffect, useState } from "react";


const Timer = () => {

  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [seconds, setSeconds] = useState(10);

  const startTimer = () => {
    setActive(true);
    setDisabled(true);

    setTimeout(() => {
      setActive(false);
      setDisabled(false);
      setSeconds(10);
    }, 10000)
  };

  

useEffect(() => {
  let counter;

  if (active) {
    counter = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000)
  }

  return () => {
    clearInterval(counter);
  }
}, [active])

  return(
    <>
      <p>{seconds}</p>
      <button disabled={disabled} onClick={startTimer}>Start</button>
    </>

  )
}

export default Timer;